import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLongCount, updateWestern } from '../actions/index';

class GlyphButtons extends Component {
  changeMaya = (action) => {
    const index = this.props.index;
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
    const action = event.target.id;

    await this.changeMaya(action);
    this.props.updateWestern(this.props.mayaDate, this.props.constant);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          type="button"
          className="btn btn-primary shadow"
          id="increment"
        >+</button>
        <button
          onClick={this.handleClick}
          type="button"
          className="btn btn-primary shadow"
          id="decrement"
        >-</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(GlyphButtons);