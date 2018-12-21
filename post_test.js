const asert = require('assert')
const mongoose = require('mongoose')
const Post = require('../models/post')
const User = require('../models/user')

// test descriptions

describe('Nesting records', function () {
    it('Create a post with sub-documents', function (done) {
        var test = new User({
            name: {
                name: "bob angers",
            },
            email: {
                email: "testguy@test.com",
            },
            username: {
                username: "bobA",
            },
            password: {
                password: "bob",
            },
            posts: [
                {
                    title: "first test post",
                },
                {
                    description: "testing the nesting of posts in the mongodb lets hope this fucker works",
                },
                {
                    category: "electric",
                },
                {
                    subcategory: "fresnel",
                },
                {
                    item: "19 fresnely fresnels",
                },
                {
                    deathDate: "12/24/2019",
                },
                {
                    specifics: "19 45 inch fresnel mcgee rocks set to be picked up and taken away by jungle johns awesome machine gun shop used slightly.  Painted green",
                }
            ],
        });
        test.save().then(function(){
            post.findOne({name:'bob angers'}).then(function(res){})
            assert(res.posts.length === 1);
            done ();

        });
    }
    )
})