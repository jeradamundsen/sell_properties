import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import Geosuggest, {Suggest} from 'react-geosuggest'
import {fetchProperty, editProperty} from '../../actions'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);

class PropertyGeosuggest extends PureComponent {

  onSuggestSelect=(place: Suggest)=>{
    console.log(place)
  }

  onSubmit=(formValues)=>{
   this.props.editProperty(this.props.match.params.id, formValues)
  }
  render() {
    if(!this.props.isSignedIn){
      return <div>You must be loged in to access this feature</div>
    }
    return (
<div>
  <Geosuggest
    placeholder="Type Listing Address"
    initialValue="Dallas"
    onSuggestSelect={this.onSuggestSelect}
    radius="20"
  />
  <MapWithAMarker
    containerElement={<div style={{ height: `100px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
</div>

    );
  }

}
const mapStateToProps=(state, ownProps)=>{
  return {
    properties: state.properties[ownProps.match.params.id],
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(mapStateToProps, {fetchProperty, editProperty})(PropertyGeosuggest)
