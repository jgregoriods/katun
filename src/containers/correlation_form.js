import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeConstant } from '../actions/index';

class CorrelationForm extends Component {
  render() {
    return (
      <div className="card shadow mt-1 bg-light col-md-6">
        <div className="form-group row">
        <p>{this.props.constant}</p>
          <label htmlFor="correlationConstant" className="col col-form-label">Constant</label>
          <div className="col">
            <input
              value={this.props.constant}
              onChange={(event) => this.props.changeConstant(event.target.value)}
              className="form-control"
              type="number"
              id="correlationConstant"
            />
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    constant: state.constant
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeConstant: changeConstant }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrelationForm);