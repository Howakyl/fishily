const db = require("../models/");

const index = (req,res) => {
    db.Post.find({})
        .then((foundPosts) => {
            res.json({ posts: foundPosts});
        })
        .catch((err) => {
            console.log('error: ', err);
            res.json({ Error: 'Unable to retrieve post data.'});
        })
};

module.exports = {
    index,
}