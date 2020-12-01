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

    render () {
        return (
            <div>
                <form className="container">
                    <h1>Sign Up!</h1>
                    <div className="form-group">
                        <label htmlFor="usernameInput">username</label>
                        <small className="form-text text-muted">required</small>
                        <input type="text" className="form-control" id="usernameInput" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passInput">Password</label>
                        <small className="form-text text-muted">required</small>
                        <input type="password" className="form-control" id="passInput"/>
                        <small id="emailHelp" className="form-text text-muted">don't use a sensitive password!</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstNameInput">first name</label>
                        <input type="text" className="form-control" id="firstNameInput" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastNameInput">last name</label>
                        <input type="text" className="form-control" id="lastNameInput" aria-describedby="emailHelp"/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;