/*
* Perspective Section: https://prnt.sc/lws5kj
*/
import React, { Component } from 'react'
import { Link } from 'react-static'
//
import RightCaret from '../assets/jsx/right-caret'

export default class Card extends Component {
  render() {
    const card = this.props.cardItem
    let tagCount = card.tags.length

    return (
      <Link to="/post" className="card">
        <div className="card-img bg"
          style={{
            backgroundImage: `url(${card.img})`
          }}>                    
        </div>
        <div className="card-info">
          <div className="t-header-sm">{card.title}</div>
          <div className="card-tags">
            <div className="t-tags">
              {
                card.tags.map((tag, i) => (
                  <span key={i}>
                    {tag} {i < tagCount - 1 && ", "}
                  </span>
                ))
              }
            </div>
            <div>
              <RightCaret />
            </div>
          </div>
        </div>
      </Link>
    )
  }
}