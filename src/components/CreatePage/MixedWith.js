import React, { Component, PropTypes } from 'react';
import ColorPicker from 'react-color-picker';

export default class MixedWith extends Component {
  constructor(props) {
    super(props);

    this.removeAllSelections = this.removeAllSelections.bind(this);
    this.selectAllSamples = this.selectAllSamples.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(c) {
    this.props.mixerColorChange(c);
    this.props.changeMixerExamples(this.props.COLOR, c);
  }

  selectAllSamples() {
    this.props.selectAllSamples(this.props.examples);
  }

  addSample(sample) {
    const length = this.props.selectedSamples.length;
    if (length === undefined || length < 10) {
      this.props.onSelectSample(sample);
    }
  }

  deleteSample(sample) {
    const id = this.props.selectedSamples.indexOf(sample);
    this.props.removeSelection(id);
  }

  findIntersection() {
    const intersection = [];
    if (this.props.selectedSamples.length !== undefined) {
      for (let i = 0; i < this.props.examples.length; i++) {
        if (this.props.selectedSamples.indexOf(this.props.examples[i]) !== -1) {
          intersection.push(this.props.examples[i]);
        }
      }
    }
    return intersection;
  }

  removeAllSelections() {
    const ids = this.findIntersection().map(sample => this.props.selectedSamples.indexOf(sample));
    ids.sort().reverse().map((id) => this.props.removeSelection(id));
  }

  drawSamples() {
    const samples = this.props.examples.map((sample) => {
      const selectedSamples = this.props.selectedSamples;
      if (selectedSamples.length === undefined || selectedSamples.indexOf(
        sample) === -1) {
        return (
          <div
            className="color-sample"
            onClick={() => this.addSample(sample)}
            key={sample}
            style={{ background: sample, height: 50, width: 92 }}
          >
            <i className="fa fa-plus" style={{ color: 'rgb(255, 255, 255)' }} />
          </div>
        );
      } else if (this.props.selectedSamples.indexOf(sample) > -1) {
        return (
          <div
            className="color-sample color-sample--selected"
            onClick={() => this.deleteSample(sample)}
            key={sample}
            style={{ background: sample, height: 50, width: 92 }}
          >
            <i className="fa fa-times" style={{ color: 'rgb(255, 255, 255)' }} />
          </div>
        );
      }
    });
    return samples;
  }

  render() {
    return (
      <div style={{ background: this.props.COLOR }}>
        <div
          className="container color-samples-container"
          style={{ background: 'rgb(255, 255, 255)' }}
        >
          <header className="mixer-header">
            <h4><strong>Mixed with</strong></h4>
            <span
              onClick={this.props.toggleColorPickerVisibility}
              className="mixer"
              style={{ background: this.props.mixerColor }}
            />
          </header>
          <div
            className="cp_shown"
            style={{
              display: `${this.props.colorPickerVisible
                ? 'block'
                : 'none'}`,
            }}
          >
            <div className="cp">
              <ColorPicker
                defaultValue={'#894B9D'}
                onDrag={this.onDrag}
              />
            </div>
          </div>
          <div className="color-samples-wrapper">
            <div
              className="color-samples"
              style={{
                background: `${this.props.darkBackground
                  ? 'rgb(34,34,34)'
                  : 'rgb(245, 245, 245)'}`,
              }}
            >
              {this.drawSamples()}
            </div>
          </div>
          <footer className="color-samples-footer">
            <button
              onClick={this.props.onToggleBackground}
              className="btn btn--default"
            >
              {this.props.darkBackground
                  ? 'Light background'
                  : 'Dark background'
              }
            </button>
            <button
              onClick={this.selectAllSamples}
              className="btn btn--default"
            >
              Select all
            </button>
            <button
              onClick={this.removeAllSelections}
              className="btn btn--danger"
              style={{ display: `${this.findIntersection().length ? '' : 'none'}` }}
            >
              Remove all
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

MixedWith.propTypes = {
  selectedSamples: PropTypes.array,
  onSelectSample: PropTypes.func.isRequired,
  samples: PropTypes.array,
  selectAllSamples: PropTypes.func.isRequired,
  removeSelection: PropTypes.func.isRequired,
  onToggleBackground: PropTypes.func.isRequired,
  darkBackground: PropTypes.bool,
  COLOR: PropTypes.string,
  colorPickerVisible: PropTypes.bool,
  mixerColor: PropTypes.string,
  mixerColorChange: PropTypes.func.isRequired,
  changeMixerExamples: PropTypes.func.isRequired,
  examples: PropTypes.array,
  toggleColorPickerVisibility: PropTypes.func.isRequired,
};
