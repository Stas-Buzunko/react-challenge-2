import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import SquareDrawer from '../components/ExplorePage/SquareDrawer';
import SelectUpToTen from '../components/SelectUpToTen';


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
          COLOR={'#ffffff'}
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

const mapStateToProps = state => ({
  selectedSamples: state.samples,
  flat: state.colors.flat,
  material: state.colors.material,
});

export default connect(mapStateToProps, actions)(ExplorePage);

ExplorePage.propTypes = {
  fetchColors: PropTypes.func.isRequired,
  selectedSamples: PropTypes.array,
  removeSelection: PropTypes.func.isRequired,
  flat: PropTypes.array,
  selectSample: PropTypes.func.isRequired,
  material: PropTypes.array,
};
