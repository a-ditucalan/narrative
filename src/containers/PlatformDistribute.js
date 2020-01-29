import React, { Component } from 'react'
//
import CallToAction from '../reusables/cta'
import Perspectives from '../reusables/perspectives'

const howItWorksData = [
  {
    title: 'Integrate',
    img: require('assets/images/distribute-module-integrate.svg'),
    alt: 'Distribute integrate image',
    text: [
      'Integrate your data into the Narrative', 
      'platform with minimal engineering'
    ]
  },
  {
    title: 'Manage',
    img: require('assets/images/distribute-module-manage.svg'),
    alt: 'Distribute manage image',
    text: [
      'Customize orders, access robust', 
      'analytics and manage everything in', 
      'one place.'
    ]
  },
  {
    title: 'Distribute',
    img: require('assets/images/distribute-module-distribute.svg'),
    alt: 'Distribute module image',
    text: [
      'Fulfill orders, view revenue reports', 
      'and maintain relationships with', 
      'partners.'
    ]
  }
]

const platformFeaturesData = [
  {
    info: {
      title: 'Marketplace',
      text: [
        'Access instant demand for', 
        'your data on your own',
        'terms.'
      ]
    },
    graphic: {
      left: require("assets/images/left-servers-group.svg"),
      mid: require("assets/images/distribute-marketplace.svg"),
      right: require("assets/images/right-money.svg")
    }
  },
  {
    info: {
      title: 'Data distribution',
      text: [
        'Empower your engineering team', 
        'to work on the big problems with', 
        'our streamlined integrations.'
      ]
    },
    graphic: {
      left: require("assets/images/left-servers-group.svg"),
      mid: require("assets/images/distribute-data-distribution.svg"),
      right: require("assets/images/right-servers-separated.svg")
    }
  },
  {
    info: {
      title: 'Yield Management',
      text: [
        'Make informed pricing',
        'decisions based on market',
        'conditions.'
      ]
    },
    graphic: {
      left: require("assets/images/left-trend.svg"),
      mid: require("assets/images/distribute-yield-management.svg"),
      right: require("assets/images/right-trend.svg")
    }
  },
  {
    info: {
      title: 'Order Management',
      text: [
        'Manage your data partners,',
        'orders, and billing through a',
        'simple UI.'
      ]
    },
    graphic: {
      left: require("assets/images/left-messages.svg"),
      mid: require("assets/images/distribute-order-management.svg"),
      right: require("assets/images/right-clocks.svg")
    }
  },
  {
    info: {
      title: 'Reporting',
      text: [
        'Make your data business a',
        'data driven business with',
        'constantly updated reports.'
      ]
    },
    graphic: {
      left: require("assets/images/left-gears.svg"),
      mid: require("assets/images/distribute-reporting.svg"),
      right: require("assets/images/right-gears.svg")
    }
  },
  {
    info: {
      title: 'Compliance',
      text: [
        'Standardize data licensing terms',
        'and centralize distribution of',
        'consent and privacy flags.'
      ]
    },
    graphic: {
      left: require("assets/images/left-servers-group.svg"),
      mid: require("assets/images/distribute-compliance.svg"),
      right: require("assets/images/right-servers-group.svg")
    }
  }
]
class DistributeContent extends Component {
  render() {
    return (
      <div className="platform">
        <div className="platform-logo">
          <img src={require('../assets/images/logo-distribute-lg.svg')} alt="logo" />
          <p className="t-header-sm logo-caption">
            Turn-key revenue. &#8239; Minimal engineering. &#8239; Transparency and control.
          </p>
        </div>
        <div className="platform-banner">
          <div className="platform-banner-image">
            <div className="platform-banner-left">
              <img src={require("assets/images/distribute-connection-left.svg")} alt="logo" />
            </div>
            <div className="platform-hero-browser">
              <div className="platform-hero-top">
                <img src={require('../assets/images/browser-top.svg')} alt="browser buttons" />
              </div>
              <div className="platform-hero-content">
                <img src={require('../assets/images/distribute-main.svg')} alt="platform hero distribute" />
              </div>
            </div>
            <div className="platform-banner-right">
              <img src={require("assets/images/distribute-connection-right.svg")} alt="logo" />
            </div>            
          </div>
          <p className="t-header-md banner-caption">
            Developing a data monetization strategy is easier than executing
            against it. Narrative provide turn-key solutions to make your goals
            reality.
          </p>
        </div>
        <div className="platform-how-works-wrapper">
          <p className="t-header-lg how-works-title">How it works</p>

          <div className="platform-how-works-holder"> 
            {howItWorksData.map((work, i) => (
              <div className="platform-how-works-content" key={i}>
                <p className="platform-how-works-title t-header-sm">{work.title}</p>
                <img
                  src={work.img}
                  alt={work.alt}
                />
                <div className="t-body-sm">
                  {work.text.map((line, j) => (<div key={j}>{line}</div>))}
                </div>
              </div>
            ))}          
          </div>
        </div>

        <div className="platform-features-wrapper">
          <p className="t-header-lg features-title">Platform features</p>
          {platformFeaturesData.map((feature, i) => (
            <div className="platform-feature" key={i}>
              <div className="platform-feature-graphic">
                <div className="platform-feature-left">
                <img src={feature.graphic.left}
                  alt="features-logo" />
                </div>
                <div className="platform-feature-browser">
                  <div className="browser-top">
                    <img src={require('assets/images/browser-top-sm.svg')}
                  alt="browser buttons" />
                  </div>
                  <div className="browser-content">
                    <img src={feature.graphic.mid}
                  alt="features-logo" />
                  </div>
                </div>                
                <div className="platform-feature-right">
                <img src={feature.graphic.right}
                  alt="features-logo" />
                </div>
              </div>
              <div className="platform-feature-info">
                <p className="t-header-md">{feature.info.title}</p>
                <div className="t-header-sm">
                  {feature.info.text.map((line, j) => (<div key={j}>{line}</div>))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const perspectivesCards = [
  {
    img: require("../assets/images/perspectives-card-watch.jpg"),
    title: "Blog headline goes here lorem ipsum dolor",
    tags: ["Business", "Marketing"]
  },
  {
    img: require("../assets/images/perspectives-card-glasses.jpg"),
    title: "Blog headline goes here lorem ipsum dolor",
    tags: ["Data Science", "Acquisition"]
  },
  {
    img: require("../assets/images/perspectives-card-mac.jpg"),
    title: "Blog headline goes here lorem ipsum dolor",
    tags: ["Distribution", "Technology"]
  }
]

export default class PlarformDistribute extends Component {
  render() {
    return (
      <div>
        <div className="platform-width">
          <DistributeContent />
        </div>
        <CallToAction pretitle="Get Started"
          title="Unlock the value of your data"
        />
        <Perspectives cards={perspectivesCards} />
      </div>
    )
  }
}
