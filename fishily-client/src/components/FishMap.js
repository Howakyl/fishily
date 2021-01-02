import React , { useState } from 'react';
import ReactMapGl from 'react-map-gl';

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
            >
                markers
            </ReactMapGl>
        </div>
    )
}

export default FishMap;