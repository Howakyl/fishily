import React from 'react';
import PostModel from '../models/post';
import { Redirect } from 'react-router-dom';

class NewPost extends React.Component {
    state = {
        title : '',
        description: '',
        fish: '',
        location: {
            name: 'Unknown Location',
            lat: null,
            lng: null,
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fish_icon.svg/1200px-Fish_icon.svg.png',
        redirectToPosts: false
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    };


    handleFormSubmit = (event) => {
        event.preventDefault();

        PostModel.create(this.state, this.props.user._id)
            .then((res) => {
                this.setState({ redirectToPosts : true})
            })
    }

    render () {
        // console.log(this.state)
        // console.log('NEW POST PROPS: ',this.props);

        if (this.state.redirectToPosts) {
            return <Redirect to="/posts"/>
        } 
        return (
            <div>
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <h1>submit a new post!</h1>
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
                        <div className="form-group col">
                            <label htmlFor="locationInput">Where Was Your Catch?</label>
                            <input
                                onChange={this.handleInputChange}
                                type="text" 
                                className="form-control" 
                                id="locationInput" 
                                value={this.state.location.name}
                                name="location"
                            />
                        </div>
                        <div className="form-group col">
                            <label htmlFor="latInput">Latitude</label>
                            <input
                                onChange={this.handleInputChange}
                                type="number" 
                                className="form-control" 
                                id="latInput" 
                                value={this.state.location.lat}
                                name="location.lat"
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
                                value={this.state.location.lng}
                                name="location.lng"
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
                    
                    {/* <input type="hidden" name="user" value={this.props.user._id}/> */}
                    <button type="submit" className="btn btn-primary">Submit Post</button>
                </form>
            </div>
        );
    };
};

export default NewPost;