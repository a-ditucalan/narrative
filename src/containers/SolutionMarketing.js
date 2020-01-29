import React, { Component } from 'react'
//
import Solution from '../reusables/solution'

const solutionBannerData = {
  category: 'Marketing',
  title: 'Maximize engagement',
  heroImg: require("assets/images/solution-hero-marketing.svg"),
  heroTitle: 'How Narrative helps Growth Marketers:',
  heroText: 'As a growth marketer, it’s all about acquiring customers that will stick around. The best way to achieve that goal is by layering data into your strategy, but ROI positive data hard to come by. Narrative helps you find and access high quality signal at scale to grow your customer base.'
}

const solutionContentData = [
  {
    title: 'Better understand your competitors',
    listText: [
      'Paint a clear picture of your competitive landscape.',
      'Conquest those users across your paid marketing channels.'
    ]
  },
  {
    title: 'Turn-key integrations',
    listText: [
      'Social',
      'Google / Amazon',
      'Programmatic',
      'DMPs / CDPs',
      'In-house tools'
    ]
  },
  {
    title: 'Flexible licensing',
    listText: [
      'Leverage licensed data for planning, activation, and measurement.',
      'Buy once and use everywhere allows you to amortize the cost of the data across all of your channels.'
    ]
  },
  {
    title: 'Optimize over time',
    listText: [
      'Setup custom strategies via an intuitive UI.',
      'Shorten the window between idea and data access.',
      'No long term commitments minimizes the risk in data exploration.'
    ]
  }
]

const solutionCtaData = {
  pretitle: 'Get Started',
  title: 'Start maximizing engagement'
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

