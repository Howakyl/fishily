import React from 'react';
// import UserModel from '../models/user';

class SignUp extends React.Component {
    state = {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        bio: '',
        picture: ''
    };

    handleInputchamge = (event) => {
        console.log('input changed', event.target.name);

        this.setState({ [event.target.name] : event.target.value });
    };

    render () {
        return (
            <div>
                <form className="container">
                    <h1>Sign Up!</h1>
                    <div className="form-group">
                        <label htmlFor="usernameInput">username</label>
                        <small className="form-text text-muted">required</small>
                        <input
                            onChange={this.handleInputchamge}
                            type="text" 
                            className="form-control" 
                            id="usernameInput"
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passInput">Password</label>
                        <small className="form-text text-muted">required</small>
                        <input type="password" className="form-control" id="passInput"/>
                        <small id="emailHelp" className="form-text text-muted">don't use a sensitive password!</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstNameInput">first name</label>
                        <input type="text" className="form-control" id="firstNameInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastNameInput">last name</label>
                        <input type="text" className="form-control" id="lastNameInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bioInput">Create a bio:</label>
                        <textarea type="text" className="form-control" id="bioInput" />
                    </div>

                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;