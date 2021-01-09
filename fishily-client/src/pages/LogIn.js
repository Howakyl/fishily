import React from 'react';
import UserModel from '../models/user';
import { Redirect } from 'react-router-dom';

class LogIn extends React.Component {
    state = {
        username: '',
        password: '',
    };

    handleInputchange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        UserModel.login(this.state)
            .then((res) => {
                this.props.setUser(res.data);
                localStorage.setItem("user" , JSON.stringify(res.data));
            });
    };

    render () {
        if(this.props.user.username) {
            return <Redirect to='/posts'/>
        } else {
            return (
                <div>
                    <form className="container" onSubmit={this.handleFormSubmit}>
                        <h1 className="logInTitle">Log In!</h1>
                        <div className="form-group">
                            <label htmlFor="usernameInput">username</label>
                            <input
                                onChange={this.handleInputchange}
                                type="text" 
                                className="form-control" 
                                id="usernameInput"
                                value={this.state.username}
                                name="username"
                                pattern=".{4,}"
                                title="Must be at least 4 characters long."
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="passInput">Password</label>
                            <input
                                onChange={this.handleInputchange}
                                type="password" 
                                className="form-control" 
                                id="passInput"
                                value={this.state.password}
                                name="password"
                                pattern=".{4,}"
                                title="Must be at least 4 characters long."
                            />
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </form>
                </div>
            );
        }
    }
};

export default LogIn;