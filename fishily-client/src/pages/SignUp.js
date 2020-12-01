import React from 'react';
import UserModel from '../models/user';

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
                <h1>Sign Up!</h1>
            </div>
        )
    }
}

export default SignUp;