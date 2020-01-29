import React, { Component } from 'react'
import { Link } from 'react-static'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
//
import Banner from '../reusables/banner'
import OfficeLocation from '../reusables/location'
import JobCallout from '../reusables/job-callout'
import CallToAction from '../reusables/cta'

const bannerData = {
  pretitle: 'About us',
  title: [
    "We help companies",
    "acquire, distribute and",
    "use data more efficiently."
  ],
  cta: {
    type: 'button',
    text: 'Schedule a call'
  },
  bgImg: require('../assets/images/banner-about.jpg')
}

const leadershipTeam = [
  {
    img: require('../assets/images/about-team-pat.jpg'),
    firstLine: 'Pat',
    secondLine: 'Morita',
    text: 'Miyagi',
    social: [
      {
        site: 'twitter',
        icon: faTwitter,
        url: 'https://twitter.com/'
      },
      {
        site: 'linkedIn',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/'
      },
    ]
  },
    {
    img: require('../assets/images/about-team-ralph.jpg'),
    firstLine: 'Ralph',
    secondLine: 'Macchio',
    text: 'Daniel Son',
    social: [
      {
        site: 'twitter',
        icon: faTwitter,
        url: 'https://twitter.com/'
      },
      {
        site: 'linkedIn',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/'
      },
    ]
  },
    {
    img: require('../assets/images/about-team-elizabeth.jpg'),
    firstLine: 'Elizabeth',
    secondLine: 'Shue',
    text: 'Ali',
    social: [
      {
        site: 'twitter',
        icon: faTwitter,
        url: 'https://twitter.com/'
      },
      {
        site: 'linkedIn',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/'
      },
    ]
  },
    {
    img: require('../assets/images/about-team-william.jpg'),
    firstLine: 'William',
    secondLine: 'Zabka',
    text: 'Johnny',
    social: [
      {
        site: 'twitter',
        icon: faTwitter,
        url: 'https://twitter.com/'
      },
      {
        site: 'linkedIn',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/'
      },
    ]
  }
]

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

        <div className="leadership-wrapper">
          <div className="leadership">
            <div className="leadership-title t-header-lg">Leadership team</div>
            <div className="leadership-team">

            {leadershipTeam.map((person, i) => (
              <div className="person-card" key={i}>
                <div className="person-card-img">
                  <img src={person.img} alt="" className="object-fit-cover" />
                </div>
                <div className="person-card-info">
                  <div className="person-name t-h4">{person.firstLine}</div>
                  <div className="person-name t-h4">{person.secondLine}</div>
                  <div className="person-text t-body-sm">{person.text}</div>
                  <div className="person-social">
                    {person.social.map((social, j) => (
                      <Link to={social.url} target="_blank" className="person-social-icon social-interaction" key={j}>
                        <FontAwesomeIcon icon={social.icon} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
              
            </div>
          </div>
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