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
}

module.exports = {
    index,
    show,
}