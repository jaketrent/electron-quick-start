import React from 'react'
import styleable from 'react-styleable'

import css from './image-pile.css'

const { arrayOf, shape, string } = React.PropTypes

function ImagePile(props) {
  return (
    <div>
      <div>Image Pile</div>
      <ul>
        {props.files.map(f => {
          return <li>{f.name}</li>
        })}
      </ul>
    </div>
  )
}

ImagePile.propTypes = {
  files: arrayOf(shape({
    name: string.isRequired,
    path: string.isRequired
  }))
}

export default styleable(css)(ImagePile)
