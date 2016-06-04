import React from 'react';

export default ({ deleteSample, sample}) => {
  return (
    <div 
      onClick={deleteSample}
      className="selected__color selected__color--active"
      style={{background: sample, height: 48, width: 48}} 
    >
      <i 
      	className="fa fa-times selected__icon" 
      	style={{color: 'rgb(255, 255, 255)'}} 
      />
    </div>
  );
}