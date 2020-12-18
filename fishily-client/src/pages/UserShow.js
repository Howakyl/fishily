import React from 'react';
import UserModel from '../models/user';
import UserDetailCard from '../components/UserDetailCard';
import './UserShow.css';

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


    renderPosts () {
        if (this.state.user.posts.length > 0 ) {
            return <li>{this.state.user.username} has: {this.state.user.posts.length} posts.</li>
        }
    }

    render () {
        if (!this.state.loading) {
            return (
                <div className="userShow-container container">
                <section>
                    <img src={this.state.user.picture} alt={this.state.user.username} className="user-detail-img"/>
                    <h1>{this.state.user.username}</h1>
                    {/* <UserDetailCard user={this.state.user}> 
                    </UserDetailCard> */}
                </section>

                    <section>
                        <p>{this.renderPosts()}</p>
                    </section>
                </div>
            );
        } else {
            return <h1>Loading...</h1>
        }
    };
};

export default UserShow;