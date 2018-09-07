import React, { Component } from 'react';

class CorrelationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constant: 584286
    };
  }

  render() {
    return (
      <div className="card shadow mt-1 bg-light col-md-6">
        <div className="form-group row">
          <label htmlFor="correlationConstant" className="col col-form-label">Constant</label>
          <div className="col">
            <input
              value={this.state.constant}
              onChange={event => this.setState({ constant: event.target.value })}
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

export default CorrelationForm;