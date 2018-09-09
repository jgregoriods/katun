import React, { Component } from 'react';
import { connect } from 'react-redux';

import GlyphButtons from './glyph_buttons';
import Glyph from '../components/glyph';

class GlyphPanel extends Component {
  render() {
    const longCount = this.props.mayaDate.getLongCount();
    const tzolkin = this.props.mayaDate.getTzolkin();
    const haab = this.props.mayaDate.getHaab();
    const lordOfNight = this.props.mayaDate.getLordOfNight();

    return (
      <div className="mt-1">
        <div className="row">
          <div className="col">
            <GlyphButtons index={0} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={0} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={1} />
          </div>
          <div className="col">
            <GlyphButtons index={1} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GlyphButtons index={2} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={2} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={3} />
          </div>
          <div className="col">
            <GlyphButtons index={3} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GlyphButtons index={4} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={4} />
          </div>
          <div className="col">
            <Glyph category="tzolkin" tzolkin={tzolkin} />
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <Glyph category="lordOfNight" lordOfNight={lordOfNight} />
          </div>
          <div className="col">
            <Glyph category="haab" haab={haab} />
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mayaDate: state.mayaDate
  };
}

export default connect(mapStateToProps)(GlyphPanel);