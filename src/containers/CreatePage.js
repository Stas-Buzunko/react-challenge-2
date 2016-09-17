import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import ColorsPicker from '../components/CreatePage/ColorsPicker';
import SelectUpToTen from '../components/SelectUpToTen';
import DarkerAndLigther from '../components/CreatePage/DarkerAndLighter';
import MixedWith from '../components/CreatePage/MixedWith';


class CreatePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      COLOR: '#3b97d3',
      defaultMixer: '#894B9D',
      textColor: 'rgb(0, 0, 0)',
      examples: [],
      darkBackgroundDarker: false,
      darkBackgroundMixed: false,
      selectedSamples: [],
    };

    this.onDrag = this.onDrag.bind(this);
  }

  componentWillMount() {
    this.props.colorChange(this.state.COLOR);
    this.props.changeExamples(this.state.COLOR);
    this.props.mixerColorChange(this.state.defaultMixer);
    this.props.changeMixerExamples(this.state.COLOR, this.state.defaultMixer);
  }

  onDrag(c) {
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
          onColorChange={this.onDrag}
          COLOR={this.props.COLOR}
        />
        <SelectUpToTen
          selectedSamples={this.props.selectedSamples}
          COLOR={this.props.COLOR}
          removeSelection={this.props.removeSelection}
        />
        <div style={{ background: this.props.COLOR }}>
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
        <div style={{ background: this.props.COLOR }}>
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
        <div style={{ background: this.props.COLOR }}>
          <br></br>
        </div><div style={{ background: this.props.COLOR }}>
          <br></br>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  COLOR: state.colors.COLOR,
  textColor: state.colors.textColor,
  darkBackgroundDarker: state.colors.darkBackgroundDarker,
  darkBackgroundMixed: state.colors.darkBackgroundMixed,
  examples: state.colors.examples,
  selectedSamples: state.samples,
  colorPickerVisible: state.colors.colorPickerVisible,
  mixerColor: state.mixer.mixerColor,
  mixerExamples: state.mixer.mixerExamples,
});

export default connect(mapStateToProps, actions)(CreatePage);

CreatePage.propTypes = {
  colorChange: PropTypes.func.isRequired,
  changeExamples: PropTypes.func.isRequired,
  mixerColorChange: PropTypes.func.isRequired,
  changeMixerExamples: PropTypes.func.isRequired,
  textColorChange: PropTypes.func.isRequired,
  mixerColor: PropTypes.string,
  textColor: PropTypes.string,
  COLOR: PropTypes.string,
  selectedSamples: PropTypes.array,
  removeSelection: PropTypes.func.isRequired,
  selectAllSamples: PropTypes.func.isRequired,
  selectSample: PropTypes.func.isRequired,
  toggleBackground: PropTypes.func.isRequired,
  darkBackgroundMixed: PropTypes.bool,
  darkBackgroundDarker: PropTypes.bool,
  examples: PropTypes.array,
  mixerExamples: PropTypes.array,
  toggleColorPickerVisibility: PropTypes.func.isRequired,
  colorPickerVisible: PropTypes.bool,
};
