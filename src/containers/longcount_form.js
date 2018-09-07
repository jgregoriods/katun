import React, { Component } from 'react';
import { connect } from 'react-redux';

class LongCountForm extends Component {
  render() {
    return (
      <div className="card bg-light mt-1 shadow col-md-6">
      <p className="form-title">Long Count</p>
      <form>
        <div className="form-row">
          <div className="col">
            <input
              value={this.props.mayaDate.longCount[0]}
              //onChange={this.onInputChange.bind(this)}
              className="form-control"
              type="number"
              id={0}
              min={0}
              max={19}
            />
          </div>
          <div className="col">
            <input
              value={this.props.mayaDate.longCount[1]}
              //onChange={this.onInputChange.bind(this)}
              className="form-control"
              type="number"
              id={1}
              min={0}
              max={19}
            />
          </div>
          <div className="col">
            <input
              value={this.props.mayaDate.longCount[2]}
              //onChange={this.onInputChange.bind(this)}
              className="form-control"
              type="number"
              id={2}
              min={0}
              max={19}
            />
          </div>
          <div className="col">
            <input
              value={this.props.mayaDate.longCount[3]}
              //onChange={this.onInputChange.bind(this)}
              className="form-control"
              type="number"
              id={3}
              min={0}
              max={17}
            />
          </div>
          <div className="col">
            <input
              value={this.props.mayaDate.longCount[4]}
              //onChange={this.onInputChange.bind(this)}
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
          <input type="text" id="calendarRound" className="form-control" value={`${this.props.mayaDate.tzolkin.join(' ')} ${this.props.mayaDate.haab.join(' ')}`}/>
        </div>
      </div>
      </div>
    );
  }

  /*onInputChange(event) {
    const newLongCount = [....longCount];
    newLongCount[event.target.id] = +event.target.value;
    this.setState({ longCount: newLongCount });
  }*/
};

function mapStateToProps(state) {
  return {
    mayaDate: state.mayaDate
  };
}

export default connect(mapStateToProps)(LongCountForm);