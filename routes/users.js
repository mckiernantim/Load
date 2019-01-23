


const express = require("express");
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const User = require('../models/user');
class Post {
    
   constructor(title= "", description= "", category= "", subCategory= "",item= "", deathdate="", specifics="", email="", username="" ){
            this.title = title
            this.description = description;
            this.category = category;
            this.subCategory = subCategory;
            this.item = item;
            this.deathdate= deathdate;
            this.specifics=specifics;
            this.username=username;
            this.email=email;
        }
}





// Register route

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name:  req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        title: req.body.title,
        posts: [""],
        

    });
    User.addUser(newUser, (err, user)=>{
        if(err){
            console.log(err)
            res.json({ success:false, msg: "failed to register user"});
        } else{
            res.json ({success: true, msg:"User registered"})
        }
    });

});


// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password + " logged from authenticate call")

    User.getUserByUsername(username, (err, user) =>{
        console.log(username, user)
        if (err) console.log(err);
        if(!user){
            return res.json({success: false, msg: "User not found"})
        }
        User.comparePassword(password, user.password, (err, isMatch)=> {
            if (err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week in seconds
                });
                 
                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email

                    }
                });
            } else {
                return res.json({success: false, msg: "Wrong Password"});

            }

        })
    });
});


router.get('/profile', 
passport.authenticate('jwt', {session:false}), 
(req, res, next) => {
    console.log(req.user)
    res.json({user: req.user});
});

// THIS MUST BE TESTED ONCE YOUR OFF THE PLANE
router.get('/dashboard',
(req, res, next) => {
   User.find({})
   .select('posts username email')  
   .exec()
   .then(docs => {
       const response = {
           
           posts: docs.map(doc => {
               return {
                   username: doc.username,
                   email: doc.email,
                   _id: doc._id,
                   posts: doc.posts,
                    
               }
           })
       }
      
       console.log(docs)
       res.status(200).json(response);
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({
           error: err
       })
   })
// 
})
router.get('/dashboard/:id',
(req, res, next) => {
   User.findById(req.params.id)
   .exec(function(err, user){
       if(err){
           res.send('error has occured');
       } else{
           console.log(user)
           res.json(user.posts);
           
       }
   }
)
// 
})
   
    


router.post('/post', (req, res, next) => {
    console.log(req.body)
    let userId = req.body.id
    let post = {
       
        title: req.body.title,
        username: req.body.username,
        email: req.body.email,
        description: req.body.description,
        category: req.body.category,
        subCategory: req.body.subCategory,
        item: req.body.item,
        deathDate: req.body.deathDate,
        specifics: req.body.specifics,


    };
     
    User.findOneAndUpdate(
        {_id: userId},
        {$push: {posts: post}},
        {new: true},
    
    ).then(console.log("got response from server"))
    return res.json({success:true}).redirect("/dashboard")
    }),
   







module.exports  = router