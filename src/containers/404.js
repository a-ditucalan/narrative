import React, { Component } from 'react'
//

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="oops">
        <div className="oops-title">
          <span className="oops-number">404</span>
          <span className="oops-text t-h1">Page not found.</span>
        </div>
        <div className="oops-content">
          <div className="oops-info">
            <div className="t-h2">Well, this is embarrassing.</div>
            <div className="t-body-lg">You’d think a company called Narrative could keep the website’s story consistent and continuous. We’re gonna take this time to do some seriously deep reflection into how we do things around here.
In the meantime…</div>
            <div className="oops-buttons">
              <button className="btn btn-sm btn-wob">Head back home</button>
              <button className="btn btn-sm btn-wob">Read our blog</button>
              <button className="btn btn-sm btn-wob">Get in touch</button>
            </div>
          </div>
          <div className="oops-gif">
            <img src={require('../assets/images/404.gif')} alt="embarassed homer meme" />
          </div>
        </div>
      </div>
    )
  }
}