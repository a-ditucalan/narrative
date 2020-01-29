import React, { Component } from 'react'
//
import CallToAction from '../reusables/cta'
import Perspectives from '../reusables/perspectives'

class SolutionBanner extends Component {
  render() {
    const bannerData = this.props.bannerData

    return (
      <div className="solution-banner-wrapper">
        <p className="t-header-md">{bannerData.category}</p>
        <p className="t-h1 bottom-space">{bannerData.title}</p>
        <div className="solution-banner-content">
          <img
            className="logo-platform"
            src={bannerData.heroImg}
            alt="Solution page hero image"
          />
          <div className="data-science-title">
            <p className="t-h4">{bannerData.heroTitle}</p>
            <p className="t-body-sm">
              {bannerData.heroText}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class SolutionContent extends Component {
  render() {
    const solutionData = this.props.contentData

    return (
      <div className="solution-content-wrapper">
        <div className="solution-content-holder">
        
          {solutionData.map((item, i) => (
            <div className="solution-content" key={i}>
              <div className="solution-content-title">
                <div className="t-header-lg">{item.title}</div>
              </div>
              <ul>
                {item.listText.map((listItem, j) => (
                  <li className="t-header-sm" key={j}>{listItem}</li>
                ))}
              </ul>
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

export default class Solution extends Component {
  render() {
    const bannerData = this.props.bannerData
    const contentData = this.props.contentData
    const ctaData = this.props.ctaData

    return (
      <div className="solution">
        <SolutionBanner bannerData={bannerData}/>
        <SolutionContent contentData={contentData} />
        <CallToAction pretitle={ctaData.pretitle}
          title={ctaData.title} />
        <Perspectives cards={perspectivesCards} />
      </div>
    )
  }
}
