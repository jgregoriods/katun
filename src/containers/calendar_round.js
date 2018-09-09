import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalendarRound extends Component {
  render() {
    const tzolkin = this.props.mayaDate.getTzolkin();
    const haab = this.props.mayaDate.getHaab();

    return(
      <div className="katun-widget card mt-2 border-0 shadow">
        <div className="form-group row mb-0">
          <label htmlFor="calendarRound" className="col-5 col-form-label">Calendar Round</label>
          <div className="col-7">
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