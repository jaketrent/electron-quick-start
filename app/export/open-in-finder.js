import React from 'react'
import { spawn } from 'child_process'
import styleable from 'react-styleable'

import css from './open-in-finder.css'

const { string } = React.PropTypes

function handleClick(props) {
  spawn('open', [ props.target ])
}

function OpenInFinder(props) {
  return (
    <button onClick={e => handleClick(props)} className={props.css.root}>Open in Finder</button>
  )
}

OpenInFinder.propTypes = {
  target: string.isRequired
}

export default styleable(css)(OpenInFinder)
