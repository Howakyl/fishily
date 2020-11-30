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

// SHOW POST
const show = (req,res) => {

    db.Post.findById(req.params.id)
        .then((foundPost) => {
            res.json({ post: foundPost });
        })
        .catch((err) => {
            console.log('error fetching post data', err);
            res.json({ Error: 'Unable to fetch post data'});
        });
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

const destroy = (req,res) => {
    const postId = req.params.id;

    db.Post.findByIdAndDelete(postId)
        .then((deletedPost) => {

            db.User.findOne({'posts': postId} , (err, foundUser) => {
                if (err) return console.log(err);

                foundUser.posts.remove(postId);
                foundUser.save((err, savedUser) => {
                    if (err) return console.log(err);
                    console.log('updated User: ', savedUser);
                });
            });

            res.json({ post: deletedPost });
        })
        .catch((err) => {
            console.log('error deleting post: ', err);
            res.json({ Error: 'unable to delete post.'});
        });
};

module.exports = {
    index,
    create,
    show,
    destroy,
}