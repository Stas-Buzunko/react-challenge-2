import React from 'react';
import ColorPicker from 'react-color-picker';

export default ({COLOR, textColor, onColorChange}) => {
  return (
    <div>
      <div className="center" style={{background: COLOR}}>
        <h2 className="title" style={{color: textColor}}>
          <strong>Choose your color</strong>
        </h2>
        <ColorPicker defaultValue='#3b97d3' onDrag={ onColorChange } />
      </div>
    </div>
  );
}