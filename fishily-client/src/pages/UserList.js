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
            console.log('data:', res);

            this.setState({ 
                users: res.data.users,
                loading: false,
            })
        });
    };

    renderUsers () {
        
        // console.log(this.state)
        return this.state.users.map((user) => {
            return (
                <li className="userList-card">
                    <UserCard
                        user={user}
                        key={user._id}
                    />
                </li>
            )
        })
    }

    render () {
        if(!this.state.loading) {
            return (
                <div>
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