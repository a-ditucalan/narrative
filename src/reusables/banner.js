/*
* Banner Section: https://prnt.sc/lwsqxd
*/
import React, { Component } from 'react'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

export default class Banner extends Component { 
  render() {
    const pretitle = this.props.pretitle
    const title = this.props.title
    const cta = this.props.cta
    const bgImg = this.props.bgImg
   
    return (
      <div className="banner-wrapper bg"
        style={{backgroundImage: `url(${bgImg})`}}>

        <div className="banner">
          <div className="banner-text">
            <div className="banner-pretitle t-header-sm">
              {pretitle}
            </div>

            {title.map((line, i) => (
              <div className="banner-title t-header-lg" key={i}>
                {line}
              </div>
            ))}
            
          </div>
          <div className="banner-cta">
            {
              cta.type.toLowerCase() === 'button' ? 
             <a href={cta.url}>  <button className="btn btn-lg btn-wob">{cta.text}</button></a>
                : null
            }            

            {
              cta.type.toLowerCase() === 'contact' ? 
              <div className="social-media-wrapper">
              <div className="social-t t-h4 t-sentence-case">
                Follow us
              </div>
              <div className="social-media">
                <div className="share-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="share-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="share-icon">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                  <div className="share-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
              </div>
            </div>
        
                : null
            }      
          </div>
        </div>
      </div>
    )
  }
}


