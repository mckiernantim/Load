
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');





// Post Schema

const PostSchema = mongoose.Schema({
    title: {
        title: String,
       },
    description: {
        description: String,
       },
    category: {
        category: String,
       },
    subCategory: {
        subCategory: String,
       },
    item: {
        item: String,
       },
    deadthDate: {
        deathDate: String,
       },
    specifics: {
        specifics:String,
        required: false
    },
    id: {
        id: String,
        required: false,
    
    }

    });






// user schema


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        
        
    },
    email: {
        type: String,
        required: true
        
           },
    username: {
        type: String,
        required: true
        
       
    },
    password:{
        type: String,
        required: true
        
       
    },
    title:{
       type: String,
       required: true
       
    },
    posts:{
        type: Array,
        required: false
        }
    
    
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback)
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}


module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=> {
            if(err) console.log(err);
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch ) => {
        if(err) console.log(err);
        callback(null,isMatch)
        ;  
})
module.exports.createPost = function(id, post){
     User.findByIdAndUpdate(id);

}

}
