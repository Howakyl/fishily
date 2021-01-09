const bcrypt = require('bcryptjs');

const db = require("../models");

const index = (req, res) => {

    db.User.find({})
        .then((foundUsers) => {
            res.json({ users: foundUsers});
        })
        .catch((err) => {
            console.log('error: ', err);
            res.json({ Error: 'Unable to retrieve user data. '});
        })
};

const show = (req, res) => {

    db.User.findById(req.params.id)
    .populate("posts")
    .then((foundUser) => {
        res.json({ user: foundUser });
    })
    .catch((err) => {
        console.log('error fetching user data', err);
        res.json({ Error: 'Unable to fetch user data'});
    });
};

const create = (req,res) => {

    db.User.findOne({username : req.body.username}, (err, user) => {
        if(err) return console.log(err);

        if (user) {
            console.log('User Account Already Exists');
            return res.json({ Error: 'User already exists.'});
        };

        bcrypt.genSalt(10, (err, salt) => {
            if (err) return console.log(err); 

            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                if (err) return console.log(err);

                const newUser = {
                    username: req.body.username,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    password: hashedPassword,
                    bio: req.body.bio,
                }

                db.User.create(newUser)
                    .then((createdUser) => {
                        res.json({ user: createdUser});
                    })
                    .catch((err) => {
                        console.log('error creating user: ', err);
                        res.json({ Error: 'Unable to create user.' });
                    });
            })
        })

    });
};

const update = (req,res) => {

    db.User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true })
            .then((updatedUser) => {
                res.json({ user: updatedUser });
            })
            .catch((err) => {
                console.log('error updating user: ', err);
                res.json({ Error: 'Unable to update user.'});
            });
};

const destroy = (req,res) => {

    db.User.findByIdAndDelete(req.params.id)
        .then((deletedUser) => {

            db.Post.deleteMany({_id: {$in: deletedUser.posts }} , (err, result) => {
                if (err) return console.log(err);
            });

            res.json({ user: deletedUser });
        })
        .catch((err) => {
            console.log('error deleting user : ', err);
            res.json({ Error: 'unable to delete user.'});
        });
};

const logIn = (req,res) => {

    db.User.findOne({ username: req.body.username} , (err,user) => {
        if (err) return console.log(err);

        if(!user) {
            console.log('Login Route: No User Found');
            res.json({ Error: 'no user found.'});
        };

        // Verify user password with login password
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) return console.log('error comparing passwords');

            if(isMatch) {
                req.session.currentUser = user;
                console.log('successfully logged in!')
                res.send(req.session.currentUser);
            };
        });
    });
};

const logOut = (req,res) => {

    if (req.session.currentUser) {
        req.session.destroy((err) => {
            if (err) return console.log('error destroying session');
            console.log('successfully logged out!');
        });
    };
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    logIn,
    logOut,
}