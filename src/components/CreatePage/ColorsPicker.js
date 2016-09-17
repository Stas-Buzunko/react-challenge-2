import React, { PropTypes } from 'react';
import ColorPicker from 'react-color-picker';

const ColorsPicker = ({ COLOR, textColor, onColorChange }) => (
  <div>
    <div className="center" style={{ background: COLOR }}>
      <h2 className="title" style={{ color: textColor }}>
        <strong>Choose your color</strong>
      </h2>
      <ColorPicker defaultValue={'#3b97d3'} onDrag={onColorChange} />
    </div>
  </div>
);

export default ColorsPicker;

ColorsPicker.propTypes = {
  COLOR: PropTypes.string,
  textColor: PropTypes.string,
  onColorChange: PropTypes.func.isRequired,
};
