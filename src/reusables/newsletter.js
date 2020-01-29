import React, { Component } from 'react'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
//
import InputValidator from '../reusables/validator'
import classNames from 'classnames'

export default class Newsletter extends Component { 
  constructor(props) {
    super(props)

    this.state = { 
      fields: {
        email: "", 
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
      'email',
    ]

    checkIfNotEmptyArr.forEach((item) => {
      if (!InputValidator.checkIfNotEmpty(fields[item])) {
        formIsValid = false
        errors[item] = "This is a required field"
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
    const props = this.props.data

    return (
      <div className="newsletter">
        <div className="t-header-lg">
          Sign up for our newsletter
        </div>
        <form className="newsletter-input" onSubmit={this.handleFormSubmit} noValidate={true}>    
          <div className={classNames("input-invi-wrapper", {
            'on-error': this.state.errors.email
          })}>
            <input name="email" 
              type="email" 
              placeholder="Email Address" 
              className="input input-lg" 
              onChange={this.handleChange} />
            <span className="input-error-message">
              <span className="exclamation">!</span>
              <span>{this.state.errors.email}</span>
            </span>
          </div>
          <button className={classNames("btn btn-lg btn-wob btn-more btn-min-width btn-send", {
            'btn-success': this.state.sent
          })}>
            <span className='original-message'>Sign me Up</span>
            <span className="thumb">{this.state.sent ? <FontAwesomeIcon icon={faThumbsUp} /> : null}</span>            
          </button>
        </form>
      </div>
    )
  }
}