import React, { Component } from 'react';
import SelectUpToTenHelper from './select_up_to_ten/helper';
import SampleDiv from './select_up_to_ten/sample_div';
import BlankSample from './select_up_to_ten/blank_sample';

export default class SelectUpToTen extends Component {

  drawSelected() {
    let selectedSamples = [];
    let length = this.props.selectedSamples.length;

    this.props.selectedSamples.map((sample) => {
      selectedSamples.push(
        <SampleDiv 
          deleteSample={() => this.deleteSample(sample)} 
          key={sample} 
          sample={sample}
        />
      )
    })

    for (let i = 0; i < 10 - length; i++) {
      selectedSamples.push(<BlankSample key={i}/>);
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
