import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeLongCount } from '../actions/index';

class LongCountForm extends Component {
  render() {
    const longCount = this.props.mayaDate.getLongCount();
    const tzolkin = this.props.mayaDate.getTzolkin();
    const haab = this.props.mayaDate.getHaab();

    return (     
      <div className="card bg-light mt-1 shadow col-md-6">
        <p className="form-title">Long Count</p>
        <p>{this.props.mayaDate.longCount.join('.')}</p>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                value={longCount[0]}
                onChange={(event) => this.props.changeLongCount(0, event.target.value)}
                className="form-control"
                type="number"
                min={0}
                max={19}
              />
            </div>
            <div className="col">
              <input
                value={longCount[1]}
                onChange={(event) => this.props.changeLongCount(1, event.target.value)}
                className="form-control"
                type="number"
                min={0}
                max={19}
              />
            </div>
            <div className="col">
              <input
                value={longCount[2]}
                onChange={(event) => this.props.changeLongCount(2, event.target.value)}
                className="form-control"
                type="number"
                min={0}
                max={19}
              />
            </div>
            <div className="col">
              <input
                value={longCount[3]}
                onChange={(event) => this.props.changeLongCount(3, event.target.value)}
                className="form-control"
                type="number"
                min={0}
                max={17}
              />
            </div>
            <div className="col">
              <input
                value={longCount[4]}
                onChange={(event) => this.props.changeLongCount(4, event.target.value)}
                className="form-control"
                type="number"
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
    mayaDate: state.mayaDate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLongCount: changeLongCount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LongCountForm);