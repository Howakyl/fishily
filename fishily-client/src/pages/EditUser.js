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

    useEffect (() => {
        const userId = props.match.params.id;
        UserModel.getOne(userId)
            .then((data) => {
                const res = data.data.user;
                setUsername(res.username);
                setFirstName(res.firstName);
                setLastName(res.lastName);
                setBio(res.bio);
                setPicture(res.picture);
                setLoading(false);
            })
    } , [props.match.params.id]);


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const userId = props.match.params.id;
        
        const formData = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            picture: picture
        }

        UserModel.update(userId, formData)
            .then((res) => {
                localStorage.setItem("user" , JSON.stringify(res.data.user));
                props.history.push(`/users/${userId}`);
            });
    };

    if (!isLoading) {
        return (
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <h1 className="mt-5">Edit your profile!</h1>
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
                    <div className="form-group">
                        <label htmlFor="firstNameInput">First name:</label>
                        <input
                            onChange={e => setFirstName(e.target.value)}
                            type="text" 
                            className="form-control" 
                            id="firstNameInput"
                            value={firstName}
                            name="firstName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastNameInput">Last name:</label>
                        <input
                            onChange={e => setLastName(e.target.value)}
                            type="text" 
                            className="form-control" 
                            id="lastNameInput"
                            value={lastName}
                            name="lastName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bioInput">Bio:</label>
                        <textarea
                            onChange={e => setBio(e.target.value)}
                            type="text" 
                            className="form-control" 
                            id="bioInput"
                            value={bio}
                            name="bio"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="pictureInput">picture:</label>
                        <input
                            onChange={e => setPicture(e.target.value)}
                            type="text" 
                            className="form-control" 
                            id="pictureInput"
                            value={picture}
                            name="picture"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">Save Changes</button>
                </form>
            </div>
        )
    } else {
        return <h3>Loading...</h3>
    }
}

export default EditUser;