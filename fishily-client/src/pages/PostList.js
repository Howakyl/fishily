import React from 'react';
import PostCard from '../components/PostCard';
import PostModel from '../models/post';
import './PostList.css';

class PostList extends React.Component {

    state = {
        posts: [],
        loading: true,
    }

    componentDidMount() {

        PostModel.all().then((res) => {
            
            this.setState({
                posts: res.data.posts,
                loading: false,
            });
        });
    };

    renderPosts () {
        return this.state.posts.map((post) => {
            return (
                <PostCard 
                    post={post}
                    key={post._id}
                />
            )
        })
    };


    render () {
        return (
            <div className="postList-container container">
                {this.renderPosts()}
            </div>
        )
    }
}

export default PostList;