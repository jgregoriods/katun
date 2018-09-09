import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeJulian, toggleJulianEra, updateGregorian, updateMaya } from '../actions/index';

class JulianForm extends Component {
  handleChange = async(event) => {
    const era = this.props.julianDate.getFullYear() > 0 ? true : false;
    await this.props.changeJulian(+event.target.id, +event.target.value, era);
    await this.props.updateGregorian(this.props.julianDate);
    this.props.updateMaya(this.props.gregorianDate, this.props.constant);
  }

  toggleEra = async() => {
    await this.props.toggleJulianEra();
    await this.props.updateGregorian(this.props.julianDate);
    this.props.updateMaya(this.props.gregorianDate, this.props.constant);
  }

  render() {
    const day = this.props.julianDate.getDate();
    const month = this.props.julianDate.getMonth();
    const year = this.props.julianDate.getFullYear();
    const formatedYear = (year > 0) ? year : Math.abs(year - 1);
    const era = (year > 0) ? true : false;

    return (
      <div className="card mt-1 shadow">
        <p className="form-title">Julian Calendar</p>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                value={day}
                onChange={this.handleChange}
                type="number"
                className="form-control"
                id={2}
                min={1}
                max={31}
              />
            </div>
            <div className="col">
              <select
                value={month}
                onChange={this.handleChange}
                className="custom-select"
                id={1}
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
                onChange={this.handleChange}
                type="number"
                className="form-control"
                id={0}
                min={1}
              />
            </div>
            <div className="col">
              <select
                value={era}
                onChange={this.toggleEra}
                className="custom-select"
              >
                <option value={true}>CE</option>
                <option value={false}>BCE</option>
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
    constant: state.constant,
    gregorianDate: state.gregorianDate,
    julianDate: state.julianDate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeJulian: changeJulian,
    toggleJulianEra: toggleJulianEra,
    updateGregorian: updateGregorian,
    updateMaya: updateMaya
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JulianForm);