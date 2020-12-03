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
            console.log('data: ', res);

            this.setState({
                posts: res.data.posts,
                loading: false,
            });
        });
    };

    render () {
        return (
            <div>
                <PostCard />
            </div>
        )
    }
}

export default PostList;