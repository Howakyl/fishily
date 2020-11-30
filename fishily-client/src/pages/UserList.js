import React from 'react';
import UserModel from '../models/user';

class UserList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {

        UserModel.all().then((data) => {
            console.log('data:', data);

            this.setState({ users: data.users})
        });
    };

    render () {
        return (
            <div>
                <h2>users!</h2>
                <ul>

                </ul>
            </div>
        )
    }
};

export default UserList;