import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';
import { connect } from 'react-redux';
import { colorChange, textColorChange, toggleBackground, 
	changeExamples, selectSample, selectAllSamples, 
	removeSelection, toggleColorPickerVisibility, 
	mixerColorChange, changeMixerExamples
	 } from '../actions/index';
import ColorsPicker from './create_page/colors_picker';
import SelectUpToTen from './create_page/select_up_to_ten';
import DarkerAndLigther from './create_page/darker_and_ligther';
import MixedWith from './create_page/mixed_with';



class CreatePage extends Component {
	
	constructor(props) {
		super(props);

		this.state = { 
			COLOR: '#3b97d3',
			defaultMixer:'#894B9D',
			textColor: 'rgb(0, 0, 0)',
			examples: [],
			darkBackgroundDarker: false,
			darkBackgroundMixed: false,
			selectedSamples: []
		}; 
		
	}

	componentWillMount(){
		this.props.colorChange(this.state.COLOR);
		this.props.changeExamples(this.state.COLOR);
		this.props.mixerColorChange(this.state.defaultMixer);
		this.props.changeMixerExamples(this.state.COLOR, this.state.defaultMixer);
	}

	onDrag(c){
		this.props.colorChange(c);
		this.props.textColorChange(c);
		this.props.changeExamples(c);
		this.props.changeMixerExamples(c, this.props.mixerColor);

   }

	render() {


		return (
			<div>
				<ColorsPicker 
					textColor={this.props.textColor} 
					onColorChange={this.onDrag.bind(this)} 
					COLOR={this.props.COLOR}
				/>
      	<SelectUpToTen 
      		selectedSamples={this.props.selectedSamples}
      		COLOR={this.props.COLOR}
      		removeSelection={this.props.removeSelection}
      	/>
      	<div style={{background: this.props.COLOR}}>
      		<br></br>
       	</div>
       	<DarkerAndLigther
       		removeSelection={this.props.removeSelection}
       		selectedSamples={this.props.selectedSamples}
       		selectAllSamples={this.props.selectAllSamples}
       		onSelectSample={this.props.selectSample}
       		onToggleBackground={this.props.toggleBackground} 
       		darkBackground={this.props.darkBackgroundDarker} 
       		COLOR={this.props.COLOR}
       		samples={this.props.examples} 
       	/>
       	<div style={{background: this.props.COLOR}}>
      		<br></br>
      	</div>
      	<MixedWith 
      		selectAllSamples={this.props.selectAllSamples}
      		changeMixerExamples={this.props.changeMixerExamples}
      		selectedSamples={this.props.selectedSamples}
      		examples={this.props.mixerExamples}
      		mixerColorChange={this.props.mixerColorChange}
      		toggleColorPickerVisibility={this.props.toggleColorPickerVisibility}
      		colorPickerVisible={this.props.colorPickerVisible}
       		removeSelection={this.props.removeSelection}
       		selectedSamples={this.props.selectedSamples}
       		onSelectSample={this.props.selectSample}
       		onToggleBackground={this.props.toggleBackground} 
       		darkBackground={this.props.darkBackgroundMixed}  
       		COLOR={this.props.COLOR}
       		mixerColor={this.props.mixerColor}
      	/>
      	<div style={{background: this.props.COLOR}}>
      		<br></br>
      	</div><div style={{background: this.props.COLOR}}>
      		<br></br>
      	</div>
      </div>
    );
	}
}

function mapStateToProps(state) {
	return {
		COLOR: state.colors.COLOR, 
		textColor: state.colors.textColor,
		darkBackgroundDarker: state.colors.darkBackgroundDarker,
		darkBackgroundMixed: state.colors.darkBackgroundMixed,
		examples: state.colors.examples,
		selectedSamples: state.samples,
		colorPickerVisible: state.colors.colorPickerVisible,
		mixerColor: state.mixer.mixerColor,
		mixerExamples: state.mixer.mixerExamples 
	};
}

export default connect(mapStateToProps, { colorChange, textColorChange, toggleBackground,
 changeExamples, selectSample, selectAllSamples, removeSelection, 
 toggleColorPickerVisibility,mixerColorChange, changeMixerExamples })(CreatePage);