import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-static'
//
import classNames from 'classnames'
import debounce from 'lodash.debounce'
//
import LogoDistribute from '../assets/jsx/logo-distribute'
import LogoAcquire from '../assets/jsx/logo-acquire'

const solutionRevealCards = [
  {
    title: 'Data Science',
    link: '/data-science'
  },
  {
    title: 'Data Engineering',
    link: '/data-engineering'
  },
  {
    title: 'Marketing',
    link: '/marketing'
  },
  {
    title: 'Product Management',
    link: '/product-management'
  },
  {
    title: 'Partnerships',
    link: '/partnerships'
  },
  {
    title: 'Sales',
    link: '/sales'
  },
  {
    title: 'Business Intelligence',
    link: '/business-intelligence'
  },
  {
    title: 'Legal',
    link: '/legal'
  }
]
export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      solutionHover: false,
      platformHover: false,
      mobileNav: false,
      platformShow: false,
      solutionShow: false,
      scrollDistance: 0
    }

    this.dropdownHoverIn = this.dropdownHoverIn.bind(this)
    this.hidePlatformSolution = this.hidePlatformSolution.bind(this)
    this.dropdownHoverInSolution = this.dropdownHoverInSolution.bind(this)
    this.navbarToggle = this.navbarToggle.bind(this)
    this.navbarplatform = this.navbarplatform.bind(this)
    this.navbarSolution = this.navbarSolution.bind(this)
    this.toggleVisibility(this.props.location.pathname)

    this.props.history.listen((location, action) => {
      this.toggleVisibility(location.pathname)
    })
  }

  toggleVisibility(pathname) {
    if (typeof document !== 'undefined') {
      pathname.includes("login")
        ? document.querySelectorAll("body")[0].classList.add("noHeaderFooter")
        : document
            .querySelectorAll("body")[0]
            .classList.remove("noHeaderFooter")
    }
  }

  navbarplatform = () => {
    this.setState(state => ({
      platformShow: !state.platformShow
    }))
  }

  navbarSolution = () => {
    this.setState(state => ({
      solutionShow: !state.solutionShow
    }))
  }

  navbarToggle() {
    this.setState(state => ({
      mobileNav: !state.mobileNav
    }))
  }

  toggleSolutionDropdown = () => {
    this.setState(state => ({
      solutionHover: !state.solutionHover,
      platformHover: false,
    }))
  }

  togglePlatformDropdown = () => {
    this.setState(state => ({
      platformHover: !state.platformHover,
      solutionHover: false,
    }))
  }

  //dropdown hover
  dropdownHoverIn() {
    this.setState({
      solutionHover: false,
      platformHover: true,
    })
  }

  dropdownHoverInSolution() {
    this.setState({
      solutionHover: true,
      platformHover: false,
    })
  }

  hidePlatformSolution() {
    this.setState({
      solutionHover: false,
      platformHover: false,
    })
  }

  componentDidUpdate() {
    if (typeof window !== 'document') {
      if (this.state.mobileNav) {
        document.querySelectorAll("body")[0].classList.add("constricted")
      } else {
        document.querySelectorAll("body")[0].classList.remove("constricted")
      }
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', debounce(() => {
        this.setState({ scrollDistance: window.pageYOffset })
      }, 1, false))
    }
  }

  render() {
    // console.log(this.state)

    return (
      <div className="header-wrapper-outer">
        <div className={classNames("header-wrapper", {
          'white': this.state.platformHover || this.state.solutionHover
        })}>
          <div className={classNames("header", {
          'no-shadow': this.state.platformHover || this.state.solutionHover,
          'fixed': this.state.scrollDistance > 0
        })}>
            <nav className="nav-lg">
              <div className="nav-link">
                <div className="nav-logo">
                  <Link to="/">
                    <img
                      src={require("assets/images/narrative-logo.svg")}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <ul className="menu">
                  <li className="dropdown-menu-platform" 
                    onMouseEnter={this.togglePlatformDropdown}
                     >
                    <Link className="t-body-sm test">
                      Platforms
                    </Link>
                    <div className={classNames('arrow-down', {
                      'up': this.state.platformHover
                    })}>
                      <img src={require("../assets/images/icon-down-caret-sm.svg")} alt="caret" />
                    </div>
                  </li>
                  <li className="dropdown-menu-solution" 
                    onMouseEnter={this.toggleSolutionDropdown} >
                    <div className="t-body-sm">
                      Solution
                    </div>
                    <div className={classNames('arrow-down', {
                      'up': this.state.solutionHover
                    })}>
                      <img src={require("../assets/images/icon-down-caret-sm.svg")} alt="caret" />
                    </div>
                  </li>
                  <li onMouseEnter={this.hidePlatformSolution}>
                    <Link to="/pricing-distribute" className="t-body-sm">
                      Pricing
                    </Link>
                  </li>
                  <li onMouseEnter={this.hidePlatformSolution}>
                    <Link to="/blog" className="t-body-sm">
                      Perspectives
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-login">
                <Link to="/login">
                  <button className="btn btn-sm btn-bow">Login</button>
                </Link>
                <Link to="/get-started">
                  <button className="btn btn-sm btn-wob">Get Started</button>
                </Link>
              </div>
            </nav>

            <div className="navbar-mobile">
              <div className="menu-wrapper">
                <div className="nav-logo">
                  <Link to="/" onClick={this.state.mobileNav ? this.navbarToggle : null}>
                    <img
                      src={require("assets/images/narrative-logo.svg")}
                      alt="Logo"
                    />
                  </Link>
                </div>

                <div className="menu-icon-wrapper">
                  <div className={classNames("menu-burger", {
                    active: this.state.mobileNav
                  })}
                    onClick={this.navbarToggle}>
                    <i></i><i></i><i></i>
                  </div>
                </div>
              </div>

              <div className={classNames("nav-sm-wrapper", {
                    shadow: this.state.mobileNav
                  })}>
                <nav className={classNames("nav-sm", {
                    show: this.state.mobileNav
                  })}>
                  <div className="nav-link">
                    <ul className="menu-sm">
                      <li
                        className="dropdown-menu-platform-mobile"
                        onClick={this.navbarplatform}
                      >
                        <div className="platform-menu-wrapper">
                          <div className="t-body-sm test">Platforms</div>
                          <div className={
                            classNames('arrow-down', {
                              'up': this.state.platformShow
                            })
                          }>
                            <img src={require("../assets/images/icon-down-caret-sm.svg")} alt="caret" />
                          </div>
                        </div>
                        <div
                          className={classNames("mobile-hover-platform", {
                            show: this.state.platformShow
                          })}
                        >
                          <div className="solution-title-holder-mobile">
                            <p className="t-header-nav">Platforms</p>
                            <p className="t-header-sm">
                              One-liner about the platforms will go here and be, at
                              most, two lines longs.
                            </p>
                          </div>

                          <div className="platform-hover-holder">
                            <div className="platform-hover-btn-container">
                              <Link to="/platform-distribute" 
                                className="platform-hover-btn-wrapper platform-btn-distribute"
                                onClick={this.navbarToggle}>
                                <LogoDistribute />                 
                              </Link>
                              <Link to="/platform-acquire" 
                                className="platform-hover-btn-wrapper platform-btn-acquire"
                                onClick={this.navbarToggle}>
                                <LogoAcquire />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className="dropdown-menu-solution-mobile"
                        onClick={this.navbarSolution}
                      >
                        <div className="solution-menu-wrapper">
                          <div className="t-body-sm">
                            Solution
                          </div>
                          <div className={
                            classNames('arrow-down', {
                              'up': this.state.solutionShow
                            })
                          }>
                            <img src={require("../assets/images/icon-down-caret-sm.svg")} alt="caret" />
                          </div>
                        </div>
                        <div
                          className={classNames("mobile-hover-solution", {
                            show: this.state.solutionShow
                          })}
                        >
                          <div className="solution-title-holder-mobile">
                            <p className="t-header-nav">Solutions</p>
                            <p className="t-header-sm">
                              Narrative works across industries.
                            </p>
                          </div>

                          <div className="solution-info-holder-mobile">
                            {solutionRevealCards.map((card, i) => (
                              <Link to={'/solution' + card.link}
                                className="solution-info-mobile"
                                onClick={this.navbarToggle}
                                key={i}>
                                <span className="t-header-sm" >
                                  {card.title}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="/pricing-distribute" className="t-body-sm" onClick={this.navbarToggle}>
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="t-body-sm" onClick={this.navbarToggle}>
                          Perspectives
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="nav-login">
                    <Link to="/login">Login</Link>
                    <Link to="/get-started" onClick={this.navbarToggle}>Get Started</Link>
                  </div>
                </nav>
              </div>

            </div>
          </div>
        </div>
        <div className={classNames("generic-hover-wrapper platform-hover-wrapper", {
            'hovered': this.state.platformHover
          })}
          onMouseEnter={this.dropdownHoverIn}
          onMouseLeave={this.hidePlatformSolution}>
          <div className="platform-hover-info-container">
            <div className="platform-hover-holder-title">
              <p className="platform-hover-title t-header-nav">Platforms</p>
              <p className="t-body-sm">
                One-liner about the platforms will go here and be, at most, two
                lines longs.
              </p>
            </div>
            <div className="platform-hover-holder">
              <div className="platform-hover-btn-container">
                <Link to="/platform-distribute" className="platform-hover-btn-wrapper platform-btn-distribute"
                onClick={this.hidePlatformSolution}
                >
                  <LogoDistribute />
                  <p className="t-body-sm platform-hover-btn-text">
                    All the tools you need to maximize the value of your data,
                    in one place.
                  </p>
                </Link>
                <Link to="/platform-acquire" className="platform-hover-btn-wrapper platform-btn-acquire"
                onClick={this.hidePlatformSolution}>
                  <LogoAcquire />
                  <p className="t-body-sm platform-hover-btn-text">
                    Single integration point and centralized management.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames("generic-hover-wrapper solution-hover-wrapper", {
            'hovered': this.state.solutionHover
          })}
          onMouseEnter={this.dropdownHoverInSolution}
          onMouseLeave={this.hidePlatformSolution}
        >
          <div className="platform-hover-info-container">
            <div className="solution-title-holder">
              <p className="solution-title t-header-nav">Solutions</p>
              <p className="solution-subtitle t-body-sm">
                Narrative works across industries.
              </p>
            </div>
            <div className="solution-info-wrapper">
              <div className="solution-info-holder">
                {solutionRevealCards.map((card, i) => (
                  <Link to={'/solution' + card.link} className="solution-info" 
                  onClick={this.hidePlatformSolution}
                  key={i}>
                    <div className="t-header-sm">
                      {card.title}
                    </div>
                  </Link>  
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
