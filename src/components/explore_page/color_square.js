import React from 'react';

export default ({ selectSample, color}) => {
  return (
    <div className="sample" onClick={() => selectSample(color)}>
      <span className="sample__color" style={{background: color}}></span>
      <span className="sample__name">{color}</span>
    </div>
  );
}