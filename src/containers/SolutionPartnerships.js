import React, { Component } from 'react'
//
import Solution from '../reusables/solution'

const solutionBannerData = {
  category: 'Partnerships',
  title: 'Centralize your relationships',
  heroImg: require("assets/images/solution-hero-partnerships.svg"),
  heroTitle: 'How Narrative helps Business Development:',
  heroText: "Data partnerships are key to accelerating your organization's ability to innovate. Partnerships take a long time to source, longer yet to implement, and offer little chance to change your strategy midstream.  Narrative gives you a single platform of record to simplify the data partnership lifecycle from start to finish."
}

const solutionContentData = [
  {
    title: <div>
      <div>Multiple partners.</div>
      <div>One contract.</div>
    </div>,
    listText: [
      'Manage all of your partnership through a single interface.',
      'Full transparency allows you to negotiate your own terms.'
    ]
  },
  {
    title: 'Simplified management',
    listText: [
      'Manage all of your commercial terms in one place.',
      'Daily reporting lets you measure the effective of your strategy.'
    ]
  },
  {
    title: 'Powerful pricing',
    listText: [
      'Support for various pricing models (fix monthly rate, cost per observation, etc.).',
      'Price simulations ensure a coherent pricing strategy.'
    ]
  }
]

const solutionCtaData = {
  pretitle: 'Get Started',
  title: 'Start centralizing your relationships'
}

export default class GeneralSolution extends Component {
  render() {
    return (
      <Solution bannerData={solutionBannerData} 
        contentData={solutionContentData} 
        ctaData={solutionCtaData} />
    )
  }
}

