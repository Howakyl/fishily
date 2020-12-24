import React , { useState, useEffect } from 'react';
import UserModel from '../models/user';

const EditUser = (props) => {
    const [ isLoading, setLoading ] = useState(true);
    const [ username, setUsername ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    // const [ password, setPassword ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ picture, setPicture ] = useState('');
    const [ formInput, setFormInput ] = useState({});

    useEffect (() => {
        const userId = props.match.params.id;
        UserModel.getOne(userId)
            .then((data) => {
                const res = data.data.user;
                console.log(res);
                setUsername(res.username);
                setFirstName(res.firstName);
                setLastName(res.lastName);
                setBio(res.bio);
                setPicture(res.picture);
                setLoading(false);
            })
    } , [props.match.params.id]);

    const handleInputChange = (event) => {
        console.log('input changed : ' , event.target.name)
        setFormInput({ [event.target.name] : event.target.value });
        
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const userId = props.match.params.id;
        UserModel.update(userId, (username, firstName, lastName, bio, picture))
            .then((res) => {
                console.log('updated user: ', res);
                this.props.history.push(`/users/${userId}`);
            });
    };

    if (!isLoading) {
        return (
            <div>
                <form onSubmit={handleFormSubmit}>
                    <h1>Edit your profile!</h1>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username:</label>
                        <input
                            onChange={e => setUsername(e.target.value)}
                            type="text" 
                            className="form-control" 
                            id="usernameInput"
                            value={username}
                            name="username"
                        />
                    </div>
                </form>
            </div>
        )
    } else {
        return <h3>Loading...</h3>
    }
}

export default EditUser;