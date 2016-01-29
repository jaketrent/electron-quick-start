import autobind from 'autobind-decorator'
import React from 'react'
import styleable from 'react-styleable'

import css from './browse-directory.css'

const { func, string } = React.PropTypes

@styleable(css)
@autobind
export default class BrowseDirectory extends React.Component {
  static propTypes = {
    name: string.isRequired,
    onChange: func.isRequired
  };
  setDirectoryAttr(input) {
    if (input && typeof input.setAttribute === 'function')
      input.setAttribute('webkitdirectory', 'webkitdirectory')

    this._input = input
  }
  handleClick() {
    this._input.click()
  }
  render() {
    return (
      <label htmlFor={this.props.name} className={this.props.css.root}>
        <button className={this.props.css.btn} onClick={this.handleClick}>Find a directory</button>
        <input className={this.props.css.input}
               id={this.props.name}
               multiple="multiple"
               name={this.props.name}
               onChange={this.props.onChange}
               ref={this.setDirectoryAttr}
               type="file" />
      </label>
    )
  }
}
