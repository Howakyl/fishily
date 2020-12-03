import axios from 'axios';

const endPoint = `http://localhost:4000/api/fishily/posts`

class PostModel {

    //GET all posts
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    //GET one post


    //CREATE post
    static create = (post, userId) => {
        let request = axios.post(`${endPoint}/${userId}` , post);
        return request;
    }
};

export default PostModel;