import React, { Component, PropTypes } from 'react'
import styleable from 'react-styleable'

import css from './default.css'
import Header from '../components/header'

function DefaultLayout(props) {
  return (
    <div className={props.css.root}>
      <Header />
      {props.children}
      {
        (() => {
          if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('../containers/dev-tools')
            return <DevTools />
          }
        })()
      }
    </div>
  )
}

export default styleable(css)(DefaultLayout)
