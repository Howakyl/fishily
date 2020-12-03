import React from 'react';

class NewPost extends React.Component {
    state = {
        title : '',
        description: '',
        fish: '',
        location: {
            name: '',
            lat: '',
            lng: '',
        },
        image: ''
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    };

    handleFormSubmit = (event) => {

    }

    render () {
        console.log(this.state)
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
                            <label htmlFor="locationInput">Where Did You Catch Your Fish?</label>
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
                    

                    <button type="submit" className="btn btn-primary">Submit Post</button>
                </form>
            </div>
        );
    };
};

export default NewPost;