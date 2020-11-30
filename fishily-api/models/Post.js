const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
    },
    description: {
        type: String,
        maxlength: 300,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    location: {
        lat: {
            type: String,
        },
        lng: {
            type: String,
        }
    },
    image: {
        type: String,
    }
} , {timestamps: true});

const Post = mongoose.model("Post", postSchema);

module.exports = User;