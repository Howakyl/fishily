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
                console.log(res.data);
                this.props.setUser(res.data);
            });
    };

    render () {
        console.log('PROPS: ',this.props)
        if(this.props.user.username) {
            return <Redirect to='/'/>
        } else {
            return (
                <div>
                    <form className="container" onSubmit={this.handleFormSubmit}>
                        <h1>Log In!</h1>
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
                            <input
                                onChange={this.handleInputchange}
                                type="password" 
                                className="form-control" 
                                id="passInput"
                                value={this.state.password}
                                name="password"
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