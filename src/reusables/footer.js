import React, { Component } from 'react'
import { Link } from 'react-static'
//
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
//
import InputValidator from '../reusables/validator'
import SendAirplane from '../assets/jsx/send-airplane'

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: {
        email: ""
      },
      sent: false,
      emailFormat: false
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  } 

  handleChange(e) {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({ fields })
  }

  handleFormSubmit(e) {
    e.preventDefault()

    if (this.state.emailFormat) {
      this.setState({ sent: true })
    }
  }

  componentDidUpdate(e) {
    if (this.state.fields.email) {
      if (InputValidator.checkIfEmailFormat(this.state.fields.email)) {
        if (!this.state.emailFormat) {
          this.setState({ emailFormat: true })
        }
      } else {
        if (this.state.emailFormat) {
          this.setState({ emailFormat: false })
        }
      }
    }
  }
 
  render() { 
    return (
      <footer>
        <div className="footer-wrapper">
          <div className="footer-table">
            <div className="td-footer td-footer-logo">
              <Link to="/">
                <img
                  src={require("assets/images/narrative-logo-2.svg")}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="td-footer">
              <div className="t-sub2 footer-sub"> Platforms</div>
              <div className="footer-items">
                <Link to="/platform-acquire" className="t-sub2">
                  Acquire
                </Link>
                <Link to="/platform-distribute" className="t-sub2">
                  Distribute
                </Link>
                <Link to="/pricing-distribute" className="t-sub2">
                  Pricing
                </Link>
              </div>
            </div>
            <div className="td-footer">
              <div className="t-sub2 footer-sub">Solutions</div>
              <div className="footer-items">
                <Link to="/solution/data-science" className="t-sub2">
                  Data Science
                </Link>
                <Link to="/solution/data-engineering" className="t-sub2">
                  Data Engineering
                </Link>
                <Link to="/solution/marketing" className="t-sub2">
                  Marketing
                </Link>
                <Link to="/solution/product-management" className="t-sub2">
                  Product Management
                </Link>
                <Link to="/solution/partnerships" className="t-sub2">
                  Partnerships
                </Link>
                <Link to="/solution/sales" className="t-sub2">
                  Sales
                </Link>
                <Link to="/solution/business-intelligence" className="t-sub2">
                  Business Intelligence
                </Link>
                <Link to="/solution/legal" className="t-sub2">
                  Legal
                </Link>
              </div>
            </div>
            <div className="td-footer">
              <div className="t-sub2 footer-sub">Company</div>
              <div className="footer-items">
                <Link to="/about" className="t-sub2">
                  About
                </Link>
                <Link to="/careers" className="t-sub2">
                  Careers
                </Link>
                <Link to="/contact" className="t-sub2">
                  Contact
                </Link>
                <Link to="/blog" className="t-sub2">
                  Perspectives
                </Link>
              </div>
            </div>
            <div className="td-footer td-footer-newsletter">
              <div>
                <div className="t-sub2 footer-sub t-sentence-case">
                  Sign up for our newsletter
                </div>
                <form id="formSend" 
                  onSubmit={this.handleFormSubmit}
                  noValidate={true}>
                  <div className="footer-input">
                    <input className="input input-lg email-address"
                      type="email"
                      name="email"
                      placeholder="email address"
                      onChange={this.handleChange}
                    />
                    <button className={classNames("btn-send", {
                      'ready': this.state.emailFormat,
                      'sent': this.state.sent
                    })}>
                      {this.state.sent ? <FontAwesomeIcon icon={faThumbsUp} /> : <SendAirplane />}
                    </button>
                  </div>
                </form>
              </div>
              <div className="footer-social-media-wrapper">
                <div className="t-sub2 footer-sub t-sentence-case">
                  Find us on social media
                </div>
                <div className="footer-social-media">
                  <div className="social-media-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                  <div className="social-media-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="social-media-icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                  <div className="social-media-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper">
            <p>@2018 Narrative I/O, Inc.</p>
            <p>
              <Link to="/privacy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
