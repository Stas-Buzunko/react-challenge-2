import React, { Component } from 'react';

export default class DarkerAndLigther extends Component {
  addSample(sample) {
    const length = this.props.selectedSamples.length;
    if (length == undefined || length < 10) {
        this.props.onSelectSample(sample);
    }
  }

  selectAllSamples() {
    this.props.selectAllSamples(this.props.samples);
  }

  deleteSample(sample) {
    const id = this.props.selectedSamples.indexOf(sample);
    this.props.removeSelection(id);
  }

  handleToggleBackground() {
    this.props.onToggleBackground('dark');
  }

  removeAllSelections() {
    const intersection = [];
    if (this.props.selectedSamples.length !== undefined) {
      for (var i = 0; i < this.props.samples.length; i++) {
        if (this.props.selectedSamples.indexOf(this.props.samples[i]) !== -1) {
          intersection.push(this.props.samples[i]);
        }
      }
    }

    const ids = [];
    intersection.map((sample) => {
      const id = this.props.selectedSamples.indexOf(sample);
      ids.push(id)
    });

    ids.sort().reverse().map((id) => {
      this.props.removeSelection(id);
    });
  }

  render() {
    const intersection = [];
    if (this.props.selectedSamples.length !== undefined) {
      for (var i = 0; i < this.props.samples.length; i++) {
        if (this.props.selectedSamples.indexOf(this.props.samples[i]) !== -1) {
          intersection.push(this.props.samples[i]);
        }
      }
    }
    const samples = this.props.samples.map((sample) => {
      const selectedSamples = this.props.selectedSamples;
      if (selectedSamples.length == undefined || selectedSamples.indexOf(
        sample) === -1) {
        return (
          <div 
            className="color-sample"  
            onClick={() => this.addSample(sample)}
            key={sample} 
            style={{background: sample, height: 50, width: 92}} 
          >
            <i className="fa fa-plus" style={{color: 'rgb(255, 255, 255)'}} />
          </div>
        );
      } else if (selectedSamples.indexOf(sample) > -1) {
        return (
          <div 
            className="color-sample color-sample--selected"  
            onClick={() => this.deleteSample(sample)}
            key={sample} 
            style={{background: sample, height: 50, width: 92}} 
          >
            <i className="fa fa-times" style={{color: 'rgb(255, 255, 255)'}} />
          </div>
        );
      } 
    });
    return (
      <div style={{background: this.props.COLOR}}>
        <div 
          className="container color-samples-container" 
          style={{background: 'rgb(255, 255, 255)'}}
        >
          <h4><strong>Darker and Lighter</strong></h4>
          <div className="color-samples-wrapper">
            <div 
              className="color-samples" 
              style={{background: `${this.props.darkBackground
                  ? 'rgb(34,34,34)' 
                  :'rgb(245, 245, 245)'}`
              }}
            >
              {samples}             
            </div>
          </div>
          <footer className="color-samples-footer">
            <button 
              onClick={this.handleToggleBackground.bind(this)} 
              className="btn btn--default"
            >
              {this.props.darkBackground
                  ? 'Light background'
                  : 'Dark background'
              }
            </button>
            <button 
              onClick={this.selectAllSamples.bind(this)} 
              className="btn btn--default"
            >
              Select all
            </button>
            <button 
              onClick={this.removeAllSelections.bind(this)} 
              className="btn btn--danger" 
              style={{display: `${intersection.length ? '' : 'none'}`}}
            >
              Remove all
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
