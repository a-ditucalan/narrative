import React, { Component } from 'react'
//
import ScrollableAnchor from 'react-scrollable-anchor'
//
import Banner from '../reusables/banner'
import JobCallout from '../reusables/job-callout'
import CallToAction from '../reusables/cta'
class CareersIntro extends Component {
  render() {
    return (
      <div className="section-intro">
        <h2 className="t-header-md section-title">We are looking for talented people to help as we design and develop solutions that allow people to find, access and use data in a new, simpler way.</h2>

        <div className="holder-imgs">
          <img className="img-careers" src={require("assets/images/img-careers1.jpg")} alt="" />
          <img className="img-careers" src={require("assets/images/img-careers2.jpg")} alt="" />
          <img className="img-careers" src={require("assets/images/img-careers3.jpg")} alt="" />
        </div>

        <h2 className="t-header-md section-title">At Narrative, you’ll receive a competitive salary, generous benefits package and healthy workplace culture.</h2>

        <div className="holder-info">
          <div className="info">
            <h4 className="t-h4 title-info">Balance</h4>
            <p className="t-body-sm desc-info">Our career makes up a big part of our life. Spending a large part of the day at work, we believe that it should be time well spent; productive and with purpose. Equity packages, working from home and flexible vacation are just some of the ways we want to ensure a good work-life balance.</p>
          </div>
          <ScrollableAnchor id={'open-position'}>  
          <div className="info">
            <h4 className="t-h4 title-info">Transparency</h4>
            <p className="t-body-sm desc-info">Modern companies use data to effectively run their businesses and using data requires transparency. Therefore, Narrative believes in radical transparency within the workplace as well. A company building and sharing knowledge can work smarter and faster.</p>
          </div>
          </ScrollableAnchor>
        </div>
      </div>
    )
  }
}

const careersPageData = [
  {
    category: 'Engineering',
    description: 'Our engineering team develops solutions that enable our customers to realize their goals. We invest in modern tools and are not afraid to pursue bold new product ideas.',
    jobs: [
      {
        position: 'Lead Developer',
        location: 'New York, NY',
        url: '/career'
      },
      {
        position: 'Jr. Developer',
        location: 'New York, NY',
        url: '/career'
      },
      {
        position: 'Jr. Developer',
        location: 'New York, NY',
        url: '/career'
      },
      {
        position: 'Jr. Developer',
        location: 'New York, NY',
        url: '/career'
      }
    ]
  },
  {
    category: 'Design',
    description: 'Working closely with engineering, you’ll design industry leading software applications that allow maximum efficiency for our customers.',
    jobs: [
      {
        position: 'UX Designer',
        location: 'New York, NY',
        url: '/career'
      },
      {
        position: 'Jr. Designer',
        location: 'New York, NY',
        url: '/career'
      }
    ]
  },
  {
    category: 'Marketing',
    description: 'The Marketing team is committed to making Narrative a trusted global brand by promoting our products, and spearheading creative campaigns.',
    jobs: [
      {
        position: 'Mid Level Marketing Manager',
        location: 'New York, NY',
        url: '/career'
      },
      {
        position: 'Copywriter',
        location: 'New York, NY',
        url: '/career'
      }
    ]
  }
]

class CareersPositions extends Component {
  render() {
    return (

      <div className="section-positions" >
       
        <h2 className="t-h2 section-heading">Open positions</h2>
     
        <div className="holder-positions">
          {careersPageData.map((item, i) => (
            <div className="col-block" key={i}>
            <div className="col-title t-h3">
              {item.category}
            </div>

            <div className="col-info">
              <div className="t-header-sm">
                {item.description}
              </div>

              <div className="jobs-wrapper">
                {item.jobs.map((job, j) => (
                  <JobCallout key={j}
                    position={job.position}
                    location={job.location}
                    url={job.url}
                  />
                ))}  
              </div>
            </div>
            </div>
          ))}
        </div>
        
      </div>
    )
  }
}

const bannerData = {
  pretitle: 'Narrative careers',
  title: [
    "Join an experienced",
    "team that is shaping",
    "the future of data."
  ],
  cta: {
    type: 'button',
    text: 'Open positions',
    url: '#open-position'
  },
  bgImg: require('../assets/images/banner-placeholder.jpg')
}

export default class Careers extends Component {
  render() {
    return (
      <div>
        <Banner pretitle={bannerData.pretitle} 
          title={bannerData.title}
          cta={bannerData.cta}
          bgImg={bannerData.bgImg} />

        <div className="careers">
          <CareersIntro />
          <CareersPositions />
        </div>

        <CallToAction pretitle="Questions?" 
          title="We love hearing from talented people from all disciplines and backgrounds."
          call={false}
        />
      </div>
    )
  }
}
