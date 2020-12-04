import React from 'react';
import PostModel from '../models/post';
import { Redirect } from 'react-router-dom';

class EditPost extends React.Component {
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
        post: {},
        redirectToPosts: false
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        PostModel.getOne(postId)
            .then((data) => {
                this.setState({ 
                    post: data.data.post,
                })
            })
    };
    
    render() {
        console.log(this.state)
        return (
    
        <div>
            <h1>HELLLOOOO</h1>
        </div>
        )
    }
}

export default EditPost;