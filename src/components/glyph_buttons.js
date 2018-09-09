import React, { Component } from 'react';

export default class GlyphButtons extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-info border-0 shadow-sm"
          name="increment"
          id={this.props.index}
          onClick={this.props.onClick}
        >+</button>
        <button
          type="button"
          className="btn btn-info border-0 shadow-sm"
          name="decrement"
          id={this.props.index}
          onClick={this.props.onClick}
        >-</button>
      </div>
    );
  }
}