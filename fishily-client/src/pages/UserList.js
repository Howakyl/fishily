import React from 'react';
import UserModel from '../models/user';
import UserCard from '../components/UserCard';
import './UserList.css';

class UserList extends React.Component {
    state = {
        users: [],
        loading: true,
    }

    componentDidMount() {

        UserModel.all().then((res) => {

            this.setState({ 
                users: res.data.users,
                loading: false,
            })
        });
    };

    renderUsers () {
        
        return this.state.users.map((user) => {
            return (
                <li className="userList-card" key={user._id}>
                    <UserCard
                        user={user}
                    />
                </li>
            )
        })
    }

    render () {
        if(!this.state.loading) {
            return (
                <div className="container">
                    <h2 className="userList-title">Fishily users:</h2>
                    <ul className="userList-container">
                    
                        {this.renderUsers()}
                    </ul>
                </div>
            )
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
    }
};

export default UserList;