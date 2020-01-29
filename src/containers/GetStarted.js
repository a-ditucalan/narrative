import React, { Component } from 'react'
import { Link } from 'react-static'
//
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
//
import InputValidator from '../reusables/validator'
import Banner from '../reusables/banner'

const bannerData = {
  pretitle: 'Get started',
  title: [
    "Narrative’s goal is to simplify",
    "how you acquire, distribute and",
    "use data. How can we help you?"
  ],
  cta: {
    type: 'none'
  },
  bgImg: require('../assets/images/banner-get-started.jpg')
}

class GetStartedHeading extends Component {
  render() {
    return (
      <div className="row">
        <div className="col col-main">
          <h2 className="t-header-md">Please fill out the form below or...</h2><button className="btn btn-lg btn-wob btn-sched">SCHEDULE A CALL</button>
        </div>
      </div>
    )
  }
}

class GetStartedForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      fields: {
        fname: "",
        lname: "",
        email: "", 
        company: "",
        solution: "",        
        platform: ""
      },
      errors: {}      
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsValid = true

    let checkIfNotEmptyArr = [
      'fname',
      'lname',
      'email',
      'company',
      'solution',
      'platform'
    ]

    checkIfNotEmptyArr.forEach((item) => {
      if (!InputValidator.checkIfNotEmpty(fields[item])) {
        formIsValid = false
        errors[item] = "This is a required field"
      }
    })

    let checkIfLettersOnlyArr = [
      'fname',
      'lname'
    ]

    checkIfLettersOnlyArr.forEach((item) => {
      if (!InputValidator.checkIfLettersOnly(fields[item])) {
        formIsValid = false
        if (!errors[item]) errors[item] = "Please input letters only"
      }
    })

    if (!InputValidator.checkIfEmailFormat(fields["email"])) {
      formIsValid = false
      if (!errors["email"]) errors["email"] = "Please enter a valid email address"
    }

    this.setState({ errors: errors })
    return formIsValid
  }

  handleChange(e) {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({ fields })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    
    if (this.handleValidation()) {
      this.setState({ sent: true })
    } else {
      alert("Form has errors")
    }
  }

  render() {
    // console.log(this.state)
    return (
      <form className="form-default" onSubmit={this.handleFormSubmit} noValidate={true}>
        <div className="row">
          <div className="col col-sub">
            <h4 className="t-h4">Tell us a bit about yourself.</h4>
          </div>
          <div className="col col-main">
            <div className="form-row">
              <div className="col form-group">
                <label htmlFor="fname" className="t-sub1 form-label">First Name <span className="form-required">*</span></label>
                <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.fname
                })}>
                  <input className="form-input input input-lg"
                    type="text" 
                    name="fname"
                    onChange={this.handleChange} />
                  <span className="input-error-message">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.fname}</span>
                  </span>
                </div>
              </div>

              <div className="col form-group">
                <label htmlFor="lname" className="t-sub1 form-label">Last Name <span className="form-required">*</span></label>
                <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.lname
                })}>
                  <input className="form-input input input-lg"
                    type="text" 
                    name="lname"
                    onChange={this.handleChange} />
                  <span className="input-error-message">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.lname}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-main">
            <div className="form-row">
              <div className="col form-group">
                <label htmlFor="email" className="t-sub1 form-label">Email address <span className="form-required">*</span></label>
                <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.email
                })}>
                  <input className="form-input input input-lg"
                    type="email" 
                    name="email"
                    onChange={this.handleChange} />
                  <span className="input-error-message">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.email}</span>
                  </span>
                </div>
              </div>

              <div className="col form-group">
                <label htmlFor="company" className="t-sub1 form-label">Company name <span className="form-required">*</span></label>
                <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.company
                })}>
                  <input className="form-input input input-lg"
                    type="text" 
                    name="company"
                    onChange={this.handleChange} />
                  <span className="input-error-message">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.company}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-main">
            <div className="form-row form-platform-interested" onChange={this.handleChange}>
              <div className="col col-full">
                <label className="t-sub1 form-label">Which platform are you interested in? <span className="form-required">*</span></label>
              </div>

              <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.platform
                })}>
                <span className="input-error-message relative">
                  <span className="exclamation">!</span>
                  <span>{this.state.errors.platform}</span>
                </span>
              </div>
              
              <div className="col form-group">
                <input id="distribute" className="form-input-radio" type="radio" name="platform" />
                <label htmlFor="distribute" className="form-label-radio">
                  <img className="form-img-distribute" src={require("assets/images/logo-distribute.png")} alt="" />
                  <span className="next-line"></span>
                  <Link to="#" className="t-body-sm form-link">Learn more</Link>
                </label>
              </div>
              <div className="col form-group">
                <input id="acquire" className="form-input-radio" type="radio" name="platform" />
                <label htmlFor="acquire" className="form-label-radio">
                  <img className="form-img-acquire" src={require("assets/images/acquire-logo.png")} alt="" />
                  <span className="next-line"></span>
                  <Link to="#" className="t-body-sm form-link">Learn more</Link>
                </label>
              </div>
              <div className="col form-group">
                <input id="not-sure" className="form-input-radio" type="radio" name="platform" />
                <label htmlFor="not-sure" className="form-label-radio no-bg"><span className="t-header-sm">Not sure yet</span></label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-main">
            <div className="form-row">
              <div className="col form-group">
                <label className="t-sub1 form-label">Which solution are you interested in? <span className="form-required">*</span></label>
                <select className="t-body-md form-select input-select"
                  name="solution"
                  onChange={this.handleChange}>
                  <option value="" disabled>Please select</option>
                  <option value="data-science">Data Science</option>
                  <option value="data-engineering">Data Engineering</option>
                  <option value="marketing">Marketing</option>
                  <option value="product-management">Product Management</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="sales">Sales</option>
                  <option value="business-intelligence">Business Intelligence</option>
                  <option value="legal">Legal</option>
                  <option value="not-sure">Not Sure</option>
                </select>
                <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.solution
                })}>
                  <span className="input-error-message relative">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.solution}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-main">
            <div className="form-row">
              <div className="col col-full">
                <label htmlFor="message" className="t-sub1 form-label">Message <span className="t-body-xs form-optional">(optional)</span></label>
                <textarea id="message" className="t-body-sm form-input form-input-textarea"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-main">
            <div className="form-row">
              <div className="col">
                <button className={classNames("btn btn-lg btn-wob btn-send", {
                  'btn-success': this.state.sent
                })}>
                  <span className='original-message'>Send</span>
                  <span className="thumb">{this.state.sent ? <FontAwesomeIcon icon={faThumbsUp} /> : null}</span>
                </button>
              </div>
              <div className="col form-group subscribe-check">
                <input id="newsletter" className="form-input-checkbox" type="checkbox"/>
                <label htmlFor="newsletter" className="t-body-sm form-label-checkbox">Subscribe to the Narrative.io newsletter</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default class GetStarted extends Component {
  render() {
    return (
      <div className="get-started-wrapper">
        <Banner pretitle={bannerData.pretitle} 
          title={bannerData.title}
          cta={bannerData.cta}
          bgImg={bannerData.bgImg} />

        <div className="get-started">
          <GetStartedHeading />
          <GetStartedForm />
        </div>
      </div>
    )
  }
}
