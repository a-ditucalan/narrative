/*
* Call To Action Section: https://prnt.sc/lws675
*/
import React, { Component } from 'react'
//
import classNames from 'classnames'

export default class CallToAction extends Component { 
  render() {
    const pretitle = this.props.pretitle
    const title = this.props.title
    const call = this.props.call
    const message = this.props.message

    return (
      <div className="cta-wrapper">
        <div className="cta">
          <div className="cta-pretitle t-body-sm">{pretitle}</div>
          <div className="cta-title t-h2">{title}</div>
          <button className={
            classNames("btn btn-lg btn-bow", {"d-none": !call})
          }>Schedule A Call</button>
          <button className={
            classNames("btn btn-lg btn-bow", {"d-none": !message})
          }>Send A Message</button>
        </div>
      </div>
    )
  }
}

CallToAction.defaultProps = {
  pretitle: "Get Started",
  title: "We’d love to show you the impact Narrative can have on your business.",
  call: true,
  message: true
}