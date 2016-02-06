import React from 'react'
import styleable from 'react-styleable'

import css from './image.css'

const { date, number, shape, string } = React.PropTypes

function Image(props) {
  const src = 'file://' + props.file.path
  return (
    <img className={props.css.root} src={src} alt={props.file.name} />
  )
}

Image.propTypes = {
  file: shape({
    name: string.isRequired,
    path: string.isRequired,
    type: string.isRequired,
    size: number.isRequired,
    lastModifiedDate: date
  }).isRequired
}

export default styleable(css)(Image)
