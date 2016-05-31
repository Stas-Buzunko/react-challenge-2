import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeSelection, fetchColors, selectSample } from '../actions/index';
import SquareDrawer from '../components/explore_page/square_drawer';
import SelectUpToTen from '../components/explore_page/select_up_to_ten';


class ExplorePage extends Component {
  componentWillMount() {
    this.props.fetchColors();
  }

  render() {
    return (
      <div className="explore container">
        <h1><strong>Explore presets</strong></h1>
        <SelectUpToTen 
          selectedSamples={this.props.selectedSamples}
          COLOR='#ffffff'
          removeSelection={this.props.removeSelection}
        />
        <div className="holder">
          <header className="holder__header">
            <h3><strong>Flat</strong></h3>
          </header>
          <SquareDrawer 
            colors={this.props.flat}
            selectSample={this.props.selectSample}
            selectedSamples={this.props.selectedSamples}
          />
        </div>  
        <div className="holder">
          <header className="holder__header">
            <h3><strong>Material</strong></h3>
          </header>
          <SquareDrawer 
            colors={this.props.material}
            selectSample={this.props.selectSample}
            selectedSamples={this.props.selectedSamples}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSamples: state.samples,
    flat: state.colors.flat,
    material: state.colors.material
  }
}
export default connect(mapStateToProps, { 
  removeSelection, fetchColors, selectSample 
})(ExplorePage);