import React from 'react';

const Home = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Welcome to Fishily!</h1>
            <p>User: {props.user.username}</p>
        </div>
    );
};

export default Home;