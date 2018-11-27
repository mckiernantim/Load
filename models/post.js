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

var PostModel = mongoose.model("PostModel", PostSchema)
    

    


