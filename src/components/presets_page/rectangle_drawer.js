import React from 'react';

export default ({scheme, selectedSamples, selectAllSamples, name}) => {
  Array.prototype.equals = function( array ) {
    return this.length == array.length && 
    this.every( function(this_i,i) { return this_i == array[i] } )
  }
  const current = scheme.equals(selectedSamples);
  return (
    <div 
      className={`scheme ${current ? 'scheme--selected' : ''}`}
      onClick={() => selectAllSamples(scheme)}
    >
      <header className="scheme__header">
        <h3>
          <strong>{name} <i 
            className="fa fa-check" 
            style={{display: `${current ? 'inline-block' : 'none'}`}} />
          </strong>
        </h3>
      </header>
      <div className="scheme__body">
        {scheme.map((color) => {
          return (
            <div 
              className="scheme__color" 
              style={{background: color}} key={color}
            />
          );
        })}
      </div>
    </div>
  );
}