import React , { useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';


const FishMap = (props) => {
    const [ viewport , setViewport ] = useState({
        latitude: 47.6062,
        longitude: -122.3321,
        zoom: 10,
        width: '100vw',
        height: '50vh'
    });
    
    const [ selectedPost, setSelectedPost ] = useState(null);

    useEffect(() => {
        const listener = (e) => {
            if (e.key === 'Escape') {
                setSelectedPost(null);
            };
        };
        window.addEventListener("keydown" , listener);

        //removes event listener on unmount
        return () => {
            window.removeEventListener("keydown" , listener);
        }
    },[])

    return (
        <div id="mapContainer">
            <ReactMapGl 
            {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/howakyl/ckjf4skamegso19lhg8mm027h"
            onViewportChange={(viewport) => {
                setViewport(viewport);
            }}
            >
            {props.posts.map((post, index) => (
                <Marker key={index} latitude={post.lat} longitude={post.lng}>
                    <button className="markerBtn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedPost(post);
                    }}>
                        <img src="/fish-marker.png" alt="fish marker"/>
                    </button>
                </Marker>
            ))}

            {selectedPost ? (
                <Popup 
                    latitude={selectedPost.lat} 
                    longitude={selectedPost.lng}
                    onClose={() => {
                        setSelectedPost(null);
                    }}
                    >
                    <div className="markerPopup">
                        <h5>{selectedPost.title}</h5>
                        {/* <p className="text-truncate">{selectedPost.description}</p> */}
                        {/* <img src={selectedPost.image} alt=""/> */}
                        {/* <Link className="btn btn-primary" to={`/posts/${selectedPost._id}`} onClick={console.log('clicked!')}>button!</Link> */}
                    </div>
                </Popup>
            ) : null}
            </ReactMapGl>
        </div>
    )
}

export default FishMap;