import React from 'react'; 

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
        image: ''
    }

    render () {
        console.log('post detail props:',this.props)
            return (
                <div>
                    hi
                </div>
            )
    }
}

export default PostDetail;