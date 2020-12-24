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
    }, []);

    const handleInputChange = (event) => {
        setFormInput({ [event.target.name] : event.target.value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const userId = props.match.params.id;
        UserModel.update(userId, formInput)
            .then((res) => {
                console.log('updated user: ', res);
                this.props.history.push(`/users/${userId}`);
            });
    };

    return (
        <>
        </>
    )
}

export default EditUser;