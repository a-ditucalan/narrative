import React, { Component } from 'react'
import { Link } from 'react-static'
//
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
//
import Perspectives from '../reusables/perspectives'
import CallToAction from '../reusables/cta'

class HomeBanner extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rouletteActiveIndex: 0
    }

    this.rouletteText = [
      'discovery',
      'pricing',
      'integration',
      'privacy',
      'security'
    ]

    this.intervals = []
    this.clearIntervals = this.clearIntervals.bind(this)
  }

  clearIntervals() { this.intervals.forEach(clearInterval) }

  componentWillUnmount() { this.clearIntervals() }

  componentDidMount() {
    this.intervals.push(setInterval(() => {
      let limit = this.rouletteText.length - 1
      let activeIndex = this.state.rouletteActiveIndex
      if (activeIndex == limit) { activeIndex = 0 }
      else { activeIndex++ }
      this.setState({ rouletteActiveIndex: activeIndex })
    }, 2000))
  }

  render() {
    let my = this

    return (
      <div className="home-banner-wrapper">
        <h1 className="t-h1">
          <span>Software that simplifies</span>
          <span className="home-rotating-wrapper">
            <span className="home-static-text">data &#8203;</span>
            <span className="home-rotating-text">
            {
              this.rouletteText.map((item, i) => (
                <span key={i}
                  className={my.state.rouletteActiveIndex == i ? 'roulette-active' : 'roulette-inactive'}>
                  {item}
                </span>
              ))
            }
            </span>
          </span>
        </h1>
      </div>
    )
  }
}

const platformCardsData = [
  {
    logo: require("assets/images/distribute-logo.png"),
    text: 'Unlock the value of your data',
    link: '/pricing-distribute',
    img: require("assets/images/browser-distribute.svg"),
    buttonLink: '/platform-distribute',
    containerClass: 'platform-card-distribute',
    logoClass: 'logo-platform-distribute'
  },
  {
    logo: require("assets/images/acquire-logo.png"),
    text: 'Access the data you need',
    link: '/pricing-acquire',
    img: require("assets/images/browser-acquire.svg"),
    buttonLink: '/platform-acquire',
    containerClass: 'platform-card-acquire',
    logoClass: 'logo-platform-acquire'
  },
]
class HomePlatform extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hoveredIndex: -1,
      clickedIndex: -1
    }

    this.handleHover = this.handleHover.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleHover(i = -1) {
    this.state.hoveredIndex === -1 ?
      this.setState({ hoveredIndex: i })
      : this.setState({ hoveredIndex: -1 })
  }

  handleClick(i = -1) {
  this.state.clickedIndex === -1 ?
      this.setState({ clickedIndex: i })
      : this.setState({ clickedIndex: -1 })
  }

  render() {
    // console.log(this.state)
    
    return (
      <div className="home-platform-wrapper">
        <p className="t-h4 t-uppercase">Our Platforms</p>

        {platformCardsData.map((card, i) => (
          <div className={
            classNames("platform-card-holder", card.containerClass, {
              'hovered': this.state.hoveredIndex === i,
              'clicked': this.state.clickedIndex === i && this.state.hoveredIndex === i,
            })
          } key={i}>
            <div className="card-holder-info">
              <img
                className={classNames("logo-platform", card.logoClass)}
                src={card.logo}
                alt="Logo"
              />
              <p className="t-header-sm">{card.text}</p>
              <div className="btn-platform-wrapper">
                <Link to={card.buttonLink} 
                  className="btn btn-lg btn-wob"
                  onMouseEnter={() => this.handleHover(i)}
                  onMouseLeave={() => this.handleHover()}
                  onMouseDown={() => this.handleClick(i)}
                  onMouseUp={() => this.handleClick()}
                >How it works</Link>
                <Link to={card.link} className="t-sub2 t-uppercase a-blue">
                  Features &amp; Pricing
                </Link>
              </div>
            </div>
            <div className="card-holder-img">
              <div className="browser-top">
                <img src={require('../assets/images/browser-top.svg')} alt="browser buttons" />
              </div>
              <div className="browser-content">
                <img src={card.img} alt="browser image" />
              </div>              
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const solutionCardsData = [
  {
    category: 'Data Science',
    content: 'Build better models',
    link: '/data-science'
  },
  {
    category: 'Data Engineering',
    content: 'Simplify infrastructure',
    link: '/data-engineering'
  },
  {
    category: 'Marketing',
    content: 'Maximize engagement',
    link: '/marketing'
  },
  {
    category: 'Product Management',
    content: 'Spark innovation',
    link: '/product-management'
  },
  {
    category: 'Partnerships',
    content: 'Centralize your relationships',
    link: '/partnerships'
  },
  {
    category: 'Sales',
    content: 'Streamline monetization',
    link: '/sales'
  },
  {
    category: 'Business Intelligence',
    content: 'Make better informed decisions',
    link: '/business-intelligence'
  },
  {
    category: 'Legal',
    content: 'Simplify compliance',
    link: '/legal'
  }
]

class HomeSolution extends Component {
  render() {
    return (
      <div className="home-solution-wrapper">
        <div className="solution-title-wrapper">
          <p className="t-h1 solution-title">
            Designed to help teams across industries.
          </p>
        </div>
        <div className="our-solution-wrapper">
          <div className="solution-holder">
            <p className="solution-text t-header-sm">
              Data is essential for all modern business. Why then, is data still
              hard to access and use effectively? Narrative asked this question
              and developed solutions that work for your team so you can achieve
              your goals.
            </p>
            <div className="solution-card-holder">
              {
                solutionCardsData.map((card, i) => (
                  <Link to={'/solution' + card.link} key={i} className={
                    classNames("solution-cards", {
                      'card-margin': i % 2 === 0
                    })
                  }>
                    <div to="/solution" className="t-h4 t-uppercase">
                      {card.category}
                    </div>
                    <div className="t-body-sm">{card.content}</div>
                    <div className="arrow-right">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>                    
                  </Link>
                ))
              }
            </div>
          </div>
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
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="homepage">
          <HomeBanner />
          <HomePlatform />
          <HomeSolution />
          <Perspectives cards={perspectivesCards} />
        </div>
        <CallToAction pretitle="Get Started"
          title="We’d love to show you the impact Narrative can have on your business."
        />
      </div>
    )
  }
}
