import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import Image from './image'
import IsMarked from './is-marked'
import { Link } from 'react-router'
import React from 'react'

import * as actions from './actions'
import * as browseActions from '../browse/actions'
import { selector as browse } from '../browse/reducer'
import { selector as filter } from './reducer'

@connect([browse, filter], [actions, browseActions])
@autobind
export default class FilterPage extends React.Component {
  advance(direction) {
    this.props.filter.setActiveIndex(this.props.filter.activeIndex + direction)
  }
  render() {
    const activeFile = this.props.browse.getFile(this.props.filter.activeIndex)
    return (
      <div>
        <h2>Filter</h2>

        <Link to="/">to Browse</Link>
        <button onClick={this.advance.bind(this, -1)}>prev</button>
        <button onClick={this.advance.bind(this, 1)}>next</button>

        <button onClick={this.props.filter.markKeep.bind(null, this.props.filter.activeIndex)}>Keep</button>
        <button onClick={this.props.filter.clearMarks.bind(null, this.props.filter.activeIndex)}>Clear</button>
        <button onClick={this.props.filter.markDestroy.bind(null, this.props.filter.activeIndex)}>Destroy</button>

        <div>file {this.props.filter.activeIndex + 1} of {this.props.browse.files.length}</div>
        <div>file: {activeFile.name}</div>

        <IsMarked is={this.props.filter.isMarkedKeep(this.props.filter.activeIndex)}>Is marked for keep?</IsMarked>
        <IsMarked is={this.props.filter.isMarkedDestroy(this.props.filter.activeIndex)}>Is marked for destroy?</IsMarked>

        <Image file={activeFile} />
      </div>
    )
  }
}
