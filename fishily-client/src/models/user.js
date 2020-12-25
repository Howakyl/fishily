import axios from 'axios';

const endPoint = `http://localhost:4000/api/fishily/users`;
const logInEndPoint = `http://localhost:4000/api/fishily/users/login`;

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

    //UPDATE user
    static update (userId, updatedUser) {
        let request = axios.put(`${endPoint}/${userId}` , updatedUser);
        return request;
    }

    //LOGIN user
    static login = (user) => {
        let request = axios.post(logInEndPoint , user);
        return request;
    }

    //LOGOUT user
    static logout = (user) => {
        let request = axios.delete(logInEndPoint , user);
        return request;
    }
};

export default UserModel;