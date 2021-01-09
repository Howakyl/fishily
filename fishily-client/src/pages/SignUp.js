import React from 'react';
import UserModel from '../models/user';
import { Redirect } from 'react-router-dom';

class SignUp extends React.Component {
    state = {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        bio: '',
        redirectToPosts: false,
    };

    handleInputChange = (event) => {

        this.setState({ [event.target.name] : event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        UserModel.create(this.state)
        .then((res) => {
            this.setState({ redirectToPosts : true })
        })
    }
    

    render () {

        if(this.state.redirectToPosts) {
            return <Redirect to='/login'/>
        }

        if(this.props.user.username) {
            return <Redirect to='/'/>
        } else {
            return (
                <div className="signupContainer">
                    <form className="container" onSubmit={this.handleFormSubmit}>
                        <h1>Sign Up!</h1>
                        <div className="form-group">
                            <label htmlFor="usernameInput">username</label>
                            <small className="form-text text-muted">required</small>
                            <input
                                onChange={this.handleInputChange}
                                type="text" 
                                className="form-control" 
                                id="usernameInput"
                                value={this.state.username}
                                name="username"
                                pattern=".{4,}"
                                title="Must be at least 4 characters long."
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passInput">Password</label>
                            <small className="form-text text-muted">required</small>
                            <input
                                onChange={this.handleInputChange}
                                type="password" 
                                className="form-control" 
                                id="passInput"
                                value={this.state.password}
                                name="password"
                                pattern=".{4,}"
                                title="Must be at least 4 characters long."
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstNameInput">first name</label>
                            <input
                                onChange={this.handleInputChange}
                                type="text" 
                                className="form-control" 
                                id="firstNameInput"
                                value={this.state.firstName}
                                name="firstName" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastNameInput">last name</label>
                            <input
                                onChange={this.handleInputChange}
                                type="text" 
                                className="form-control" 
                                id="lastNameInput" 
                                value={this.state.lastName}
                                name="lastName"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bioInput">Create a bio:</label>
                            <textarea
                                onChange={this.handleInputChange}
                                type="text" 
                                className="form-control" 
                                id="bioInput" 
                                value={this.state.bio}
                                name="bio"
                                pattern=".{,200}"
                                title="Must be fewer than 200 characters long."
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </form>
                </div>
            )
        } 
    }
}

export default SignUp;