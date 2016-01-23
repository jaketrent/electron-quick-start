import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import { Link } from 'react-router'
import React, { Component } from 'react'

import * as actions from './actions'
import * as directoryUtils from './directory'
import * as fileUtils from './file'
import styles from './index.css'

@connect([], [actions])
@autobind
export default class Browse extends Component {
  handleChooseDirectory(evt) {
    const f = evt.target.files.item(0)
    this.props.browse.setDirectory(directoryUtils.create(f))
  }
  handleChooseFiles(evt) {
    const fileList = evt.target.files
    const files = []
    for (let i = 0; i < fileList.length; ++i) {
      const f = fileList.item(i)
      files.push(fileUtils.create(f))
    }
    this.props.browse.setFiles(files)
  }
  handleChooseDestination(evt) {
    const f = evt.target.files.item(0)
    this.props.browse.setDestination(directoryUtils.create(f))
  }
  setDirectoryAttr(input) {
    if (input && typeof input.setAttribute === 'function')
      input.setAttribute('webkitdirectory', 'webkitdirectory')
  }
  render() {

    return (
      <div>
        <div className={styles.container}>
          <h2>Find images</h2>
          <form>
            <label htmlFor="directory">
              <div>Select Directory</div>
              <input type="file"
                     id="directory"
                     multiple="multiple"
                     ref={this.setDirectoryAttr}
                     placeholder="Choose Directory"
                     onChange={this.handleChooseDirectory} />
            </label>
            <label htmlFor="files">
              <div>Select Files</div>
              <input type="file"
                     id="files"
                     multiple="multiple"
                     accept="image/*"
                     placeholder="Choose Files"
                     onChange={this.handleChooseFiles} />
             </label>
            <label htmlFor="destination">
              <div>Select Destination</div>
                <input type="file"
                       id="destination"
                       ref={this.setDirectoryAttr}
                       placeholder="Choose Directory"
                       onChange={this.handleChooseDestination} />
             </label>
          </form>

          <Link to="filter">Go to filter</Link>
        </div>
      </div>
    )
  }
}
