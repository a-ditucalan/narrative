import React, { Component } from 'react'
import { Link } from 'react-static'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
//
import Banner from '../reusables/banner'
import HeroCard from '../reusables/hero-card'
import OfficeLocation from '../reusables/location'
import JobCallout from '../reusables/job-callout'
import CallToAction from '../reusables/cta'

const bannerData = {
  pretitle: 'About us',
  title: [
    "We power the data",
    "economy."
  ],
  cta: {
    type: 'button',
    text: 'Schedule a call'
  },
  bgImg: require('../assets/images/banner-about-also.jpg')
}

const blogHeroCardData = {
  img: require('../assets/images/blog-hero-laptop.jpg'),
  tag: 'Technology',
  date: '12/02/18',
  title: 'This is a big callout to the Narrative Manifesto blog post',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
  author: 'Nick Jordan',
  position: 'CEO, Narrative'
}

const careersData = [
  {
    position: 'Lead Developer',
    location: 'New York, NY',
    url: '/career'
  },
  {
    position: 'UX Designer',
    location: 'New York, NY',
    url: '/career'
  },
  {
    position: 'Jr. Developer',
    location: 'New York, NY',
    url: '/career'
  },
  {
    position: 'Copywriter',
    location: 'New York, NY',
    url: '/career'
  }
]

export default class About extends Component { 
  render() {
    return (
      <div className="about">
        <Banner pretitle={bannerData.pretitle} 
          title={bannerData.title}
          cta={bannerData.cta}
          bgImg={bannerData.bgImg} />

        <div className="about-company">
          <div className="t-h2">Company</div>
          <div className="about-company-info">
            <div className="info-general">
              <div className="t-header-md">
                We are building the next-generation platform for data acquisition, monetization, management and strategy creation that works across industries.
              </div>
              <div className="t-header-sm">
                Whether you’re a growth marketer for a direct to consumer app or a data scientist at a fortune 100 company, Narrative’s software will allow you to work with data in a more efficient way than ever before. What was once a tedious, opaque and often wasteful process is now turn-key, secure and radically transparent.
              </div>
            </div>
            <div className="info-nutshell">
              <div className="t-h4">In a nutshell</div>
              <ul className="t-body-sm">
                <li>We make it dead simple to buy and sell data.</li>
                <li>Software built from the ground up with security in it’s foundation.</li>
                <li>As the Switzerland of data, we do not buy, sell or store data.</li>
                <li>We are software, not a broker, DMP, CDP, insert your favorite acronym.</li>
                <li>Our team consists of data, software and marketing industry veterans.</li>
                <li>Our investors are industry leaders and trusted strategic partners.</li>
                <li>We are located in New York City.</li>
                <li>We make fun of industry jargon in most of our meetings. </li>
              </ul>
            </div>
          </div> 
        </div>

        <div className="about-hero-card">
          <HeroCard data={blogHeroCardData} />
        </div>

        <OfficeLocation />

        <div className="about-careers-wrapper">
          <div className="about-careers col-block">
            <div className="about-careers-title col-title t-header-lg">
              Careers
            </div>
            <div className="about-careers-info col-info">
              <div className="about-careers-detail t-header-sm">
                Join us as we navigate our way through uncharted territory and help as we create innovative solutions to big problems.
              </div>
              <div className="about-careers-list">
                {careersData.map((job, i) => (
                    <JobCallout key={i}
                      position={job.position}
                      location={job.location}
                      url={job.url}
                    />
                ))}  
              </div>
              <Link to="/career">
                <button className="btn btn-lg btn-wob btn-min-width">All Openings</button>
              </Link>
            </div>
          </div>
        </div>
        <CallToAction pretitle="Get in touch" 
          title="We look forward to hearing from you"
          call={false}
        />
      </div>
    )
  }
}