import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.css'

export default class Browse extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Find images</h2>
          <input type="file" />
        </div>
      </div>
    )
  }
}
