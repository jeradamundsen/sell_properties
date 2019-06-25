import React, { Component, createRef } from 'react';
import { GOOGLE_MAPS_API_KEY as apiKey } from './keys'

class GoogleMap extends Component{

googleMapRef= React.createRef()

  componentDidMount(){
    const googleMapScript=document.createElement('script')
    googleScript.src=
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    window.document.body.appendChild(googleScript)

    googleScript.addEventListener('load', {
      this.googleMap=this.createGoogleMap()
      this.marker = this.createMarker()
    })
  }



  createGoogleMap =()=>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 32.776665,
        lng: -96.796989
      },
      disableDefaultUI: true,
    })



    createMarker = () =>{
    new window.google.maps.Marker({
      position: { lat: 32.8049190, lng: -96.7952589 },
      map: this.googleMap,
    })
  }


  render(){
    return(
      <div id='google-map'
        ref={this.googleMapRef}
        style={{width: '400px', height: '300px'}}
      />

    )
  }
}
export default GoogleMap
