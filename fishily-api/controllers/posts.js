const db = require("../models/");

// ALL POSTS
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

// ADD POSTS
const create = (req,res) => {

    db.User.findById(req.params.id)
        .then((foundUser) => {
            // console.log('FOUND USER:' , foundUser);
            db.Post.create(req.body)
                .then((createdPost) => {
                    // console.log('CREATED POST:', createdPost)
                    foundUser.posts.push(createdPost._id);
                    foundUser.save((err, savedUser) => {
                        if(err) return console.log(err);
                        console.log(savedUser);
                    });
                    res.json({ post: createdPost});
                })
                .catch((err) => {
                    console.log('error creating post: ', err);
                    res.json({ Error: 'Unable to create post.'});
                })
            console.log(foundUser);
            
        })
        .catch((err) => {
            console.log('error finding user: ', err);
            res.json({ Error: 'Unable to find user.'});
        });
};

module.exports = {
    index,
    create,
}