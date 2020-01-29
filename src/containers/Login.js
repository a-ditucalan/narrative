import React, { Component } from 'react'
import { Link } from 'react-static'
//
import classNames from 'classnames'
//
import InputValidator from '../reusables/validator'
import LogoNarrativeWhite from '../assets/jsx/logo-narrative-white'
export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      fields: {
        email: "", 
        password: "" 
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
      'email',
      'password'
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
      alert("Login success")
    }
  }

  render() {
    return (
      <div className="login">
        <div className="holder-form">
          <h1 className="t-h2 form-title">Login</h1>
          <form className="form-default"
            onSubmit={this.handleFormSubmit} 
            noValidate={true}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="t-sub1 form-label">Email</label>
                <div className={classNames("input-invi-wrapper",
                  {'on-error': this.state.errors.email
                })}>
                  <input className="form-input input input-lg"
                    type="email" 
                    name="email"
                    onChange={this.handleChange} />
                  <span className="input-error-message relative">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.email}</span>
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="t-sub1 form-label">Password</label>
                <div className={classNames("input-invi-wrapper", {
                  'on-error': this.state.errors.password
                })}>
                  <input className="form-input input input-lg"
                    type="password" 
                    name="password"
                    onChange={this.handleChange} />
                  <span className="input-error-message relative">
                    <span className="exclamation">!</span>
                    <span>{this.state.errors.password}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <button className="btn btn-lg btn-wob" type="submit">LOG IN</button>
                <Link to="/login" className="t-body-sm link-reset a-blue">Reset password</Link>
              </div>
            </div>
          </form>
        </div>
        <div className="holder-navs">
          <Link to="/" className="logo-narrative">
            <LogoNarrativeWhite />
          </Link>
          <div className="navs">
            <Link to="/login" className="t-sub2 link">CREATE AN ACCOUNT</Link>
            <Link to="/" className="t-sub2 link">BACK TO WEBSITE</Link>
          </div>
        </div>
      </div>
    )
  }
}
