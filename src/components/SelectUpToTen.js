import React, { Component, PropTypes } from 'react';
import SelectUpToTenHelper from './SelectUpToTen/helper';
import SampleDiv from './SelectUpToTen/SampleDiv';
import BlankSample from './SelectUpToTen/BlankSample';

export default class SelectUpToTen extends Component {

  drawSelected() {
    const length = this.props.selectedSamples.length;

    const selectedSamples = this.props.selectedSamples.map(sample => (
      <SampleDiv
        deleteSample={() => this.deleteSample(sample)}
        key={sample}
        sample={sample}
      />)
    );

    for (let i = 0; i < 10 - length; i++) {
      selectedSamples.push(<BlankSample key={i} />);
    }

    return selectedSamples;
  }

  deleteSample(sample) {
    const id = this.props.selectedSamples.indexOf(sample);
    this.props.removeSelection(id);
  }

  render() {
    return (
      <SelectUpToTenHelper COLOR={this.props.COLOR}>
        {this.drawSelected()}
      </SelectUpToTenHelper>
    );
  }
}

SelectUpToTen.propTypes = {
  selectedSamples: PropTypes.array,
  removeSelection: PropTypes.func.isRequired,
  COLOR: PropTypes.string,
};
