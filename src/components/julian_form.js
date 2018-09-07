import React, { Component } from 'react';

class JulianForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1,
      month: 0,
      year: 2018,
      era: 'CE'
    }
  }

  render() {
    return (
      <div className="card mt-1 shadow bg-light col-md-6">
        <p className="form-title">Julian Calendar</p>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                value={this.state.day}
                onChange={event => this.setState( {day: event.target.value} )}
                type="number"
                className="form-control"
                min={1}
                max={31}
              />
            </div>
            <div className="col">
              <select
                value={this.state.month}
                onChange={event => this.setState( {month: event.target.value} )}
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
                value={this.state.year}
                onChange={event => this.setState({ year: event.target.value })}
                type="number"
                className="form-control"
                min={1}
              />
            </div>
            <div className="col">
              <select
                value={this.state.era}
                onChange={event => this.setState({ era: event.target.value })}                
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

export default JulianForm;