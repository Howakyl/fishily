import axios from 'axios';
// import 'react-router-dom';
const endPoint = `http://localhost:4000/api/fishily/users`;

class UserModel {
    //GET all users
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    //GET one user
    static getOne = (id) => {
        let request = axios.get(`${endPoint}/${id}`);
        return request;
    };

    //CREATE user
    static create = (user) => {
        let request = axios.post(endPoint, user);
        return request;
    }
};

export default UserModel;