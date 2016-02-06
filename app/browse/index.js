import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import { Link } from 'react-router'
import styleable from 'react-styleable'
import React, { Component } from 'react'

import ActionButton from '../common/components/action-button'
import * as actions from './actions'
import { selector as browse } from './reducer'
import BrowseDirectory from './browse-directory'
import * as directoryUtils from './directory'
import css from './index.css'

const { arrayOf, func, object } = React.PropTypes

function renderSrcFooter(props) {
  if (props.directory)
    return (
      <footer className={props.css.paneFooter}>
        <div>Selected directory <code className={props.css.dirName}>{props.directory.shortPath}</code></div>
        <div>Found {props.files && props.files.length} images</div>
      </footer>
    )
}

function renderDestFooter(props) {
  if (props.destination)
    return (
      <footer className={props.css.paneFooter}>
        <div>Images will be copied to <code className={props.css.dirName}>{props.destination.shortPath}</code></div>
      </footer>
    )
}

function renderContinue(props) {
  if (props.directory && props.files.length > 0 && props.destination)
    return (
      <div className={props.css.continue}>
        <ActionButton to="filter">Surf Images</ActionButton>
      </div>
    )
}

function Browse(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.panes}>
        <section className={props.css.pane}>
          <h2 className={props.css.title}>Select a source</h2>
          <BrowseDirectory name="directory" onChange={props.onChangeSrcDir} />
          {renderSrcFooter(props)}
        </section>
        <section className={props.css.pane}>
          <h2 className={props.css.title}>Select a destination</h2>
          <BrowseDirectory name="destination" onChange={props.onChangeDestDir} />
          {renderDestFooter(props)}
        </section>
      </div>
      {renderContinue(props)}
    </div>
  )
}

Browse.propTypes = {
  destination: object,
  directory: object,
  files: arrayOf(object),
  onChangeSrcDir: func.isRequired,
  onChangeDestDir: func.isRequired
}

const StyledBrowse = styleable(css)(Browse)

@connect([browse], [actions])
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
      <StyledBrowse destination={this.props.browse.destination}
                    directory={this.props.browse.directory}
                    files={this.props.browse.files}
                    onChangeDestDir={this.handleChooseDestDir}
                    onChangeSrcDir={this.handleChooseSrcDir} />
    )
  }
}
