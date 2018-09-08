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
    const tzolkin = this.props.mayaDate.getTzolkin();
    const haab = this.props.mayaDate.getHaab();

    return (     
      <div className="card bg-light mt-1 shadow col-md-6">
        <p className="form-title">Long Count</p>
        <p>{this.props.mayaDate.getLongCount().join('.')}</p>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                value={longCount[0]}
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
                value={longCount[1]}
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
                value={longCount[2]}
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
                value={longCount[3]}
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
                value={longCount[4]}
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
        <div className="form-group row">
          <label htmlFor="calendarRound" className="col col-form-label">Calendar Round</label>
          <div className="col">
            <input
              value={`${tzolkin.join(' ')} ${haab.join(' ')}`}
              type="text"
              id="calendarRound"
              className="form-control"
            />
          </div>
        </div>
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