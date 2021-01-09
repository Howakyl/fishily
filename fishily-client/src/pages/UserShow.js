import React from 'react';
import { Link , withRouter } from 'react-router-dom';
import UserModel from '../models/user';
import './UserShow.css';


class UserShow extends React.Component {

    state = {
        user: {},
        loading: true,
    };

    componentDidMount() {
        const userId = this.props.match.params.id
        
        UserModel.getOne(userId).then((res) => {
            
            this.setState({
                user: res.data.user,
                loading: false,
            });
        });
    };
    
    componentDidUpdate (prevProps) {
        const userId = this.props.match.params.id

        if (userId !== prevProps.match.params.id) {
            UserModel.getOne(userId).then((res) => {
                
                this.setState({
                    user: res.data.user,
                });
            });
        }
    }

    renderPosts () {
        if (this.state.user.posts.length > 0 ) {

            return (
                this.state.user.posts.map((post, index) => {
                    return (
                    <div className="card mb-3 userShow-post-card" style={{maxWidth: "540px"}} key={index}>
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
                }).reverse()
            )
        } else {
            return (
                <h3>This user has no posts.</h3>
            )
        }
    }

    renderBio () {
        if (this.state.user.bio.length > 0) {
            return (
                <p>{this.state.user.bio}</p>
            )
        } else {
            return (
                <p>This user has no bio.</p>
            )
        }
    }

    renderBtns() {
        if (this.props.user._id === this.state.user._id) {
            return (
                <>
                    <Link to={`/users/${this.state.user._id}/edit`} className="btn btn-primary">Edit Profile</Link>
                    <Link to="/posts/new" className="btn btn-primary">New Post</Link>
                </>
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
                    <h5 className="userShow-name">{this.state.user.firstName} {this.state.user.lastName}</h5>
                    <br/>
                    <div className="userShow-bio text-wrap text-break">
                        {this.renderBio()}
                    </div>
                    <hr/>
                    <div className="userShow-btns">
                        {this.renderBtns()}
                    </div>
                </section>

                    <section className="userShow-posts-container">
                        <h3 className="userShow-posts-title">{this.state.user.username}'s Catches</h3>
                        <hr/>
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