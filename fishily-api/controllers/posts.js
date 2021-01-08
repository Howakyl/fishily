const db = require("../models/");

// ALL POSTS
const index = (req,res) => {
    db.Post.find({})
        .populate("user")
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
        .populate("user")
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

    const userId = req.params.id;
    db.User.findById(userId)
        .then((foundUser) => {
            req.body.user = userId;
            db.Post.create(req.body)
                .then((createdPost) => {
                    foundUser.posts.push(createdPost._id);
                    foundUser.save((err, savedUser) => {
                        if(err) return console.log(err);
                    });
                    res.json({ post: createdPost});
                })
                .catch((err) => {
                    console.log('error creating post: ', err);
                    res.json({ Error: 'Unable to create post.'});
                })
            
        })
        .catch((err) => {
            console.log('error finding user: ', err);
            res.json({ Error: 'Unable to find user.'});
        });
};

//UPDATE POST
const update = (req,res) => {

    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true})
            .then((updatedPost) => {
                res.json({ post: updatedPost });
            })
            .catch((err) => {
                console.log('error updating post: ', err);
                res.json({ Error: 'Unable to update post. '});
            });
};

//DELETE POST, DELETES POST ON USER
const destroy = (req,res) => {
    const postId = req.params.id;

    db.Post.findByIdAndDelete(postId)
        .then((deletedPost) => {

            db.User.findOne({'posts': postId} , (err, foundUser) => {
                if (err) return console.log(err);

                foundUser.posts.remove(postId);
                foundUser.save((err, savedUser) => {
                    if (err) return console.log(err);
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
    update,
    destroy
}