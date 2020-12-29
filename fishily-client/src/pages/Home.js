import React from 'react';

const Home = (props) => {

    function welcomeMsg () {
        if (props.user.username) {
            return (
                <>
                    <p>Logged in as: {props.user.username}</p>
                </>
            )
        }
    }

    return (
        <div className=" home-container">
            <h1>Welcome to Fishily!</h1>
            {welcomeMsg()}
        </div>
    );
};

export default Home;