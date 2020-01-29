/*
* Office Location Section: https://prnt.sc/lwsne6
*/
import React, { Component } from 'react'
//
import Map from '../reusables/map'
export default class OfficeLocation extends Component { 
  render() {
    return (
      <div className="location-wrapper">
        <div className="location-bg bg"></div>
        <div className="location col-block">
          <div className="location-title col-title t-header-lg">
            <div className="d-inline-block">Office Location</div>
          </div>
          <div className="location-info col-info">
            <div className="location-detail location-detail-description t-header-sm">
            Narrative is located in downtown Manhattan in the heart of the Financial District.
            </div>
            <div className="location-detail location-detail-address t-header-sm">
              <div>25 Broadway</div>
              <div>New York, NY 10004</div>
            </div>

            <div className="location-map bg">
              <Map />
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}