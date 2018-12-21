const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');



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
        required: false}
    });



const Post = module.exports = mongoose.model('Post', PostSchema);
    

    
// Create Post
module.exports.createPost= function(newPost, callback){

}


// Update Post


// Delete Post


// Find posts


// Get all posts


// Find post by number


// Find post by title

// Find posts by user

// Find post by date

// Find post by 
