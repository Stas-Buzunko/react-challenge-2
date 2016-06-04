import React from 'react';

export default ({ COLOR, children}) => {
  return (
    <div className="selected" style={{background: COLOR}}>
      <div className="container" style={{background: 'rgb(255, 255, 255)'}}>
        <h4><strong>Select up to ten colors</strong></h4>
        <p>Select Colors by clicking on them</p>
        <div className="selected__colors">
          {children}
        </div>
      </div>
    </div>
  ); 
}