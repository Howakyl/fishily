import React from 'react';
import UserModel from '../models/user';
import UserDetailCard from '../components/UserDetailCard';

class UserShow extends React.Component {

    state = {
        user: {},
        loading: true
    };

    componentDidMount() {
        const userId = this.props.match.params.id
        
        UserModel.getOne(userId).then((res) => {
            
            this.setState({
                user: res.data.user,
                loading: false
            });
        });
    };


    render () {
        if (!this.state.loading) {
            return (
                <div>
                    <h1>User show</h1>
                    <UserDetailCard user={this.state.user}/>
                </div>
            );
        } else {
            return <h1>Loading...</h1>
        }
    };
};

export default UserShow;