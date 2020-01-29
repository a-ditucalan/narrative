import React, { Component } from 'react'
//

class PrivacyPolicyBanner extends Component {
  render() {
    return (
      <div className="privacy-policy-banner-wrapper">
        <div className="privacy-policy-banner-holder">
          <p className="t-h2">Privacy policy</p>
          <p className="t-body-md">
            This Privacy Policy is effective December 17, 2018
          </p>
        </div>
      </div>
    )
  }
}

class NarrativePrivacyPolicy extends Component {
  render() {
    return (
      <div className="privacy-policy-narrative-wrapper">
        <div className="privacy-policy-narrative-holder">
          <p className="t-header-md policy-sub-title">
            Narrative Privacy policy
          </p>
          <p className="t-body-md">Copy/paste</p>
        </div>
      </div>
    )
  }
}
export default class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="privacy-policy">
        <PrivacyPolicyBanner />
        <NarrativePrivacyPolicy />
      </div>
    )
  }
}
