import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'
//
import Header from './reusables/header'
import Footer from './reusables/footer'

import './app.scss'

export default () => (
  <Router>
      <div><Header />

      <div className="content">
        <Routes />
      </div>

      <Footer />
    </div>
  </Router>
)
