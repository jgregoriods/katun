import React, { Component } from 'react';

export default class GlyphButtons extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn glyph-btn mr-1 border-0 shadow-sm"
          name="increment"
          id={this.props.index}
          onClick={this.props.onClick}
        >&#x25B2;</button>
        <button
          type="button"
          className="btn glyph-btn border-0 shadow-sm"
          name="decrement"
          id={this.props.index}
          onClick={this.props.onClick}
        >&#x25BC;</button>
      </div>
    );
  }
}