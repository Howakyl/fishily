import React from 'react';

const Home = (props) => {

    // function welcomeMsg () {
    //     if (props.user.username) {
    //         return (
    //             <>
    //                 <p>Logged in as: {props.user.username}</p>
    //             </>
    //         )
    //     }
    // }

    return (
        <div>
            <div className="home-container">
                <h1>Welcome to Fishily!</h1>
                <a className="btn btn-primary heroBtn" href="#hero-section">What is Fishily?</a>
                {/* {welcomeMsg()} */}
            </div>
            <section id="hero-section" className="hero">
                <h2>Connecting fishermen around the <span className="hero-emphasis">world</span>.</h2>
                <div className="hero-card">
                    <h3>Find your new <span className="hero-emphasis">Favorite</span> fishing hole!</h3>
                    <img src="/hero-images/map.png" className="img-fluid hero-img" alt="map"/>
                </div>
                <div className="hero-card">
                    <img className="img-fluid hero-img" src="/hero-images/post-card.png" alt="post"/>
                    <h3>Show off those <span className="hero-emphasis">Big</span> catches.</h3>
                </div>
                <div className="hero-card">
                    <h3>Personalize your profile!</h3>
                    <img src="/hero-images/profile2.png" alt="profile page" className="img-fluid profile-img"/>
                </div>
            </section>
        </div>
    );
};

// 47.661262 -122.434

export default Home;