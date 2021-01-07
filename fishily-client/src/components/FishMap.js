import React , { useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import { Link } from 'react-router-dom';


const FishMap = (props) => {
    const [ viewport , setViewport ] = useState({
        latitude: 47.6062,
        longitude: -122.3321,
        zoom: 10,
        width: '100vw',
        height: '60vh'
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
    
    function displayCatchLocation () {
        if (selectedPost.locationName) {
            return <small className="mr-3">Caught At: {selectedPost.locationName}</small>
        } else {
            return null;
        }
    }

    const goToMarker = (clickedMarker) => {
        setViewport({
            ...viewport,
            longitude: clickedMarker.lng,
            latitude: clickedMarker.lat,
            zoom: 10,
            tranistionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
        })
    }

    return (
        <div id="mapContainer">
            <ReactMapGl 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/howakyl/ckjf4skamegso19lhg8mm027h"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
                onMouseMove={(e) => {
                    document.getElementById('info').innerHTML = JSON.stringify(e.lngLat);
                }}
            >
                {props.posts.map((post, index) => (
                    <Marker key={index} latitude={post.lat} longitude={post.lng}>
                        <button className="markerBtn" onClick={(e) => {
                            e.preventDefault();
                            setSelectedPost(post);
                            goToMarker(post);
                            
                        }}>
                            <img src="/fish-marker.png" alt="fish marker"/>
                        </button>
                    </Marker>
            ))}

            <pre id="info"></pre>
                {selectedPost ? (
                    

                    <Popup 
                        latitude={selectedPost.lat} 
                        longitude={selectedPost.lng}
                        id="btn-popup"
                        onClose={() => {
                                setSelectedPost(null);
                        }}
                        closeOnClick={false}
                        offsetLeft={30}
                    >
                        <div className="markerPopup">
                            <img src={selectedPost.image} className="popupPost-img" alt={selectedPost.fish}/>
                            
                            <section className="markerPopup-info">
                                <h5><strong>{selectedPost.title}</strong></h5>
                                <p className="popupPost-user"><em>Posted By: {selectedPost.user.username}</em></p>
                                {displayCatchLocation()}
                                <Link className="btn btn-primary popupBtn" to={`/posts/${selectedPost._id}`}>Read More</Link>
                            </section>
                        </div>
                    </Popup>
                    
                ) : null}
            </ReactMapGl>
        </div>
    )
}

export default FishMap;