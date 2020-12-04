import React from 'react'; 
import PostModel from '../models/post';
import PostCard from '../components/PostCard';

class PostDetail extends React.Component {
    state = {
        // title : '',
        // description: '',
        // fish: '',
        // location: {
        //     name: '',
        //     lat: null,
        //     lng: null,
        // },
        // image: ''
        post: {}
    }

    //REFERENCE PROPS FOR USER INFO!

    componentDidMount() {
        const postId = this.props.match.params.id;
        // console.log(postId)
        // console.log(this.props)

        PostModel.getOne(postId)
            .then((data) => {
                // console.log('DETAIL RES: ', res);

                this.setState({ 
                    post : data.post
                })
                console.log('after :' , this.state)
            })
    }

    render () {
        console.log('post detail props:',this.props)
            return (
                <div>
                    <PostCard post={this.state.post}/>
                </div>
            )
    }
}

export default PostDetail;