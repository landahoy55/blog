const express = require('express');
const router = express.Router();

//routes
router.get('', (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "Simple blog created in NodeJs, Express & MongoDb."
    }


    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
