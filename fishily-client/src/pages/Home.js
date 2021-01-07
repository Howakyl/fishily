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
        <div>
            <div className="home-container">
                <h1>Welcome to Fishily!</h1>
                <a className="btn btn-primary heroBtn" href="#hero">What is Fishily?</a>
                {/* {welcomeMsg()} */}
            </div>
            <section id="hero">
                <h3>Connecting fishermen around the world.</h3>
            </section>
        </div>
    );
};

export default Home;