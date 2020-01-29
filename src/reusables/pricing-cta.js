import React, { Component } from 'react'
//
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
//
import InputValidator from '../reusables/validator'

export default class PricingCta extends Component { 
  constructor(props) {
    super(props)

    this.state = { 
      fields: {
        fname: "",
        lname: "",
        email: "", 
        company: "" 
      },
      errors: {},
      sent: false  
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
      'company'
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
    const planTypeLogo = this.props.planTypeLogo
    const planTypeText = this.props.planTypeText

    return (
      <div className="pricing-cta-wrapper">
        <div className="pricing-cta">
          <div className="pricing-cta-intro">
            <img className="logo-distribute" src={planTypeLogo} alt="" />
            <div className="t-header-sm">{planTypeText}</div>
            <div className="t-header-md">
              <div>Thanks for choosing Narrative!</div>
              <div>Please fill out the form and we’ll be in touch soon with next steps.</div>
            </div>
          </div>

          <form className="pricing-cta-form" onSubmit={this.handleFormSubmit} noValidate={true}>
            <div className="form-input-wrapper">
              <div className="input-wrapper">
                <label className="t-sub1">
                  <span>First Name</span>
                  <span className="input-required">*</span>
                </label>
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

              <div className="input-wrapper">
                <label className="t-sub1">
                  <span>Last Name</span>
                  <span className="input-required">*</span>
                </label>
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

              <div className="input-wrapper">
                <label className="t-sub1">
                  <span>Email address</span>
                  <span className="input-required">*</span>
                </label>
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

              <div className="input-wrapper">
                <label className="t-sub1">
                  <span>Company Name</span>
                  <span className="input-required">*</span>
                </label>
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
            <button className={classNames("btn btn-lg btn-wob btn-send", {
              'btn-success': this.state.sent
            })}>
              <span className='original-message'>Send</span>
              <span className="thumb">{this.state.sent ? <FontAwesomeIcon icon={faThumbsUp} /> : null}</span>            
            </button>
          </form>
        </div>
      </div>
    )
  }
}