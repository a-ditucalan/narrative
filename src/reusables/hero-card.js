import React, { Component } from 'react'
import { Link } from 'react-static'

export default class HeroCard extends Component {
  render() {
    const data = this.props.data

    return (
      <Link to="/post" className="hero-card">
        <div className="hero-card-img bg"
          style={{backgroundImage: `url('${data.img}')`}}> 
        </div>
        <div className="hero-card-info">
          <div className="details">
            <div className="details-tag-wrapper t-tags">
              <div className="details-tag">{data.tag}</div>
              <div className="details-date">{data.date}</div>
            </div>
            <div className="details-title t-header-md">{data.title}</div>
            <div className="details-excerpt">{data.subtitle}</div>
          </div>
          <div className="byline">
            <div className="byline-author">{'By ' + data.author}</div>
            <div className="byline-position">{data.position}</div>
            <div className="byline-more">
              Read More
            </div>
          </div>
        </div>
      </Link>
    )
  }
}