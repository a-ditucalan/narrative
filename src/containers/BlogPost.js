import React, { Component } from 'react'
import { Link } from 'react-static'
//
import classNames from 'classnames'
import debounce from 'lodash.debounce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import imagesloaded from 'imagesloaded'
//
import Newsletter from '../reusables/newsletter'
import Perspectives from '../reusables/perspectives'
import CallToAction from '../reusables/cta'
import LogoPercent from '../assets/jsx/logo-percent'

class BlogPostHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      endDistance: 0,
      scrollDistance: 0
    }

    this.onScroll = this.onScroll.bind(this)
  }

  onScroll() {
    if (typeof window !== 'undefined') { 
      this.setState({ scrollDistance: window.pageYOffset })
    }
  }

  componentDidUpdate() {
    if (!this.state.endDistance) {
      this.setState({ endDistance: this.props.endDistance})
    }    
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll, false)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') { 
      window.removeEventListener('scroll', this.onScroll, false)
    }
  }

  render() {
    const title = this.props.title
    let progress = 0

    this.state.endDistance
      ? (progress =
          (this.state.scrollDistance / this.state.endDistance).toFixed(2) * 100)
      : null

    console.log(this.state.endDistance)

    // console.log(this.state)
    // console.log(progress)

    return (
      <div className={classNames("post-header-wrapper", {
        'active': this.state.scrollDistance > 0
      })}>
        <div className="post-header">
          <div className="post-header-main">
            <div className="post-header-title t-header-sm">
              <div className="post-header-logo">
                <Link to="/">
                  <LogoPercent />
                </Link>
              </div>
              <div>{title}</div>
            </div>
            <Link className="post-link-back t-sub1 a-blue" to="/blog">
              Back to Perspectives
            </Link>
          </div>
          <div className="post-progress-container">
            <div
              className="post-progress-scroll"
              style={{
                width: `${progress}%`
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

BlogPostHeader.defaultProps = {
  title: "Long article headline about all things data goes here"
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

export default class BlogPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollDistance: 0,
      shareDistance: 0,
      endDistance: 0
    }

    this.setDistances = this.setDistances.bind(this)
    this.resetDistances = this.resetDistances.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.onResize = this.onResize.bind(this)

    this.endOfPostRef = React.createRef()
    this.sharePostRef = React.createRef()
    this.checkImagesRef = React.createRef()
  }

  resetDistances() {
    this.setState({ 
      scrollDistance: 0,
      shareDistance: 0,
      endDistance: 0
    })
  }

  setDistances() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      let headerHeight = document.getElementsByClassName('post-header-wrapper')[0].offsetHeight
      let targetDistance = this.sharePostRef.current.getBoundingClientRect().top +
      window.pageYOffset - headerHeight - 56

      let endMaxDistance = this.endOfPostRef.current.getBoundingClientRect().top + window.pageYOffset - headerHeight

      this.setState({ 
        shareDistance: targetDistance,
        endDistance: endMaxDistance
      })
    }
  }

  onScroll() {
    if (typeof window !== 'undefined') { 
      this.setState({ scrollDistance: window.pageYOffset })
    }
  }

  onResize() {
    debounce(() => {
      this.resetDistances()
      this.setDistances()
    }, 200, true)
  }

  componentDidUpdate() {
    if (!this.state.shareDistance) {
      this.setDistances()
    }
  }

  componentDidMount() {
    this.setDistances()
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll, false)
      window.addEventListener('resize', this.onResize, false)
    }

    imagesloaded(this.checkImagesRef, (instance) => {
      this.resetDistances()
      this.setDistances()
    })
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll, false)
      window.removeEventListener("resize", this.onResize, false)
    }
  }

  render() {
    let absoluteTopShare = 0
    if (this.state.scrollDistance > this.state.shareDistance) {
      absoluteTopShare = this.state.scrollDistance - this.state.shareDistance
    }

    let progress = 0

    this.state.endDistance
      ? (progress =
          (this.state.scrollDistance / this.state.endDistance).toFixed(2) * 100)
      : null

    return (
      <div className="post" ref={this.checkImagesRef}>
        <BlogPostHeader endDistance={this.state.endDistance} />

        <div className="post-intro">
          <div className="post-lead">
            <div className="post-title t-h2">
              Long article headline about all things data goes here
            </div>
            <div className="post-byline t-body-sm">
              <div className="byline-author">By Nick Jordan</div>
              <div className="byline-position">CEO, Narrative</div>
            </div>
          </div>

          <div className="post-tag-wrapper">
            <div className="post-date t-body-sm">December 2, 2018</div>
            <div className="post-tag">
              <div className="tag-title">Filed under:</div>
              <div className="t-tags">Technology</div>
            </div>
          </div>
        </div>

        <div className="post-body-actual">
          <div className="post-share-wrapper">
            <div className={classNames('post-share', {
                'share-fixed': this.state.scrollDistance > this.state.shareDistance && progress < 108,
                'bottom-fixed': progress >= 108
              })}
              ref={this.sharePostRef}
              style={{top: `${absoluteTopShare}px`}}>
              <div className="share-word">Share</div>
              <div className="share-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="share-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="share-icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
              <div className="share-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
          </div>
          <div className="post-content">
            
            <div className="post-body t-body-lg">
              <img className="float-right"
                  src={require("../assets/images/post-img-float-stats.jpg")}
                  alt="" />
              <div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                  sit amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem.
                </p>
              </div>
              <div>
                <img
                  src={require("../assets/images/post-img-point.jpg")}
                  alt=""
                />
              </div>
              <div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est.
                </p>
              </div>
              <div>
                <p>
                  Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore
                  et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                  autem vel eum iure reprehenderit qui in ea voluptate velit esse
                  quam nihil molestiae consequatur, vel illum qui dolorem eum
                  fugiat quo voluptas nulla pariatur?
                </p>
              </div>
            </div>
          </div>

          <div className="newsletter-wrapper">
            <Newsletter />
          </div>

          <div className="post-content">
            <div className="post-body t-body-lg">
              <img className="float-right"
                src={require("../assets/images/post-img-float-laptop.jpg")}
                alt="" />
              <div>
                <h4 className="t-h4">Header for an awesome list</h4>
              </div>
              <div>
                <ul>
                  <li>Check out this list</li>
                  <li>It’s probably the best list on the internet</li>
                  <li>Would you just look at this list</li>
                  <li>It’s a super important list</li>
                  <li>Let’s end the example list here</li>
                </ul>
              </div>
              <div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                  sit amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem.
                </p>
              </div>
              <div>
                <h4 className="t-h4">
                  Step 1: a header for a step-by-step thing
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <h4 className="t-h4">Step 2: lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <h4 className="t-h4">Step 3: more latin text</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <h4 className="t-h4">To conclude our blog post</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="post-after t-body-sm">
              <div className="post-byline">
                <div className="byline-author">By Nick Jordan</div>
                <div className="byline-position" ref={this.endOfPostRef}>CEO, Narrative</div>
              </div>
            </div>
          </div>
        </div>
        <Perspectives cards={perspectivesCards} title="More articles" />
        <CallToAction pretitle="Get In Touch"
          title="We’d love to hear your thoughts on data’s impact on technology and business."
          call={false}
        />
      </div>
    )
  }
}
