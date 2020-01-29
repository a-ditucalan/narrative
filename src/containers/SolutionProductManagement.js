import React, { Component } from 'react'
//
import Solution from '../reusables/solution'

const solutionBannerData = {
  category: 'Product management',
  title: 'Spark innovation',
  heroImg: require("assets/images/solution-hero-product-management.svg"),
  heroTitle: 'How Narrative helps Product Managers:',
  heroText: 'As a Product Manager you know that your projects require a data strategy — how will data be collected, consumed, or distributed? How does this uniquely position you to win in your market? With Narrative you can spend more of your time focused on the big picture and less time worried about file formats and ETL.'
}

const solutionContentData = [
  {
    title: 'Raw data',
    listText: [
      '100% declared or observed.',
      'No aggregation or inference.',
      'Dozens of data types / attributes'
    ]
  },
  {
    title: 'Iterate on your Ideas',
    listText: [
      'Our intuitive UI allows for creation of bespoke strategies on the fly.'
    ]
  },
  {
    title: 'Speed up development',
    listText: [
      'Spend your time innovating not worrying about ETL.',
      'High availability keeps your engineers focused on important projects.'
    ]
  },
  {
    title: 'Modern stack',
    listText: [
      'Flexible file formats & protocols.',
      'Streaming or batch.',
      'Support for multiple cloud platforms.'
    ]
  }
]

const solutionCtaData = {
  pretitle: 'Get Started',
  title: 'Start sparking innovation'
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

