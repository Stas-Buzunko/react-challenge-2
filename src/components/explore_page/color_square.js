import React from 'react';

export default (props) => {
  return (
    <div className="sample" onClick={() => props.selectSample(props.color)}>
      <span className="sample__color" style={{background:props.color}}></span>
      <span className="sample__name">{props.color}</span>
    </div>
  );
}