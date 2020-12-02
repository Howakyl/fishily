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
            // CHANGE THIS TO JUST LOG ERROR <----
            if (err) return console.log('Error Generating Salt'); 
            console.log('Salt = ', salt);

            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                if (err) return console.log(err);

                console.log('Hashed password: ', hashedPassword);

                const newUser = {
                    username: req.body.username,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    password: hashedPassword,
                    bio: req.body.password,
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
                console.log('result from deleteMany: ', result);
            });

            res.json({ user: deletedUser });
        })
        .catch((err) => {
            console.log('error deleting user : ', err);
            res.json({ Error: 'unable to delete user.'});
        });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
}