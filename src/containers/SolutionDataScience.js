import React, { Component } from 'react'
//
import Solution from '../reusables/solution'

const solutionBannerData = {
  category: 'Data Science',
  title: 'Build better models',
  heroImg: require("assets/images/solution-hero.svg"),
  heroTitle: 'How Narrative helps Data Scientists:',
  heroText: 'As a data scientist, it can be a painful process to procure high fidelity data to improve your models. Narrative streamlines access to raw data to test your hypotheses, and makes it easy to scale access for your best ideas.'
}

const solutionContentData = [
  {
    title: 'Raw data',
    listText: [
      '100% declared or observed',
      'No aggregation or inference.'
    ]
  },
  {
    title: 'Hypothesis testing',
    listText: [
      'Shorten the window between idea and data access.',
      'No long term commitments minimizes the risk in data exploration.'
    ]
  },
  {
    title: 'Feature selection',
    listText: [
      'Automated recommendations of most impactful attributes.',
      'No black boxes.'
    ]
  },
  {
    title: 'Quality evaluation',
    listText: [
      'Leverage ground truth to measure the veracity of supply.',		
	    'Set your own thresholds for quality.'
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
    title: 'Use in your existing toolchain',
    listText: [
      'Egress licensed data into any external platform.',
    	'Modern file formats and protocols help avoid “CSV hell.”'
    ]
  }
]

const solutionCtaData = {
  pretitle: 'Get Started',
  title: 'Start building better models'
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

