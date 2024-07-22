const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//routes
router.get('', (req, res) => {
    const locals = {
        title: "This is a test title",
        description: "Simple blog created in NodeJs, Express & MongoDb."
    }

    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

/** 
GET
HOME
**/

function insertPostData() {
    Post.insertMany([
        {
           title: "First Post!",
           body: "The body!"  
        },
        {
            title: "Second Post!",
            body: "More lovely bodies!" 
        },  
        {
            title: "Third Post!",
            body: "Bodies!!" 
        }  
    ])
}

insertPostData();
module.exports = router;