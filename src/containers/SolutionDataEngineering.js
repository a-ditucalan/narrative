import React, { Component } from 'react'
//
import Solution from '../reusables/solution'

const solutionBannerData = {
  category: 'Data Engineering',
  title: 'Simplify infrastructure',
  heroImg: require("assets/images/solution-hero-data-engineering.svg"),
  heroTitle: 'How Narrative helps Data Engineers:',
  heroText: 'As a data engineer you’re being asked to clean and aggregate multiple data sources, taking up an enormous amount of time. With Narrative, we’ve done all the hard work so the data you get is usable immediately allowing your team to execute faster.'
}

const solutionContentData = [
  {
    title: 'Single point of integration',
    listText: [
      'Narrative simplifies integration allowing for better, faster work flows.'
    ]
  },
  {
    title: 'Standardization',
    listText: [
      'Data from multiple sources is normalized into a single feed.',
      'Retain record level provenance by source.',
      'Spend your time doing data science not ETL.'
    ]
  },
  {
    title: 'Modern stack',
    listText: [
      'Flexible file formats & protocols.',
      'Streaming or batch.',
      'Support for multiple cloud platforms.'
    ]
  },
  {
    title: 'Management',
    listText: [
      'Narrative manages downstream outages.',
      'Reporting & alerts.'
    ]
  },
]

const solutionCtaData = {
  pretitle: 'Get Started',
  title: 'Start simplifying your infrastructure'
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

