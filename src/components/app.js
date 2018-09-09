import React, { Component } from 'react';

import LongCountForm from '../containers/longcount_form';
import CalendarRound from '../containers/calendar_round';
import CorrelationForm from '../containers/correlation_form';
import GregorianForm from '../containers/gregorian_form';
import JulianForm from '../containers/julian_form';
import GlyphPanel from './glyph_panel';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <GlyphPanel />
        </div>
        <div className="col-md-6">
          <LongCountForm />
          <CalendarRound />
          <CorrelationForm />
          <GregorianForm />
          <JulianForm />
        </div>
      </div>
    );
  }
};