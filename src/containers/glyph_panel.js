import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLongCount, updateWestern } from '../actions/index';
import GlyphButtons from '../components/glyph_buttons';
import Glyph from '../components/glyph';

class GlyphPanel extends Component {
  changeMaya = (action, index) => {
    const longCount = this.props.mayaDate.getLongCount();

    if (action === 'increment' && index !== 3 && longCount[index] < 19) {
      this.props.changeLongCount(index, longCount[index] + 1);
    } else if (action === 'increment' && index === 3 && longCount[index] < 17) {
      this.props.changeLongCount(index, longCount[index] + 1);
    } else if (action === 'decrement' && longCount[index] > 0) {
      this.props.changeLongCount(index, longCount[index] - 1);
    }
  }

  handleClick = async(event) => {
    const action = event.target.name;
    const index = +event.target.id;

    await this.changeMaya(action, index);
    this.props.updateWestern(this.props.mayaDate, this.props.constant);
  }

  render() {
    const longCount = this.props.mayaDate.getLongCount();
    const tzolkin = this.props.mayaDate.getTzolkin();
    const haab = this.props.mayaDate.getHaab();
    const lordOfNight = this.props.mayaDate.getLordOfNight();

    return (
      <div className="mt-2 mb-2">
        <div className="row">
          <div className="col">
            <GlyphButtons onClick={this.handleClick} index={0} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={0} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={1} />
          </div>
          <div className="col">
            <GlyphButtons onClick={this.handleClick} index={1} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GlyphButtons onClick={this.handleClick} index={2} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={2} />
          </div>
          <div className="col">
            <Glyph category="long-count" longCount={longCount} index={3} />
          </div>
          <div className="col">
            <GlyphButtons onClick={this.handleClick} index={3} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GlyphButtons onClick={this.handleClick} index={4} />
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
    mayaDate: state.mayaDate,
    constant: state.constant
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeLongCount: changeLongCount,
    updateWestern: updateWestern
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GlyphPanel);