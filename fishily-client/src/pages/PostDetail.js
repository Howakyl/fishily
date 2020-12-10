import React from 'react'; 
import PostModel from '../models/post';
import { Redirect , Link, withRouter } from 'react-router-dom';
import './PostDetail.css';

class PostDetail extends React.Component {
    state = {
        // title : '',
        // description: '',
        // fish: '',
        // locationName: '',
        // lat: undefined,
        // lng: undefined,
        // image: '',
        post: {},
        // user: {},
        redirectToPosts: false,
        loading: true
    }

    componentDidMount() {
        // Special thanks to Milcah for figuring out why this wasn't working - you the real MVP!
        const postId = this.props.match.params.id;
        PostModel.getOne(postId)
            .then((data) => {
                this.setState({ 
                    post: data.data.post,
                    loading: false
                })
            })
    };

    deletePost = (id) => {
        PostModel.delete(id)
            .then((res) => {
                this.setState({redirectToPosts : true})
            })
    } 


    render () {
        console.log('post detail props:',this.state.post)
        if (this.state.redirectToPosts) {
            return <Redirect to="/posts"/>
        }

        if (!this.state.loading) {
            // console.log('location: ' ,this.state.post.location)
            // console.log('aaaa' , this.state.location)
            return (
                <div className="container">
                    <div className="post-detail-container">
                    <img src={this.state.post.image} alt="fish" className="post-detail-img img-fluid"/>
                        <section className="post-detail-info">

                            <div className="user-info">
                                <img className="post-detail-user-img img-fluid" src={this.props.user.picture} alt={this.props.user.username}/>
                                <p className="post-detail-username">{this.props.user.username}</p>
                            </div>
                            <h2>{this.state.post.title}</h2>
                            <h5><em>Fish Caught:</em> {this.state.post.fish}</h5>
                            <hr/>
                            <p className="post-detail-description">{this.state.post.description}</p>
                            <small>Caught at: {this.state.post.locationName}</small>
                            <div className="post-detail-buttons">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => this.deletePost(this.state.post._id)}
                                >Delete Post</button>
                                <button className="btn btn-primary post-detail-edit-btn">

                                <Link to={`/posts/${this.state.post._id}/edit`}>Edit Post</Link>
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            )
        } else {
            return <h1>Loading...</h1>
        }
    }
}

export default withRouter(PostDetail);