import React from 'react';

export default (props) => {
	Array.prototype.equals = function( array ) {
  	return this.length == array.length && 
    this.every( function(this_i,i) { return this_i == array[i] } )  
  }
  const current = props.scheme.equals(props.selectedSamples);
	return (
		<div className={`scheme ${current ? 'scheme--selected' : ''}`} onClick={() => props.selectAllSamples(props.scheme)}>
			<header className="scheme__header">
				<h3><strong>{props.name} <i className="fa fa-check" style={{display: `${current ? 'inline-block' : 'none'}`}}></i></strong></h3>
			</header>
			<div className="scheme__body">
				{props.scheme.map((color) => {
					return <div className="scheme__color" style={{background: color}} key={color}/>;
				})}
			</div>
		</div>
	);
}