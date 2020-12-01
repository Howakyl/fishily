import axios from 'axios';
// import 'react-router-dom';
const endPoint = `http://localhost:4000/api/fishily/users`;

class UserModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static getOne = (id) => {
        let request = axios.get(`${endPoint}/${id}`);
        return request;
    }
};

export default UserModel;