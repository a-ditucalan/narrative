import React, { Component } from 'react'
//
import PricingCta from '../reusables/pricing-cta'

export default class PricingCtaDistributeBasic extends Component {
  render() {
    return (
      <PricingCta planTypeLogo={require('../assets/images/logo-acquire-lg.svg')} planTypeText="Basic plan" />
    )
  }
}
