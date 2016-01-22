import autobind from 'autobind-decorator'
import connect from 'redux-react-connect-by-name'
import Image from './image'
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

        <div>index: {this.props.filter.activeIndex}</div>
        <div>file: {activeFile.name}</div>
        <div>all files:</div>

        <ul>
          {this.props.browse.files.map((f, i) => <li key={i}>{f.name}</li>)}
        </ul>

        <Image file={activeFile} />
      </div>
    )
  }
}
