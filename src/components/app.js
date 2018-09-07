import React, { Component } from 'react';

import LongCountForm from '../containers/longcount_form';
import CorrelationForm from './correlation_form';
import GregorianForm from './gregorian_form';
import JulianForm from './julian_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <LongCountForm />
        <CorrelationForm />
        <GregorianForm />
        <JulianForm />
      </div>
    );
  }
};