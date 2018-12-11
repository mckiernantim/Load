import User from '/user'

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


var Schema = mongoose.Schema;


const PostSchema = new Schema({
    title: {type: String,
    required: true},
    description: {type: String,
    required: true},
    category: {type: String,
    required: true},
    subCategory: {type: String,
    required: true},
    item: {type: String,
    required: true},
    deadthDate: {type: String,
    required: true},
    specifics: {

    }

});

const  PostModel = module.exports = mongoose.model("PostModel", PostSchema);
    

    
// Create Post



// Update Post


// Delete Post


// Find posts


// Get all posts


// Find post by number


// Find post by title

// Find posts by user

// Find post by date

// Find post by 
