import React, { Component } from 'react'
import { Link } from 'react-static'
//
import HeroCard from '../reusables/hero-card'
import Card from '../reusables/card'
import CallToAction from '../reusables/cta'
import Newsletter from '../reusables/newsletter'
class BlogCards extends Component {
  render() {
    const cards = this.props.cards

    return (
      <div className="content-cards">
        {
          cards.map((card, i) => (
            <Card cardItem={card} key={i}/>
          ))
        }          
      </div> 
    )
  }
}

const blogHeroCardData = {
  img: require('../assets/images/blog-hero-laptop.jpg'),
  tag: 'Technology',
  date: '12/02/18',
  title: 'Blog headline goes here lorem ipsum dolor sit amet',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
  author: 'Nick Jordan',
  position: 'CEO, Narrative'
}

const blogPerspectivesCards = [
  {
    img: require('../assets/images/perspectives-card-tablet.jpg'),
    title: 'Blog headline goes here lorem ipsum dolor',
    tags: ['Business']
  },
  {
    img: require('../assets/images/perspectives-card-code.jpg'),
    title: 'Blog headline goes here lorem ipsum dolor',
    tags: ['Business']
  },
  {
    img: require('../assets/images/perspectives-card-meeting.jpg'),
    title: 'Blog headline goes here lorem ipsum dolor',
    tags: ['Business']
  },
  {
    img: require('../assets/images/perspectives-card-watch.jpg'),
    title: 'Blog headline goes here lorem ipsum dolor',
    tags: ['Business']
  },
  {
    img: require('../assets/images/perspectives-card-glasses.jpg'),
    title: 'Blog headline goes here lorem ipsum dolor',
    tags: ['Business']
  },
  {
    img: require('../assets/images/perspectives-card-mac.jpg'),
    title: 'Blog headline goes here lorem ipsum dolor',
    tags: ['Business']
  },
]
export default class BlogPerspectives extends Component { 
  render() {
    return (
      <div className="blog">
        <div className="blog-gray-bg"></div>
        <div className="blog-header">
          <div className="blog-perspectives-title">
            <img src={require('../assets/images/narrative-icon.svg')} alt="Narrative Icon" />
            <span className="t-h1">Perspectives</span>
          </div>
          <div className="t-header-sm">Inside the technology and business of data.</div>
        </div>
        
        <HeroCard data={blogHeroCardData} />
        
        <div className="blog-cards-wrapper">
          <BlogCards cards={blogPerspectivesCards} />
        </div>

        <Newsletter />

        <div className="blog-all-cards">
          <BlogCards cards={blogPerspectivesCards} />
          <div className="load-more-holder">
            <button className="btn btn-lg btn-wob btn-more btn-min-width">Load More</button>
          </div>
        </div>

        <CallToAction pretitle='Get In Touch'
          title="We’d love to hear your thoughts on data’s impact on technology and business."
          call={false}
        />
      </div>
    )
  }
}