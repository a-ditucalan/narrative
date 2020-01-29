import React, { Component } from 'react'
import { Link } from 'react-static'
//

export default class JobCallout extends Component { 
  render() {
    const position = this.props.position
    const location = this.props.location
    const url = this.props.url

    return (
      <Link to={url} className="job callout">
        <div className="job-position t-body-sm">
          {position}
        </div>
        <div className="job-location t-body-xs">
          {location}
        </div>
        <div className="job-url t-action">
          Apply
        </div>
      </Link>
    )
  }
}