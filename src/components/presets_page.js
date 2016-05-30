import React, { Component } from 'react';
import SelectUpToTen from './explore_page/select_up_to_ten';
import { connect } from 'react-redux';
import { removeSelection, fetchColors, selectAllSamples} from '../actions/index';
import RectangleDrawer from './presets_page/rectangle_drawer';

class PresetsPage extends Component {
	componentWillMount() {
		this.props.fetchColors();
	}

	render() {
		return (
			<div className="content">
				<div className="presets container">
					<h1><strong>Explore ready to use color schemes</strong></h1>
					<SelectUpToTen 
			    	selectedSamples={this.props.selectedSamples}
			    	COLOR='#ffffff'
			     	removeSelection={this.props.removeSelection}
		      />
		      <RectangleDrawer 
		      	selectAllSamples={this.props.selectAllSamples} 
		      	scheme={this.props.schemes.aspirin} 
		      	name='Aspirin' 
		      	selectedSamples={this.props.selectedSamples}
		      />
		      <RectangleDrawer selectedSamples={this.props.selectedSamples} selectAllSamples={this.props.selectAllSamples} scheme={this.props.schemes.bird} name='Bird' />
		      <RectangleDrawer selectedSamples={this.props.selectedSamples} selectAllSamples={this.props.selectAllSamples} scheme={this.props.schemes.firenze} name='Firenze' />
		      <RectangleDrawer selectedSamples={this.props.selectedSamples} selectAllSamples={this.props.selectAllSamples} scheme={this.props.schemes.honey} name='Honey' />
		      <RectangleDrawer selectedSamples={this.props.selectedSamples} selectAllSamples={this.props.selectAllSamples} scheme={this.props.schemes.retromatic} name='Retromatic' />
		    </div>
      </div>
		);
	}
}
function mapStateToProps(state) {
	return {
		selectedSamples: state.samples,
		schemes: state.colors.schemes
	}
}
export default connect(mapStateToProps, {removeSelection, fetchColors, selectAllSamples})(PresetsPage)