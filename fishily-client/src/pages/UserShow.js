import React from 'react';
import UserModel from '../models/user';
import UserCard from '../components/UserCard';

class UserShow extends React.Component {

    state = {
        user: {},
        loading: true
    };

    componentDidMount() {
        console.log('PROPS : ' , this.props)
        const userId = this.props.match.params.id
        
        UserModel.getOne(userId).then((res) => {
            
            console.log('user data: ', res)
            this.setState({
                user: res.data.user,
                loading: false
            });
        });
    };


    render () {
        // if (!this.state.loading) {
            return (
                <div>
                    <h1>User show</h1>
                    <UserCard user={this.state.user}/>
                </div>
            );
        }
    // };
};

export default UserShow;