import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLongCount, updateWestern } from '../actions/index';

class LongCountForm extends Component {
  handleChange = async(event) => {
    await this.props.changeLongCount(event.target.id, +event.target.value);
    this.props.updateWestern(this.props.mayaDate, this.props.constant);
  }

  render() {
    const longCount = this.props.mayaDate.getLongCount();

    return (     
      <div className="katun-widget card border-0 mt-2 shadow">
        <p className="form-title text-center mb-0">Long Count</p>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                value={longCount[0].toString()}
                onChange={this.handleChange}
                className="form-control"
                type="number"
                id={0}
                min={0}
                max={19}
              />
            </div>
            <div className="col">
              <input
                value={longCount[1].toString()}
                onChange={this.handleChange}
                className="form-control"
                type="number"
                id={1}
                min={0}
                max={19}
              />
            </div>
            <div className="col">
              <input
                value={longCount[2].toString()}
                onChange={this.handleChange}
                className="form-control"
                type="number"
                id={2}
                min={0}
                max={19}
              />
            </div>
            <div className="col">
              <input
                value={longCount[3].toString()}
                onChange={this.handleChange}
                className="form-control"
                type="number"
                id={3}
                min={0}
                max={17}
              />
            </div>
            <div className="col">
              <input
                value={longCount[4].toString()}
                onChange={this.handleChange}
                className="form-control"
                type="number"
                id={4}
                min={0}
                max={19}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(LongCountForm);