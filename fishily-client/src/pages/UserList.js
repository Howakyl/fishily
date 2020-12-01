import React from 'react';
import UserModel from '../models/user';
import UserCard from '../components/UserCard';

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
                <UserCard
                    user={user}
                    key={user._id}
                />
            )
        })
    }

    render () {
        if(!this.state.loading) {
            return (
                <div>
                    <h2>users!</h2>
                    <ul>
                    
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