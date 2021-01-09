import React from 'react';
import PostModel from '../models/post';
import './EditPost.css';

class EditPost extends React.Component {
    state = {
        title : '',
        description: '',
        fish: '',
        locationName: '',
        lat: undefined,
        lng: undefined,
        image: '',
        post: {},
        loading: true
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        PostModel.getOne(postId)
            .then((data) => {
                const res = data.data.post;
                this.setState({ 
                    
                    title : res.title,
                    description: res.description,
                    fish: res.fish,
                    locationName: res.locationName,
                    lat: res.lat,
                    lng: res.lng,
                    image: res.image,
                    loading: false,
                })
            })
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        const postId = this.props.match.params.id;
        PostModel.update(postId, this.state)
            .then((res) => {
                this.props.history.push(`/posts/${postId}`);
            });
    };
    
    render() {

        if (this.state.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <form className="container editPost-form" onSubmit={this.handleFormSubmit}>
                        <h1>Edit your post!</h1>
                    <div className="form-group">
                        <label htmlFor="titleInput">Title</label>
                        <small className="form-text text-muted">required</small>
                        <input
                            onChange={this.handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="titleInput"
                            value={this.state.title}
                            name="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descInput">Description</label>
                        <small className="form-text text-muted">include a short description about your catch!</small>
                        <input
                            onChange={this.handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="descInput"
                            value={this.state.description}
                            name="description"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fishInput">Fish Caught:</label>
                        <input
                            onChange={this.handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="fishInput"
                            value={this.state.fish}
                            name="fish" 
                        />
                    </div>

                    <section className="row">
                        <div className="form-group col editPost-location">
                            <label htmlFor="locationInput">Where Was Your Catch?</label>
                            <input
                                onChange={this.handleInputChange}
                                type="text" 
                                className="form-control" 
                                id="locationInput" 
                                value={this.state.locationName}
                                name="locationName"
                            />
                        </div>
                        <div className="form-group col">
                            <label htmlFor="latInput">Latitude</label>
                            <input
                                onChange={this.handleInputChange}
                                type="number" 
                                className="form-control" 
                                id="latInput" 
                                value={this.state.lat}
                                name="lat"
                                step=".01"
                            />
                        </div>
                        <div className="form-group col">
                            <label htmlFor="lngInput">Longitude</label>
                            <input
                                onChange={this.handleInputChange}
                                type="number" 
                                className="form-control" 
                                id="lngInput" 
                                value={this.state.lng}
                                name="lng"
                                step=".01"
                            />
                        </div>
                    </section>

                    <div className="form-group">
                        <label htmlFor="imageInput">Submit a picture!</label>
                        <input
                            onChange={this.handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="imageInput" 
                            value={this.state.image}
                            name="image"
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Edit Post</button>
                </form>
            </div>
        );
    }
}

export default EditPost;