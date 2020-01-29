import React, { Component } from 'react'
//
import Solution from '../reusables/solution'

const solutionBannerData = {
  category: 'Legal',
  title: 'Simplify compliance',
  heroImg: require("assets/images/solution-hero-legal.svg"),
  heroTitle: 'How Narrative helps Legal teams:',
  heroText: 'As organizations push the envelope in how they leverage data it has become the legal teams challenge to figure out how to minimize any risk. Topics like privacy and data security are complex and require a well thought out solution. Narrative provides that solution ensuring your business can innovate with peace of mind.'
}

const solutionContentData = [
  {
    title: 'Transparency',
    listText: [
      'Narrative acts as a conduit between parties but never obfuscates participants',
      'Use your own compliance frameworks',
    ]
  },
  {
    title: 'Anonymization layer',
    listText: [
      'Narrative can act as an anonymization layer, allowing your teams to do their jobs without using personal information.'
    ]
  },
  {
    title: 'Clean room',
    listText: [
      'The Narrative platforms act as Switzerland, allowing parties to minimize their risk footprint'
    ]
  },
  {
    title: 'Data security',
    listText: [
      'Built with security in mind, Narrative employs best practices to ensure that the data doesn’t go to anyone it shouldn’t.'
    ]
  }
]

const solutionCtaData = {
  pretitle: 'Get Started',
  title: 'Start simplifying compliance'
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

