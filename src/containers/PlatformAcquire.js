import React, { Component } from 'react'
//
import CallToAction from '../reusables/cta'
import Perspectives from '../reusables/perspectives'

const howItWorksData = [
  {
    title: 'Discover',
    img: require('assets/images/acquire-module-discover.svg'),
    alt: 'Acquire discover image',
    text: [
      'Easily find the data you need with', 
      'manual and automated', 
      'discovery tools.'
    ]
  },
  {
    title: 'Manage',
    img: require('assets/images/acquire-module-manage.svg'),
    alt: 'Acquire manage image',
    text: [
      'Customize orders, access robust', 
      'analytics and manage everything in', 
      'one place.'
    ]
  },
  {
    title: 'Execute',
    img: require('assets/images/acquire-module-execute.svg'),
    alt: 'Acquire execute image',
    text: [
      'Integrate the data to your existing', 
      'platforms and applications.'
    ]
  }
]

const platformFeaturesData = [
  {
    info: {
      title: 'Marketplace',
      text: [
        'Access instant supply for', 
        'your data on your own', 
        'terms.'
      ]
    },
    graphic: {
      left: require("assets/images/left-servers-separated.svg"),
      mid: require("assets/images/acquire-marketplace.svg"),
      right: require("assets/images/right-servers-group.svg")
    }
  },
  {
    info: {
      title: 'Discovery',
      text: [
        'Find the precise data that', 
        'creates better outcomes', 
        'for your business.'
      ]
    },
    graphic: {
      left: require("assets/images/left-servers-group.svg"),
      mid: require("assets/images/acquire-discovery.svg"),
      right: require("assets/images/right-servers-separated.svg")
    }
  },
  {
    info: {
      title: 'Customization',
      text: [
        'Hypothesize, test, and', 
        'measure bespoke', 
        'acquisition strategies'
      ]
    },
    graphic: {
      left: require("assets/images/left-trend.svg"),
      mid: require("assets/images/acquire-customization.svg"),
      right: require("assets/images/right-trend.svg")
    }
  },
  {
    info: {
      title: 'Analytics',
      text: [
        'Make your data business a', 
        'data driven business with', 
        'constantly updated reports.'
      ]
    },
    graphic: {
      left: require("assets/images/left-gears.svg"),
      mid: require("assets/images/acquire-analytics.svg"),
      right: require("assets/images/right-gears.svg")
    }
  },
  {
    info: {
      title: 'Integrations',
      text: [
        'Export data anywhere', 
        'including data lakes, data', 
        'warehouse, social platforms,', 
        'CDP, DMP, etc.'
      ]
    },
    graphic: {
      left: require("assets/images/left-servers-group.svg"),
      mid: require("assets/images/acquire-integrations.svg"),
      right: require("assets/images/right-servers-separated.svg")
    }
  },
  {
    info: {
      title: 'Compliance',
      text: [
        'Standardize data licensing terms', 
        'and simplify compliance due', 
        'diligence.'
      ]
    },
    graphic: {
      left: require("assets/images/left-servers-group.svg"),
      mid: require("assets/images/acquire-compliance.svg"),
      right: require("assets/images/right-servers-group.svg")
    }
  },
  {
    info: {
      title: 'Centralized management',
      text: [
        'Manage your data partners,', 
        'orders, and billing through a', 
        'simple UI.'
      ]
    },
    graphic: {
      left: require("assets/images/left-messages.svg"),
      mid: require("assets/images/acquire-centralized-management.svg"),
      right: require("assets/images/right-clocks.svg")
    }
  },
]
class AcquireContent extends Component {
  render() {
    return (
      <div className="platform">
        <div className="platform-logo">
          <img src={require('../assets/images/logo-acquire-lg.svg')} alt="logo" />
          <p className="t-header-sm logo-caption">
            Precision discovery. &#8239; Centralized management. &#8239; Transparency and control.
          </p>
        </div>
        <div className="platform-banner">
          <div className="platform-banner-image">
            <div className="platform-banner-left">
              <img src={require("assets/images/acquire-connection-left.svg")} alt="logo" />
            </div>
            <div className="platform-hero-browser">
              <div className="platform-hero-top">
                <img src={require('../assets/images/browser-top.svg')} alt="browser buttons" />
              </div>
              <div className="platform-hero-content">
                <img src={require("assets/images/acquire-main.svg")} alt="platform hero distribute" />
              </div>
            </div>
            <div className="platform-banner-right">
              <img src={require("assets/images/distribute-connection-right.svg")} alt="logo" />
            </div>            
          </div>
          <p className="t-header-md banner-caption">
            The fragmented data landscape makes it impossible for you to scale and evolve your acquisition strategy. Narrative provides turn-key solutions to simplify data access.
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

export default class PlatformAcquire extends Component {
  render() {
    return (
      <div>
        <div className="platform-width">
          <AcquireContent />
        </div>
        <CallToAction pretitle="Get Started"
          title="Access the data you need"
        />
        <Perspectives cards={perspectivesCards} />
      </div>
    )
  }
}
