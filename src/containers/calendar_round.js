import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalendarRound extends Component {
  render() {
    const tzolkin = this.props.mayaDate.getTzolkin();
    const haab = this.props.mayaDate.getHaab();

    return(
      <div className="card mt-1 shadow">
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
}

function mapStateToProps(state) {
  return {
    mayaDate: state.mayaDate
  };
}

export default connect(mapStateToProps)(CalendarRound);