import React from 'react'
import Map from './Map'
import Credentials from '../config/Credentials'

const mapURL= `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;
const Location =()=>{
    return(
        <div>
            <Map 
            googleMapURL= {mapURL}
            containerElement= {<div style={{height: '280px'}}/>}
            mapElement= {<div style={{height:'100%'}} />}
            loadingElement= {<p>Cargando</p>}
            MyMapComponent isMarkerShown 
            />
        </div>
    )
}

export default Location
