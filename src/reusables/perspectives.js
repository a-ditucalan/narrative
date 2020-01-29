/*
* Perspective Section: https://prnt.sc/lws5kj
*/
import React, { Component } from 'react'
//
import Card from '../reusables/card'
export default class Perspectives extends Component { 
  render() {
    const cards = this.props.cards
    const title = this.props.title
    const subtitle = this.props.subtitle
    
    return (
      <div className="perspectives-wrapper">
        <div className="perspectives">
          <div className="perspectives-header">
            <div className="branding">
              <img src={require('../assets/images/narrative-icon.svg')} alt="Narrative Icon" />
              <span className="t-h2">
                {title}
              </span>
            </div>
            <div className="subtitle">
              <span className="t-header-sm">{subtitle}</span>
            </div>
          </div>
          <div className="content-cards">
            {
              cards.map((card, i) => (
                <Card cardItem={card} key={i}/>
              ))
            }          
          </div>
        </div>
      </div>      
    )
  }
}

Perspectives.defaultProps = {
  title: 'Perspectives',
  subtitle: 'Inside the technology and business of data.'
}