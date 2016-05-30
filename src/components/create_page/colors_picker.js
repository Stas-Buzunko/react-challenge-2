import React from 'react';
import ColorPicker from 'react-color-picker';

export default (props) => {
	return (
		<div>
			<div className="center" style={{background: props.COLOR}}>
        <h2 className="title" style={{color: props.textColor}}><strong>Choose your color</strong></h2> 
	        <ColorPicker
	          defaultValue='#3b97d3'
	          onDrag={ props.onColorChange }
	        />
     	</div>
     </div>
	);
}