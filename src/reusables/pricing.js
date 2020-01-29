import React, { Component } from 'react'
import { Link } from 'react-static'
//
import classNames from 'classnames'
import Collapse from 'rc-collapse'
import stickybits from 'stickybits'
//
import LogoDistribute from '../assets/jsx/logo-distribute'
import LogoAcquire from '../assets/jsx/logo-acquire'
import IconInfo from '../assets/jsx/icon-info'
//
import 'rc-collapse/assets/index.css'

const Panel = Collapse.Panel
class PricingCards extends Component {
  render() {
    const cards = this.props.cards

    return (
      <div className="pricing-cards">
        {cards.map((card, i) => (
          <Link to={card.link} className="pricing-card" key={i}>
            <div className="pricing-card-title t-h3">{card.title}</div>
            <div className="pricing-card-subtitle t-header-sm">
              {card.price}
            </div>
            <div className="pricing-card-subtext t-body-xs">{card.subtext}</div>
            <div>
              <button className="pricing-card-btn btn btn-lg btn-wob">
                {card.button}
              </button>
            </div>
            <div className="pricing-card-description t-body-sm">
              {card.description}
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

class FAQ extends Component {
  render() {
    const data = this.props.data

    return (
      <div className="faq">
        <div className="faq-title t-h3">Commonly asked questions</div>

        <Collapse accordion={true} className="faq-collapse">
          {data.map((item, i) => (
            <Panel
              key={i}
              className="t-body-sm"
              header={
                <div className="rc-collapse-custom-header">
                  <span className="t-h5">{item.header}</span>
                  <span className="caret">
                    <img src={require("../assets/images/icon-down-caret.svg")}
                      alt=""
                      className="accordion-down"
                    />
                  </span>
                </div>
              }
              headerclassName="t-h5"
              showArrow={false}
            >
              {item.content}
            </Panel>
          ))}
        </Collapse>
      </div>
    )
  }
}

class Dot extends Component {
  render() {
    return (
      <div className="dot-wrapper">
        <div className="dot-green"></div>
      </div>
    )
  }
}

class PricingTable extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      activeCategory: -1,
      activeFeature: -1,
      scrollDistance: 0,
      tierDistance: 0,
      endTableDistance: 0
    }

    this.setActiveIndex = this.setActiveIndex.bind(this)
    this.tierHeaderRef = React.createRef()
    this.endOfTableRef = React.createRef()

    this.onScroll = this.onScroll.bind(this)
  }

  setActiveIndex(i, j = -1) {
    const category = this.state.activeCategory
    const feature = this.state.activeFeature

    if (category === i && feature === j) {
      this.setState({ activeCategory: -1 })
      this.setState({ activeFeature: -1 })  
    } else {
      this.setState({ activeCategory: i })
      this.setState({ activeFeature: j })
    }
  }

  onScroll() {
    if (typeof window !== 'undefined') {
      this.setState({ 
        scrollDistance: window.pageYOffset,
        activeCategory: -1,
        activeFeature: -1
      })
    }
  }

  componentDidUpdate() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (!this.state.tierDistance && !this.state.endTableDistance) {
        let finalDistance = this.tierHeaderRef.current.getBoundingClientRect().top + window.pageYOffset - 115

        let finalTableDistance = this.endOfTableRef.current.getBoundingClientRect().top + window.pageYOffset - 115 - 50

        this.setState({ 
          tierDistance: finalDistance,
          endTableDistance: finalTableDistance
        })
      } 

      let isTierSticky = this.state.tierDistance !== 0 
      && this.state.finalTableDistance !== 0
      && this.state.scrollDistance >= this.state.tierDistance 
      && this.state.scrollDistance < this.state.endTableDistance    

      let headerEl = document.getElementsByClassName('header')[0]

      if (isTierSticky) {
        if (headerEl) {
          headerEl.style.boxShadow = '0 0 0 #fff'
        }
      } else {
        if (headerEl) {
          headerEl.style.boxShadow = ''
        }
      }
    }
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      let headerHeight = document.getElementsByClassName('header')[0].offsetHeight
      let tierHeight = this.tierHeaderRef.current.offsetHeight 

      let stickyCategoryOptions = {
        useStickyClasses: true,
        stickyBitStickyOffset: headerHeight + tierHeight + 34
      }

      stickybits('.sticky', stickyCategoryOptions)
    }

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
    const data = this.props.data
    const pricingType = this.props.pricingType
    
    let isTierSticky = 
    this.state.tierDistance !== 0 
    && this.state.finalTableDistance !== 0
    && this.state.scrollDistance >= this.state.tierDistance 
    && this.state.scrollDistance < this.state.endTableDistance 

    return (
      <div className="pricing-table-wrapper">
        <div className="pricing-pretable-wrapper">
          <div className="pricing-pretable">
            <div className="t-h3">Feature breakdown</div>
            <div className={
                classNames("pricing-tiers-wrapper", {
                  'sticky-tier': isTierSticky
                })
              } ref={this.tierHeaderRef}>
              <div className="pricing-tiers">
                <div className="pricing-logo-tier">
                  {pricingType === 'distribute' ? <LogoDistribute /> : null}
                  {pricingType === 'acquire' ? <LogoAcquire /> : null}
                </div>
                <div className="tiers-wrapper">
                <div className="tier t-h5">Basic</div>
                <div className="tier t-h5">Standard</div>
                <div className="tier t-h5">Enterprise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={
            classNames("pricing-table", {
              'allowance-top': isTierSticky
            })
          }>
          {data.map((item, i) => {
            return ( 
            <div className="table-data" key={i}>

              <div className={classNames("table-category-wrapper sticky", {
                inset: this.state.activeFeature !== -1 && this.state.activeCategory !== i
              })}>
                <div className="table-category">
                  <div className="t-h4">{item.category}</div>
                  <div className={
                      classNames("info-modal-wrapper", {
                        'inactive' : (
                          this.state.activeFeature !== -1 ? true
                            : this.state.activeCategory !== i ? true : false
                        )
                      })
                    }>
                    <div className="info-icon"
                      onClick={() => this.setActiveIndex(i)}
                    >
                      <IconInfo />
                    </div>
                    <div className="info-modal t-body-xs">
                      <div className="info-modal-content">
                        {item.description + ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'}
                      </div>
                      <div className="t-action" onClick={() => this.setActiveIndex(-1, -1)}>
                        Close
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-content-wrapper">
              {item.data.map((feature, j) => {
                return (
                <div className="table-row" key={j}>
                  <div className="table-feature-wrapper table-cell">
                    <div className="table-feature t-body-sm">{feature.feature}</div>
                    <div>
                      <div className={
                        classNames("info-modal-wrapper", {
                            'inactive': (
                              this.state.activeFeature !== j ? true
                                : this.state.activeCategory !== i ? true : false
                            )
                          })
                        }>
                        <div className="info-icon" 
                          onClick={() => this.setActiveIndex(i,j)}>
                          <IconInfo />
                        </div>
                        <div className="info-modal t-body-xs">
                          <div className="info-modal-content">
                            {feature.description + ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'}
                          </div>
                          <div className="t-action" onClick={() => this.setActiveIndex(-1, -1)}>
                            Close
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-tier table-cell t-sub1">
                    {feature.b ?
                      feature.b === true ? <Dot /> : feature.b
                      : null}
                  </div>
                  <div className="table-tier table-cell t-sub1">
                    {feature.s ?
                      feature.s === true ? <Dot /> : feature.s
                      : null}
                  </div>
                  <div className="table-tier table-cell t-sub1">
                    {feature.e ?
                      feature.e === true ? <Dot /> : feature.e
                      : null}
                  </div>
                </div>
              )})}                  
              </div>
            </div>
          )})}                      
        </div>
        <div className="end-of-table" ref={this.endOfTableRef}></div>
      </div>   
    )
  }
}

export default class Pricing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: true,
      mobileInfo: ''
    }

