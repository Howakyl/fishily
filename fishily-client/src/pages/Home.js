import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const Home = (props) => {


    const getStartedBtn = () => {
        if (props.user.username) {
            return (
                <>
                    <Link to="/posts/new" className="btn btn-primary heroBtn">Post Your Catch!</Link>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/signup" className="btn btn-primary heroBtn">Get Started</Link>
                </>
            )
        }
    }

    return (
        <div>
            <div className="home-container">
                <h1>Welcome to <span className="home-title">Fishily</span>!</h1>
                <a className="btn btn-primary heroBtn" href="#hero-section">What is Fishily?</a>
            </div>

            <section id="hero-section" className="hero">
                <Zoom>
                    <h2>Connecting fishermen around the <span className="hero-emphasis">World</span>.</h2>
                </Zoom>
                
                <div className="hero-card-container">
                <Slide left>
                    <div className="hero-card">
                        <h3 className="right-on-large">Find your new <span className="hero-emphasis">Favorite</span> fishing hole!</h3>
                        <img src="/hero-images/map.png" className="img-fluid hero-img" alt="map"/>
                    </div>
                </Slide>
                <Slide right>
                    <div className="hero-card flip-on-small">
                        <img className="img-fluid hero-img" src="/hero-images/post-card.png" alt="post"/>
                        <h3>Show off those <span className="hero-emphasis">Big</span> catches.</h3>
                    </div>
                </Slide>
                <Slide left>
                    <div className="hero-card">
                        <h3 className=" right-on-large"><span className="hero-emphasis">Personalize</span> your profile!</h3>
                        <img src="/hero-images/profile2.png" alt="profile page" className="img-fluid hero-img"/>
                    </div>
                </Slide>
                </div>

            </section>
                    <div className="getStarted">
                        {getStartedBtn()}
                    </div>
        </div>
    );
};


export default Home;