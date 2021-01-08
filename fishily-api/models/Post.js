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
    fish: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    locationName: {
        type: String,
        default: 'Unknown',
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fish_icon.svg/1200px-Fish_icon.svg.png'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
} , {timestamps: true});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;