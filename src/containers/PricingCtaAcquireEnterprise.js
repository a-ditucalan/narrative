import React, { Component } from 'react'
//
import PricingCta from '../reusables/pricing-cta'

export default class PricingCtaDistributeEnterprise extends Component {
  render() {
    return (
      <PricingCta planTypeLogo={require('../assets/images/logo-acquire-lg.svg')} planTypeText="Enterprise plan" />
    )
  }
}
