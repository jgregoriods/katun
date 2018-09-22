import React, { Component } from 'react';

import LongCountForm from './longcount_form';
import CalendarRound from './calendar_round';
import CorrelationForm from './correlation_form';
import GregorianForm from './gregorian_form';
import JulianForm from './julian_form';
import GlyphPanel from './glyph_panel';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <p className="align-bottom">Long </p><img src="./img/lc_icon.png"/><p className="align-bottom"> Count</p>
        </div>
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
      </div>
    );
  }
};