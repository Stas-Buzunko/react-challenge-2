import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import SelectUpToTen from '../components/SelectUpToTen';
import RectangleDrawer from '../components/PresetsPage/RectangleDrawer';


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
            COLOR={'#ffffff'}
            removeSelection={this.props.removeSelection}
          />
          <RectangleDrawer
            selectAllSamples={this.props.selectAllSamples}
            scheme={this.props.schemes.aspirin}
            name={'Aspirin'}
            selectedSamples={this.props.selectedSamples}
          />
          <RectangleDrawer
            selectedSamples={this.props.selectedSamples}
            selectAllSamples={this.props.selectAllSamples}
            scheme={this.props.schemes.bird}
            name={'Bird'}
          />
          <RectangleDrawer
            selectedSamples={this.props.selectedSamples}
            selectAllSamples={this.props.selectAllSamples}
            scheme={this.props.schemes.firenze}
            name={'Firenze'}
          />
          <RectangleDrawer
            selectedSamples={this.props.selectedSamples}
            selectAllSamples={this.props.selectAllSamples}
            scheme={this.props.schemes.honey}
            name={'Honey'}
          />
          <RectangleDrawer
            selectedSamples={this.props.selectedSamples}
            selectAllSamples={this.props.selectAllSamples}
            scheme={this.props.schemes.retromatic}
            name={'Retromatic'}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedSamples: state.samples,
  schemes: state.colors.schemes,
});


export default connect(mapStateToProps, actions)(PresetsPage);

PresetsPage.propTypes = {
  fetchColors: PropTypes.func.isRequired,
  selectedSamples: PropTypes.array,
  selectAllSamples: PropTypes.func.isRequired,
  schemes: PropTypes.object,
  removeSelection: PropTypes.func.isRequired,
};
