const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
    bio: {
        type: String,
        maxlength: 200,
    },
    picture: {
        type: String,
        default: 'https://www.abc.net.au/cm/rimage/11851850-3x2-large.jpg?v=2'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;