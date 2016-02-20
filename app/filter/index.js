import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import { Link } from 'react-router'
import React from 'react'

import ActionButton from '../common/components/action-button'
import * as actions from './actions'
import BackButton from '../common/components/back-button'
import * as browseActions from '../browse/actions'
import FilesIndex from './files-index'
import FilterControls from './filter-controls'
import FilterPageHeader from './filter-page-header'
import Image from './image'
import ImageLayout from './image-layout'
import FilterPageLayout from './filter-page-layout'
import { selector as browse } from '../browse/reducer'
import { selector as filter } from './reducer'
import useShortcuts from './use-shortcuts'

@connect([browse, filter], [actions, browseActions])
@autobind
export default class FilterPageContainer extends React.Component {
  componentDidMount() {
    if (window)
      window.addEventListener('keyup', useShortcuts)
  }
  componentWillUnmount() {
    if (window)
      window.removeEventListener('keyup', useShortcuts)
  }
  advance(direction) {
    this.props.filter.setActiveIndex(this.props.filter.activeIndex + direction)
  }
  renderCenterControls() {
    return [
      <FilterControls isMarkedKeep={this.props.filter.isMarkedKeep(this.props.filter.activeIndex)}
                      isMarkedDestroy={this.props.filter.isMarkedDestroy(this.props.filter.activeIndex)}
                      key="controls"
                      onPrev={this.props.filter.prev}
                      onKeep={this.props.filter.markKeep}
                      onDestroy={this.props.filter.markDestroy}
                      onNext={this.props.filter.next} />,
      <FilesIndex activeIndex={this.props.filter.activeIndex}
                  files={this.props.browse.files}
                  isMarkedDestroy={this.props.filter.isMarkedDestroy}
                  isMarkedKeep={this.props.filter.isMarkedKeep}
                  key="index" />
    ]
  }
  renderMeta(activeFile) {
    return [
      `${this.props.filter.activeIndex + 1} of ${this.props.browse.files.length}`,
      activeFile.name
    ]
  }
  renderExport() {
    if (this.props.filter.getToKeepFiles(this.props.browse.files).length > 0)
      return <ActionButton to="/export">Finalize Export</ActionButton>
  }
  render() {
    const activeFile = this.props.browse.getFile(this.props.filter.activeIndex)
    return (
      <FilterPageLayout>
        <FilterPageHeader center={this.renderCenterControls()}
                          left={<BackButton to="/" />}
                          right={this.renderExport()}/>

        <ImageLayout meta={this.renderMeta(activeFile)}>
          <Image file={activeFile} />
        </ImageLayout>
      </FilterPageLayout>
    )
  }
}
