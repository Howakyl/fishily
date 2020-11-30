import axios from 'axios';
const endpoint = `http://localhost:4000/api/fishily/users`;

class UserModel {
    static all = () => {
        let request = axios.get(endpoint);
        return request;
    };
};

export default UserModel;