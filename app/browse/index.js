import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import { Link } from 'react-router'
import styleable from 'react-styleable'
import React, { Component } from 'react'

import * as actions from './actions'
import * as directoryUtils from './directory'
import css from './index.css'

const { func } = React.PropTypes

function setDirectoryAttr(input) {
  if (input && typeof input.setAttribute === 'function')
    input.setAttribute('webkitdirectory', 'webkitdirectory')
}

function Browse(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.panes}>
        <div className={props.css.pane}>
          <label htmlFor="directory">
            <div>Select a source directory</div>
            <input type="file"
                   id="directory"
                   multiple="multiple"
                   ref={setDirectoryAttr}
                   placeholder="Choose Directory"
                   onChange={props.onChangeSrcDir} />
          </label>
        </div>
        <div className={props.css.pane}>
          <label htmlFor="destination">
            <div>Select a destination directory</div>
              <input type="file"
                     id="destination"
                     ref={setDirectoryAttr}
                     placeholder="Choose Directory"
                     onChange={props.onChangeDestDir} />
           </label>
        </div>
      </div>

      <Link to="filter">Go to filter</Link>
    </div>
  )
}

Browse.propTypes = {
  onChangeSrcDir: func.isRequired,
  onChangeDestDir: func.isRequired
}

const StyledBrowse = styleable(css)(Browse)

@connect([], [actions])
@autobind
export default class BrowseContainer extends Component {
  handleChooseSrcDir(evt) {
    const f = evt.target.files.item(0)
    this.props.browse.setDirectory(directoryUtils.create(f))
  }
  handleChooseDestDir(evt) {
    const f = evt.target.files.item(0)
    this.props.browse.setDestination(directoryUtils.create(f))
  }
  render() {
    return (
      <StyledBrowse onChangeDestDir={this.handleChooseSrcDir}
                    onChangeSrcDir={this.handleChooseDestDir} />
    )
  }
}
