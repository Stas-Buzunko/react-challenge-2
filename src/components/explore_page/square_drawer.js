import React from 'react';
import ColorSquare from './color_square';

export default (props) => {
		const intersection = [];
		if (props.selectedSamples.length !== undefined) {
			for (var i = 0; i < props.colors.length; i++) {
		    if (props.selectedSamples.indexOf(props.colors[i]) !== -1) {
		        intersection.push(props.colors[i]);
		    }
			}
		}
	return (
		<div className="holder__body">
		{props.colors.map((color)=> {
			if (props.selectedSamples.length == undefined || props.selectedSamples.indexOf(color) === -1) {
				return <ColorSquare selectSample={props.selectSample} key={color} color={color} />;
			} else if(props.selectedSamples.indexOf(color) > -1) {
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