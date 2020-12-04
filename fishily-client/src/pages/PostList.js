import React from 'react';
import PostCard from '../components/PostCard';
import PostModel from '../models/post';

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
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}

export default PostList;