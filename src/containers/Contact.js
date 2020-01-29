import React, { Component } from 'react'
//
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
//
import InputValidator from '../reusables/validator'
import Banner from '../reusables/banner'
import OfficeLocation from '../reusables/location'

const bannerData = {
  pretitle: "Contact",
  title: ["We look forward to", "hearing from you."],
  cta: {
    type: "contact"
  },
  bgImg: require("../assets/images/banner-contact.jpg")
}

const emailDirectlyData = [
  {
    title: 'General inquiries',
    email: 'info@narrative.io'
  },
  {
    title: 'Privacy related',
    email: 'privacy@narrative.io'
  },
  {
    title: 'Press related',
    email: 'press@narrative.io'
  }
]

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      fields: {
        fname: "",
        lname: "",
        email: "", 
        subject: "",
        message: "",
        help: "1"
      },
      errors: {},
      emailDirectlyIndex: -1,
      sent: false,
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.emailDirectlyClick = this.emailDirectlyClick.bind(this)

    this.timeouts = []
    this.clearTimeouts = this.clearTimeouts.bind(this)
  }

  clearTimeouts() { this.timeouts.forEach(clearTimeout) }

  componentWillUnmount() { this.clearTimeouts() }

  handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsValid = true

    let checkIfNotEmptyArr = [
      'fname',
      'lname',
      'email',
      'subject',
      'message'
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

  emailDirectlyClick(i, str) {
    if (typeof document !== 'undefined') {
      const el = document.createElement('textarea')
      el.value = str
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }    

    this.clearTimeouts()
    this.setState({ emailDirectlyIndex: i })
    this.timeouts.push(setTimeout(() => {
      this.setState({ emailDirectlyIndex: -1 })
    }, 5000))
  }

  render() {
    // console.log(this.state)
    return (
      <div className="contact-form-wrapper">
        <div className="contact-form-holder">
          <div className="contact-form-content-message">
            <div className="t-header-bold-sm ">
              What can we help you with today?
            </div>
          </div>
          <div className="contact-form-content">
            <form className="contact-form"
              onSubmit={this.handleFormSubmit}
              noValidate={true}>
              <div className="select-holder">
                <select className="t-sub1 contact-select input-select" 
                  name="help"
                  onChange={this.handleChange}>        
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="1">General Inquiries</option>
                  <option value="2">Privacy related</option>
                  <option value="3">Press related</option>
                </select>
                {/* <img src={require("../assets/images/icon-down-caret.svg")} alt="caret" className="arrow-down"/> */}
              </div>
              <div className="name-wrapper">
                <div className="name-holder">
                  <div className="firstname t-sub1" htmlFor="fname">
                    <span className="input-label">First name <span className="input-label-required">*</span></span>
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
                </div>
                <div className="name-holder">
                  <div className="lastname t-sub1" htmlFor="lname">
                    <span className="input-label">Last name <span className="input-label-required">*</span></span>
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
              <div className="email t-sub1" htmlFor="email">
                <span className="input-label">Email Address <span className="input-label-required">*</span></span>
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

              <div className="subject t-sub1" htmlFor="subject">
                <span className="input-label">Subject <span className="input-label-required">*</span></span>
                <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.subject
                })}>
                  <input className="form-input input input-lg"
                    type="text" 
                    name="subject"
                    onChange={this.handleChange} />
                  <span className="input-error-message">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.subject}</span>
                  </span>
                </div>
              </div>

              <div className="message t-sub1">
                <span className="input-label"> Message <span className="input-label-required">*</span></span>
                <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.subject
                })}>
                  <textarea className="form-input input input-lg"
                    type="text" 
                    name="message"
                    onChange={this.handleChange} />
                  <span className="input-error-message">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.subject}</span>
                  </span>
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

        <div className="email-direct-wrapper">
          <div className="email-direct-holder">
            <div className="email-direct-content email-title">
              <div className="t-header-bold-sm">Email directly</div>
            </div>
            <div className="email-direct-content email-inquiries">

              {emailDirectlyData.map((item, i) => {              
                return (<div className={classNames("email-direct-content-wrapper", {
                    'active': this.state.emailDirectlyIndex === i
                  })} key={i}>
                  <div className="email-direct-content-container"
                    onClick={() => this.emailDirectlyClick(i, item.email)}>
                    <div className="t-body-bold-md email-direct-title">{item.title}</div>
                    <div className="email-direct-email a-blue t-body-sm">{item.email}</div>
                  </div>
                  <div className="t-body-xs clipboard">
                    email copied to clipboard
                  </div>
                </div>)
              })}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default class Contact extends Component {
  render() {
    return (
      <div className="contact-form">
        <Banner
          pretitle={bannerData.pretitle}
          title={bannerData.title}
          cta={bannerData.cta}
          bgImg={bannerData.bgImg}
        />

        <ContactForm />

        <div className="contact-office">
          <OfficeLocation />
        </div>
      </div>
    )
  }
}
