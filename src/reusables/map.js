import React, { Component } from 'react'
//
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <Map
        item
        xs = { 12 }
        // style = { style }
        // styles = { mapStyles }
        google = { this.props.google }
        zoom = { 16 }
        initialCenter = {{ lat: 40.7056466, lng: -74.0142621 }}
      >
        <Marker
          title = { 'Narrative Headquarters' }
          position = {{ lat: 40.7056466, lng: -74.0142621 }}
          name = { 'Narrative Headquarters' }
        />
      </Map>
    )
    
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo') //DEV
})(MapContainer)