import React, { Component } from 'react'
//

class PrivacyPolicyBanner extends Component {
  render() {
    return (
      <div className="privacy-policy-banner-wrapper">
        <div className="privacy-policy-banner-holder">
          <p className="t-h2">Privacy policy</p>
          <p className="t-body-md">
          </p>
        </div>
      </div>
    )
  }
}

class TermPrivacyPolicy extends Component {
  render() {
    return (
      <div className="privacy-policy-narrative-wrapper">
        <div className="privacy-policy-narrative-holder">
          <p className="t-header-md policy-sub-title">
            Narrative Terms and Service
          </p>
          <p className="t-body-md">Copy/paste</p>
        </div>
      </div>
    )
  }
}
export default class TermsOfService extends Component { 
  render() {
    return (
      <div className="privacy-polify">
      <PrivacyPolicyBanner/>
      <TermPrivacyPolicy/>
      </div>
    )
  }
}