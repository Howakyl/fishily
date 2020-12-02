import React from 'react';
import UserModel from '../models/user';

class SignUp extends React.Component {
    state = {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        bio: '',
    };

    handleInputchange = (event) => {

        this.setState({ [event.target.name] : event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        UserModel.create(this.state)
        .then((res) => {
            this.props.history.push('/login');
        })
    }

    render () {
        return (
            <div>
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <h1>Sign Up!</h1>
                    <div className="form-group">
                        <label htmlFor="usernameInput">username</label>
                        <small className="form-text text-muted">required</small>
                        <input
                            onChange={this.handleInputchange}
                            type="text" 
                            className="form-control" 
                            id="usernameInput"
                            value={this.state.username}
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passInput">Password</label>
                        <small className="form-text text-muted">required - Don't use a sensitive password!</small>
                        <input
                            onChange={this.handleInputchange}
                            type="password" 
                            className="form-control" 
                            id="passInput"
                            value={this.state.password}
                            name="password"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstNameInput">first name</label>
                        <input
                            onChange={this.handleInputchange}
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
                            onChange={this.handleInputchange}
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
                            onChange={this.handleInputchange}
                            type="text" 
                            className="form-control" 
                            id="bioInput" 
                            value={this.state.bio}
                            name="bio"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
            </div>
        )
    }
}

export default SignUp;