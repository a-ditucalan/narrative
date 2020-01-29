import React, { Component } from 'react'
//
import Solution from '../reusables/solution'

const solutionBannerData = {
  category: 'Business Intelligence',
  title: 'Make better informed decisions',
  heroImg: require("assets/images/solution-hero-business-intelligence.svg"),
  heroTitle: 'How Narrative helps Analysts:',
  heroText: 'As an analyst you’ve been tasked with helping you business make better decision based on data.  For analysis regarding the internal operations of the business your own data might suffice, but when you’re trying to evaluate broader questions you can be left in the dark. Put simply, you don’t know what you don’t know. Narrative gives you easy access to external data sets to help you answer the big questions.'
}

const solutionContentData = [
  {
    title: 'Enhance your customer records',
    listText: [
      'Enrich your customer records with their activities beyond your walls',
      'Records can be pushed to your existing systems (CRM, CDP, DMP, Data Warehouse)'
    ]
  },
  {
    title: 'Better understand your competitors',
    listText: [
      'Paint a clear picture of your competitive landscape'
    ]
  },
  {
    title: 'See the big picture',
    listText: [
      'Tie disparate data sets together for a 360 view.'
    ]
  },
  {
    title: 'Raw data',
    listText: [
      '100% declared or observed.',
      'No aggregation or inference.',
      'Dozens of data types / attributes'
    ]
  },
]

const solutionCtaData = {
  pretitle: 'Get Started',
  title: 'Start making better informed decisions'
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

