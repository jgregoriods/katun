import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeJulian, toggleJulianEra } from '../actions/index';

class JulianForm extends Component {
  render() {
    const day = this.props.julianDate.getDate();
    const month = this.props.julianDate.getMonth();
    const year = this.props.julianDate.getFullYear();
    const formatedYear = (year > 0) ? year : Math.abs(year - 1);
    const era = (year > 0) ? true : false;

    return (
      <div className="card mt-1 shadow bg-light col-md-6">
        <p className="form-title">Julian Calendar</p>
        <p>{day} {month} {year} {String(era)}</p>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                value={day}
                onChange={(event) => this.props.changeJulian(2, event.target.value, era)}
                type="number"
                className="form-control"
                min={1}
                max={31}
              />
            </div>
            <div className="col">
              <select
                value={month}
                onChange={(event) => this.props.changeJulian(1, event.target.value, era)}
                className="custom-select"
              >
                <option value={0}>Jan</option>
                <option value={1}>Feb</option>
                <option value={2}>Mar</option>
                <option value={3}>Apr</option>
                <option value={4}>May</option>
                <option value={5}>Jun</option>
                <option value={6}>Jul</option>
                <option value={7}>Aug</option>
                <option value={8}>Sep</option>
                <option value={9}>Oct</option>
                <option value={10}>Nov</option>
                <option value={11}>Dec</option>
              </select>
            </div>
            <div className="col">
              <input
                value={formatedYear}
                onChange={(event) => this.props.changeJulian(0, event.target.value, era)}
                type="number"
                className="form-control"
                min={1}
              />
            </div>
            <div className="col">
              <select
                value={this.props.julianDate.era}
                onChange={(event) => this.props.toggleJulianEra()}
                className="custom-select"
              >
                <option value="CE">CE</option>
                <option value="BCE">BCE</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    julianDate: state.julianDate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeJulian: changeJulian,
    toggleJulianEra: toggleJulianEra
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JulianForm);