import React from 'react';

const Home = (props) => {
    console.log(props)
    return (
        <div className=" home-container">
            <h1>Welcome to Fishily!</h1>
            <p>Logged in as: {props.user.username}</p>
        </div>
    );
};

export default Home;