import React from 'react';

import GlyphButtons from '../containers/glyph_buttons';

export default function GlyphPanel(props) {
  return (
    <div className="mt-1">
      <div className="row">
        <div className="col">
          <GlyphButtons />
        </div>
        <div className="col">BAKTUN</div>
        <div className="col">KATUN</div>
        <div className="col">
          <GlyphButtons />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <GlyphButtons />
        </div>
        <div className="col">TUN</div>
        <div className="col">UINAL</div>
        <div className="col">
          <GlyphButtons />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <GlyphButtons />
        </div>
        <div className="col">KIN</div>
        <div className="col">TZOLKIN</div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">G</div>
        <div className="col">HAAB</div>
        <div className="col"></div>
      </div>
    </div>
  );
}