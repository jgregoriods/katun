import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeConstant, updateWestern } from '../actions/index';

class CorrelationForm extends Component {
  handleChange = async(event) => {
    await this.props.changeConstant(+event.target.value);
    this.props.updateWestern(this.props.mayaDate, this.props.constant);
  }

  render() {
    return (
      <div className="card shadow mt-1 bg-light">
        <div className="form-group row">
          <label htmlFor="correlationConstant" className="col col-form-label">Constant</label>
          <div className="col">
            <input
              value={this.props.constant}
              onChange={this.handleChange}
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
    mayaDate: state.mayaDate,
    constant: state.constant
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeConstant: changeConstant,
    updateWestern: updateWestern
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrelationForm);