import React, { PropTypes } from 'react';
import ColorSquare from './ColorSquare';

const SquareDrawer = ({ selectedSamples, colors, selectSample }) => (
  <div className="holder__body">
    {colors.map((color) => {
      if (selectedSamples.length === 0 || selectedSamples.indexOf(
        color) === -1) {
        return (
          <ColorSquare
            selectSample={selectSample}
            key={color}
            color={color}
          />
        );
      } else if (selectedSamples.indexOf(color) > -1) {
        return (
          <div key={color} className="sample sample--selected">
            <span className="sample__color" style={{ background: color }}></span>
            <span className="sample__name">{color}</span>
          </div>
        );
      }
    })}
  </div>
);

export default SquareDrawer;

SquareDrawer.propTypes = {
  selectedSamples: PropTypes.array,
  colors: PropTypes.array,
  selectSample: PropTypes.func.isRequired,
};
