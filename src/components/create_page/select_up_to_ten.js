import React, { Component } from 'react';
import SelectUpToTenHelper from './select_up_to_ten_helper';
import SampleDiv from './sample_div';
import BlankSample from './blank_sample';

export default class SelectUpToTen extends Component {
  deleteSample(sample) {
    const id = this.props.selectedSamples.indexOf(sample);
    this.props.removeSelection(id);
  }

  render() {
    const length = this.props.selectedSamples.length
    if (length == undefined) {
      const ololo = [ 1,2,3,4,5,6,7,8,9,10];
      return (
        <SelectUpToTenHelper COLOR={this.props.COLOR}>
          {ololo.map((i) => {
            return <BlankSample key={i}/>;
          })}
        </SelectUpToTenHelper>    
      );
    } else {
      const ololo = [ 1,2,3,4,5,6,7,8,9,10].slice(0, 10 - length);
      return (
        <SelectUpToTenHelper COLOR={this.props.COLOR}>
          {this.props.selectedSamples.map((sample) => {
            return <SampleDiv 
              deleteSample={() => this.deleteSample(sample)} 
              key={sample} 
              sample={sample}
            />;
          })}
          {ololo.map((i) => {
            return <BlankSample key={i}/>;
          })}
        </SelectUpToTenHelper>    
      );
    }
  }
}
