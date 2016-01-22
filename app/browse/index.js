import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import { Link } from 'react-router'
import React, { Component } from 'react'

import * as actions from './actions'
import styles from './index.css'

@connect([], [actions])
@autobind
export default class Browse extends Component {
  handleChooseDirectory(evt) {
    const f = evt.target.files.item(0)
    const dir = {
      name: f.name,
      path: f.path,
      type: 'directory',
      lastModifiedDate: f.lastModifiedDate
    }
    this.props.browse.setDirectory(dir)
  }
  handleChooseFiles(evt) {
    const fileList = evt.target.files
    const files = []
    for (let i = 0; i < fileList.length; ++i) {
      const f = fileList.item(i)
      files.push({
        name: f.name,
        path: f.path,
        type: f.type,
        size: f.size,
        lastModifiedDate: f.lastModifiedDate
      })
    }
    this.props.browse.setFiles(files)
  }
  giveCustomAttributes(input) {
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
                     id="directory"
                     multiple="multiple"
                     ref={this.giveCustomAttributes}
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
          </form>

          <Link to="filter">Go to filter</Link>
        </div>
      </div>
    )
  }
}
