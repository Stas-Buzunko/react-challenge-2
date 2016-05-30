import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';

export default class MixedWith extends Component {
	addSample(sample){
		if (this.props.selectedSamples.length == undefined || this.props.selectedSamples.length < 10) {
        this.props.onSelectSample(sample);
		}
	}
	selectAllSamples(){
		this.props.selectAllSamples(this.props.examples);
	}

	onDrag(c){
		this.props.mixerColorChange(c);
		this.props.changeMixerExamples(this.props.COLOR, c);
	}
	deleteSample(sample){
		const id = this.props.selectedSamples.indexOf(sample);
		this.props.removeSelection(id);
	}
	removeAllSelections(){
		const intersection = [];
		if (this.props.selectedSamples.length !== undefined) {
			for (var i = 0; i < this.props.examples.length; i++) {
		    if (this.props.selectedSamples.indexOf(this.props.examples[i]) !== -1) {
		        intersection.push(this.props.examples[i]);
		    }
			}
		}
		const ids = [];
		intersection.map((sample) => {
			const id = this.props.selectedSamples.indexOf(sample);
			ids.push(id)
		})
		ids.sort().reverse().map((id) => {
			this.props.removeSelection(id);
		})
	}
	render() {
		const intersection = [];
		if (this.props.selectedSamples.length !== undefined) {
			for (var i = 0; i < this.props.examples.length; i++) {
		    if (this.props.selectedSamples.indexOf(this.props.examples[i]) !== -1) {
		        intersection.push(this.props.examples[i]);
		    }
			}
		}
		const samples = this.props.examples.map((sample) => {
			if (this.props.selectedSamples.length == undefined || this.props.selectedSamples.indexOf(sample) === -1) {
        return (
					<div 
						className="color-sample"  
						onClick={() => this.addSample(sample)}
						key={sample} 
						style={{background: sample, height: 50, width: 92}} 
					>
						<i className="fa fa-plus" style={{color: 'rgb(255, 255, 255)'}}></i>
					</div>
				);
	    } 
	    else if (this.props.selectedSamples.indexOf(sample) > -1) {
	      return (
					<div 
						className="color-sample color-sample--selected"  
						onClick={() => this.deleteSample(sample)}
						key={sample} 
						style={{background: sample, height: 50, width: 92}} 
					>
						<i className="fa fa-times" style={{color: 'rgb(255, 255, 255)'}}></i>
					</div>
				);
	    }
	   });    
		return (
			<div style={{background: this.props.COLOR}}>
	 	   	<div className="container color-samples-container" style={{background: 'rgb(255, 255, 255)'}}>
	 	   		<header className="mixer-header">
	 	  			<h4><strong>Mixed with</strong></h4>
	 	  			<span onClick={this.props.toggleColorPickerVisibility} className="mixer" style={{background: this.props.mixerColor}}/>
	 	  		</header>
	 	  		<div className="cp_shown" style={{display: `${this.props.colorPickerVisible ? 'block' : 'none'}`}}>
	 	  			<div className="cp">
		 	  			<ColorPicker
		          	defaultValue='#894B9D'
								onDrag={this.onDrag.bind(this)}
		        	/>
		        </div>	
	 	  		</div>
	 	  		<div className="color-samples-wrapper">
		 	   		<div className="color-samples" style={{background: `${this.props.darkBackground ? 'rgb(34,34,34)' :'rgb(245, 245, 245)'}`}}>
		 	     		{samples}			
		 	   		</div>
	 	   		</div>
	 	   		<footer className="color-samples-footer">
	 	   			<button onClick={this.props.onToggleBackground} className="btn btn--default">{this.props.darkBackground ? 'Light background': 'Dark background'}</button>
	 	   			<button onClick={this.selectAllSamples.bind(this)} className="btn btn--default">Select all</button>
	 	   			<button onClick={this.removeAllSelections.bind(this)} className="btn btn--danger" style={{display: `${intersection.length ? '' : 'none'}`}}>Remove all</button>
	 	   		</footer>
	 	   	</div>
	    </div>
	  );
	}
}
