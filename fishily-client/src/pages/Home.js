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
                <a className="btn btn-primary heroBtn" href="#hero-section">What is Fishily?</a>
                {/* {welcomeMsg()} */}
            </div>
            <section id="hero-section" className="hero">
                <h2>Connecting fishermen around the <span>world</span>.</h2>
                <p>Show off those big catches.</p>
            </section>
        </div>
    );
};

// 47.6 -122.4

export default Home;