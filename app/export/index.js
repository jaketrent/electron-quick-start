import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import { Link } from 'react-router'
import React from 'react'

import * as actions from './actions'
import ImagePile from './image-pile'
import { selector as browse } from '../browse/reducer'
import { selector as exportSelector } from './reducer'
import { selector as filter } from '../filter/reducer'

@connect([browse, exportSelector, filter], [actions])
@autobind
export default class Export extends React.Component {
  getToKeepCount() {
    return this.props.filter.toKeep.length
  }
  getToDestroyCount() {
    return this.props.filter.toDestroy.length
  }
  getToUndecidedCount() {
    return this.props.browse.files.length
         - this.props.filter.toKeep.length
         - this.props.filter.toDestroy.length
  }
  handleCopy() {
    const files = this.props.filter.getToKeepFiles(this.props.browse.files)
    this.props.export.copy(files, this.props.browse.destination)
  }
  render() {
    const toKeepFiles = this.props.filter.getToKeepFiles(this.props.browse.files)
    const successFiles = this.props.export.getSuccessFiles(toKeepFiles)
    const errorFiles = this.props.export.getErrorFiles(toKeepFiles)

    return (
      <div>
        <h2>Export</h2>
        <Link to="/">to Browse</Link>
        <Link to="/filter">to Filter</Link>

        <div>Summary</div>
        <div>Keep {this.getToKeepCount()}</div>
        <div>Destroy {this.getToDestroyCount()}</div>
        <div>Undecided {this.getToUndecidedCount()}</div>

        <button onClick={this.handleCopy}>Copy to new location</button>

        <ImagePile files={toKeepFiles} />
        <h3>Successes</h3>
        <ImagePile files={successFiles} />
        <h3>Errors</h3>
        <ImagePile files={errorFiles} />
      </div>
    )
  }
}
