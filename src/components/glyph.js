import React, { Component } from 'react';

export default class Glyph extends Component {
  render() {
    const longCountIndices = [
      'BAKTUN',
      'KATUN',
      'TUN',
      'UINAL',
      'KIN'
    ];

    if (this.props.category === 'long-count') {
      return (
        <div>
          <img
            className="img-fluid glyph"
            src={`./img/number-${this.props.longCount[this.props.index]}.png`}
          />
          <img
            className="img-fluid glyph"
            src={`./img/${longCountIndices[this.props.index]}.png`}
          />
        </div>
      );
    } else if (this.props.category === 'tzolkin') {
      return (
        <div>
          <img
            className="img-fluid glyph"
            src={`./img/number-${this.props.tzolkin[0]}.png`}
          />
          <img
            className="img-fluid glyph"
            src={`./img/${this.props.tzolkin[1]}.png`}
          />
        </div>
      );
    } else if (this.props.category === 'haab') {
      return (
        <div>
          <img
            className="img-fluid glyph"
            src={this.props.haab[0] === 0 ? './img/chum.png' : `./img/number-${this.props.haab[0]}.png`}
          />
          <img
            className="img-fluid glyph"
            src={`./img/${this.props.haab[1]}.png`}
          />
        </div>
      );
    } else if (this.props.category === 'lordOfNight') {
      return (
        <div>
          <img
            className="img-fluid glyph"
            src={`./img/G${this.props.lordOfNight}.png`}
          />
        </div>
      )
    }
  }
}