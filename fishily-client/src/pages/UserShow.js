import React from 'react';
import { Link , withRouter } from 'react-router-dom';
import UserModel from '../models/user';
// import UserDetailCard from '../components/UserDetailCard';
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

            return (
                this.state.user.posts.map((post, index) => {
                    return (
                    <div className="card mb-3" style={{maxWidth: "540px"}} key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={post.image} alt={post.fish} className="user-detail-post-img img-fluid card-img"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4>
                                        <Link to={`/posts/${post._id}`} className="card-title">{post.title}</Link>
                                    </h4>
                                    <p className="card-text text-truncate">{post.description}</p>
                                    <p className="card-text"><small className="text-muted">Posted On: {post.date}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            )
        }
    }

    render () {
        if (!this.state.loading) {
            return (
                <div className="userShow-container">
                <section className="userShow-info">
                    <img src={this.state.user.picture} alt={this.state.user.username} className="user-detail-img"/>
                    <h1 className="userShow-username">{this.state.user.username}</h1>
                    <h5>{this.state.user.firstName} {this.state.user.lastName}</h5>
                    <div className="userShow-btns">
                        <button className="btn btn-primary">
                            Edit Profile
                        </button>
                        <button className="btn btn-primary">
                            <Link to="/posts/new">New Post</Link>
                        </button>
                    </div>
                </section>

                    <section>
                        {this.renderPosts()}
                    </section>
                </div>
            );
        } else {
            return <h1>Loading...</h1>
        }
    };
};

export default withRouter(UserShow);