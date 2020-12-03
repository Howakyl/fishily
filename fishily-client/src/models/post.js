import axios from 'axios';

const endPoint = `http://localhost:4000/api/fishily/posts`

class PostModel {

    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };
};

export default PostModel;