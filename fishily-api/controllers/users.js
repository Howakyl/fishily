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

    db.User.create(req.body)
    .then((createdUser) => {
        res.json({ user: createdUser});
    })
    .catch((err) => {
        console.log('error creating game: ', err);
        res.json({ Error: 'Unable to create game.' });
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