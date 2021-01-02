import React , { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';


const FishMap = (props) => {
    const [ viewport , setViewport ] = useState({
        latitude: 47.6062,
        longitude: -122.3321,
        zoom: 10,
        width: '50vw',
        height: '50vh'
    });
    
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
                    <div>
                        FISH
                    </div>
                </Marker>
            ))}
            </ReactMapGl>
        </div>
    )
}

export default FishMap;