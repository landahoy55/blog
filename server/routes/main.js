const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//routes
router.get('', async (req, res) => {

    try {
        const locals = {
            title: "This is a test title",
            description: "Simple blog created in NodeJs, Express & MongoDb."
        }

        //Pagination logic
        //Define number of articles per page
        let perPage = 10;

        //Get current page
        let page = req.query.page || 1;

        //A chained query to retrieve the data.
        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        //Count all the posts
        const count = await Post.countDocuments();
        //Get the next page number
        const nextPage = parseInt(page) + 1;
        //Work out if there is a next page
        const hasNextPage = nextPage <= Math.ceil(count / perPage);

        res.render('index', {
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });


    } catch (error) {
        console.log(error);
    }


});

router.get('/about', (req, res) => {
    res.render('about');
});

/** 
GET
HOME
**/


module.exports = router;


// function insertPostData() {
//     Post.insertMany([
//         {
//            title: "First Post!",
//            body: "The body!"  
//         },
//         {
//             title: "Second Post!",
//             body: "More lovely bodies!" 
//         },  
//         {
//             title: "Third Post!",
//             body: "Bodies!!" 
//         }  
//     ])
// }

// insertPostData();