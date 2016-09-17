import React, { PropTypes } from 'react';

const ColorSquare = ({ selectSample, color }) => (
  <div className="sample" onClick={() => selectSample(color)}>
    <span className="sample__color" style={{ background: color }}></span>
    <span className="sample__name">{color}</span>
  </div>
);


export default ColorSquare;

ColorSquare.propTypes = {
  selectSample: PropTypes.func.isRequired,
  color: PropTypes.string,
};
