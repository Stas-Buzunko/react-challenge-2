import React from 'react';

export default (props) => {
	return (
		<div 
			onClick={props.deleteSample}
			className="selected__color selected__color--active"
			style={{background: props.sample, height: 48, width: 48}} 
		>
			<i className="fa fa-times selected__icon" style={{color: 'rgb(255, 255, 255)'}}></i>
		</div>
	);
}