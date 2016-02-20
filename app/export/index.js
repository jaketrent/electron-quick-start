import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import { Link } from 'react-router'
import React from 'react'

import ActionButton from '../common/components/action-button'
import * as actions from './actions'
import BackButton from '../common/components/back-button'
import CopySummary from './copy-summary'
import ExportPageHeader from './export-page-header'
import ExportPageLayout from './export-page-layout'
import ExportSummary from './export-summary'
import OpenInFinder from './open-in-finder'
import { selector as browse } from '../browse/reducer'
import { selector as exportSelector } from './reducer'
import { selector as filter } from '../filter/reducer'

@connect([browse, exportSelector, filter], [actions])
@autobind
export default class Export extends React.Component {
  getToKeepCount() {
    return this.props.filter.toKeep.length
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
        <ExportPageHeader>
          <BackButton to="/filter" />
        </ExportPageHeader>

        <ExportPageLayout>

          <ExportSummary srcCount={this.props.browse.files.length}
                         srcDirectory={this.props.browse.directory.shortPath}
                         destinationCount={this.getToKeepCount()}
                         destinationDirectory={this.props.browse.destination.shortPath} />

          <ActionButton onClick={this.handleCopy}>Copy to new location</ActionButton>

          <OpenInFinder target={this.props.browse.destination.path} />

          <CopySummary errors={errorFiles}
                       successes={successFiles} />

        </ExportPageLayout>

      </div>
    )
  }
}
