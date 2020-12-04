import React from 'react'; 
import PostModel from '../models/post';
import './PostDetail.css';

class PostDetail extends React.Component {
    state = {
        title : '',
        description: '',
        fish: '',
        location: {
            name: '',
            lat: null,
            lng: null,
        },
        image: '',
        post: {}
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
    }

    render () {
        console.log('post detail props:',this.state.post)
            return (
                <div className="container">
                    <div className="post-detail-container">
                    <img src={this.state.post.image} alt="fish" className="post-detail-img img-fluid"/>
                        <section className="post-detail-info">
                            <h3>{this.state.post.title}</h3>
                            <p>{this.state.post.description}</p>
                        </section>
                    </div>
                </div>
            )
    }
}

export default PostDetail;