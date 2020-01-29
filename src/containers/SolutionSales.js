import React, { Component } from 'react'
//
import Solution from '../reusables/solution'

const solutionBannerData = {
  category: 'Sales',
  title: 'Streamline monetization',
  heroImg: require("assets/images/solution-hero-sales.svg"),
  heroTitle: 'How Narrative helps Sales teams:',
  heroText: 'As someone tasked with making money for your company you know that you’re data is a gold mine. Getting it out of the ground and into the hands of your customers has always been the problem. Narrative offers you a turn-key data monetization solution that lets you focus on your go to market without giving up control over strategic decisions.'
}

const solutionContentData = [
  {
    title: 'Simplified management',
    listText: [
      'Manage all of your customers in one place'
    ]
  },
  {
    title: 'Flexible packaging',
    listText: [
      'A simple user interface that lets you create custom data packages to fit your customers needs and get the deal done'
    ]
  },
  {
    title: 'Eliminate opportunity cost',
    listText: [
      'Be less reliant on your engineering team to execute on new deals',
      'Signature to execution in hours not weeks'
    ]
  },
  {
    title: 'Revenue reporting',
    listText: [
      'Get daily line of sight into how your month + quarter are shaping up'
    ]
  },
  {
    title: 'Powerful pricing',
    listText: [
      'Support for various pricing models (fix monthly rate, cost per observation, etc.).',
      'Price simulations ensure a coherent pricing strategy.'
    ]
  },
]

const solutionCtaData = {
  pretitle: 'Get Started',
  title: 'Start streamlining monetization'
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

