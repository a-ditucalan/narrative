import React, { Component } from 'react'
//
import Card from '../reusables/card'

const perspectivesCards = [
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

export default class ThankYou extends Component {
  render() {
    return (
      <div className="thanks">
        <div className="thanks-text">
          <div className="t-h1">Thanks!</div>
          <div className="t-header-md">We'll be in touch soon!</div>
          <div className="t-header-sm">
            <div>Get to know more about Narrative and our thoughts on the</div>
            <div>technology and business of data in our blog.</div>
          </div>
        </div>
        <div className="thanks-perspectives-title">
          <img src={require('../assets/images/narrative-icon.svg')} alt="Narrative Icon" />
          <span className="t-header-lg">Perspectives</span>
        </div>
        <BlogCards cards={perspectivesCards} />
      </div>
    )
  }
}