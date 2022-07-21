import React from 'react';
import { 
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
    
} from 'react-google-maps';

const Map =(props)=>{
    return(
        <GoogleMap 
        defaultZoom={18}
        defaultCenter={{ lat: -53.77019 ,lng: -67.71526}}>
        {props.isMarkerShown && <Marker position={{ lat: -53.77019 ,lng: -67.71526 }} />}

        </GoogleMap>  
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)