    this.toggleActiveTab = this.toggleActiveTab.bind(this)
    this.mobileInfoChange = this.mobileInfoChange.bind(this)
  }

  toggleActiveTab(x) {
    this.setState({ activeTab: x })
  }

  mobileInfoChange(x = '') {    
    this.setState({ mobileInfo: x })
  }

  componentDidUpdate() {
    if (typeof document !== 'undefined') {
      if (this.state.mobileInfo) {
        document.getElementsByTagName("body")[0].style.overflow = 'hidden'
      } else {
        document.getElementsByTagName("body")[0].style.overflow = ''
      }
    }
  }

  render() {
    const pricingCardsData = this.props.pricingCardsData
    const pricingTableData = this.props.pricingTableData
    const questionsData = this.props.questionsData
    const pricingType = this.props.pricingType

    let pricingDataMobile = pricingCardsData
    pricingDataMobile.map((item) => {
      item.features = []
      pricingTableData.map((category) => {
        let newObject = {}
        newObject.category = category.category
        newObject.description = category.description
        newObject.data = []

        category.data.map((feature) => {
          if (feature.hasOwnProperty(item.keyletter)) {
            newObject.data.push(feature)
          }
        })

        if (newObject.data.length > 0) {
          item.features.push(newObject)
        }    
      })
    })

    return (
      <div className={classNames("pricing", pricingType)}>
        <div className="pricing-title t-h1">Pricing</div>
        <div className="pricing-tab">
          <Link to="/pricing-distribute" className={classNames('tab', 'tab-distribute', {
            active: pricingType === 'distribute'
          })}>
            <div className="tab-logo">
              <LogoDistribute />
            </div>
            <div className="tab-subtitle t-body-sm">Unlock the value of your data.</div>
          </Link>
          <Link to="/pricing-acquire" className={classNames('tab', 'tab-acquire', {
            active: pricingType === 'acquire'
          })}>
            <div className="tab-logo">
              <LogoAcquire />
            </div>         
            <div className="tab-subtitle t-body-sm">Access the data you need.</div>
          </Link>
        </div>

        <div className="pricing-desktop-view">
          <div className="pricing-cards-border" />
          <div className="pricing-cards-wrapper">
            <PricingCards cards={pricingCardsData} />
          </div>

          <PricingTable data={pricingTableData} pricingType={pricingType}/>     

          <div className="pricing-cards-repeat">
            <div className="cards-offset-bg" />
            <PricingCards cards={pricingCardsData} />
          </div>
        </div>

        <div className="pricing-mobile-wrapper-outer">
          <div className="pricing-mobile-view">
          {
            pricingDataMobile.map((card, i) => (
              <div className="pricing-mobile-wrapper-inner" key={i}>
                <div className="pricing-mobile-card">
                  <div className="mobile-card-title t-h3">
                    {card.title}
                  </div>
                  <div className="mobile-card-price t-header-sm">
                    {card.price}
                  </div>
                  <Link to="/get-started" className="btn btn-lg btn-wob t-body-xs">{card.button}</Link>
                  <div className="mobile-card-description t-body-sm">
                    {card.description}
                  </div>
                </div>
                <div className="pricing-mobile-table">
                  {pricingDataMobile[i].features.map((cat, j) => (
                    <div className="mobile-data-wrapper" key={j}>
                      <div className="mobile-category-wrapper">
                        <div className="mobile-category t-h4">{cat.category}</div>
                        <div className="mobile-category-info mobile-info-modal" onClick={() => this.mobileInfoChange(cat.description)}>
                          <IconInfo />
                        </div>
                      </div>
                      {cat.data.map((feat, k) => (
                        <div className="mobile-feature" key={k}>
                          <div className="mobile-feature-detail">
                            <Dot />
                            <div className="t-body-sm">{feat.feature}{
                              (feat[card.keyletter] && typeof feat[card.keyletter] === 'string') ? <span>, {feat[card.keyletter]}</span> : null
                            }</div>
                            <div className="mobile-info-modal mobile-info-feature" onClick={() => this.mobileInfoChange(feat.description)}>
                              <IconInfo />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
          </div>
        </div>

        <div className={
          classNames("info-generic-modal", {
            'd-none': !this.state.mobileInfo
          })
        } 
          onClick={() => this.mobileInfoChange()}>
          <div className="info-generic-popup t-body-xs">
            <IconInfo />
            <div>{this.state.mobileInfo + ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'}
            </div>
            <div className="t-action" onClick={() => this.mobileInfoChange()}>
              Close
            </div>
          </div>          
        </div>
        <FAQ data={questionsData} />
      </div>
    )
  }
}
