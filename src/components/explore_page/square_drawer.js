import React from 'react';
import ColorSquare from './color_square';

export default ({ selectedSamples, colors, selectSample}) => {
  return (
    <div className="holder__body">
      {colors.map((color)=> {
        if (selectedSamples.length == 0 || selectedSamples.indexOf(
          color) === -1) {
          return <ColorSquare 
            selectSample={selectSample} 
            key={color} 
            color={color} 
          />;
        } else if (selectedSamples.indexOf(color) > -1) {
          return (
            <div key={color} className="sample sample--selected">
              <span className="sample__color" style={{background:color}}></span>
              <span className="sample__name">{color}</span>
            </div>
          );
        }
      })}
    </div>
  );
}