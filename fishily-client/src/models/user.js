import axios from 'axios';
const endPoint = `http://localhost:4000/api/fishily/users`;

class UserModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static getOne = () => {
        let request = axios.get(`${endPoint}/._id`);
        return request;
    }
};

export default UserModel;