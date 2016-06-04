import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import ExportLink from '../components/export_page/export_link';

class ExportPage extends Component {
  componentWillMount() {
    if (this.props.selectedSamples.length !== undefined) {
      const modifiedSamples = [];
      let i=1;
      function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
      function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
      function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
      function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
      
      this.props.selectedSamples.map((sample) => {
        const R = hexToR(sample);
        const G = hexToG(sample);
        const B = hexToB(sample);

        modifiedSamples.push({
          hex: sample, 
          value: `color-${i}`, 
          rgb: `rgb(${R}, ${G}, ${B})`
        });
        i=i+1;
      });
      this.props.modifySamples(modifiedSamples);
    }
  }
  
  drawTable() {
    if (this.props.modifiedSamples.length == undefined) {
      return (
        <tr>
          <td colSpan="4">Select Colors Before Exporting</td>
        </tr>
      );
    }
    let i=1;
    return (
      this.props.modifiedSamples.map((sample) => {
        return (
            <tr key={sample.hex}>
            <td style={{background: sample.hex}}></td>
            <td>{sample.hex}</td>
            <td>{sample.rgb}</td>
            <td>
              <input 
                className="form-control" 
                type="text" 
                value={sample.value}
                onChange={event => this.handleChange(sample,
                  event.target.value)}
              />
            </td>
          </tr>
        );
      })
    );
  }

  handleChange(sample, value) {
    let modifiedSamples = [];
    let samples = this.props.modifiedSamples;
    let id = samples.indexOf(sample);
    let item = this.props.modifiedSamples[id];
    item.value = value;
    modifiedSamples[id] = item;
    this.setState({ modifiedSamples: modifiedSamples})
  }

  drawCode() {
    if (this.props.modifiedSamples.length !== undefined) {
      switch (this.props.export_type){
      case 'Sass':
        return (this.props.modifiedSamples.map((sample) => {
          return (
            <code key={sample.hex}>
              <span className="code__colored" >
                ${sample.value}: 
              </span>
              <span>
                &nbsp;{sample.hex};<br></br>
              </span>
            </code>
          );
        }));
      case 'Less':
        return (this.props.modifiedSamples.map((sample) => {
          return (
            <code key={sample.hex}>
              <span className="code__colored" >
                @{sample.value}: 
              </span>
              <span>
                &nbsp;{sample.hex};<br></br>
              </span>
            </code>
          );
        }));
      case 'Stylus':
        return (this.props.modifiedSamples.map((sample) => {
          return (
            <code key={sample.hex}>
              <span className="code__colored" >
                {sample.value} = 
              </span>
              <span>
                &nbsp;{sample.hex}<br></br>
              </span>
            </code>
          );
        }));
      }
    }
  }

  render() {
    return (
      <div className="content">
        <div className="export container">
          <h1>
            <strong>
              Customize and Export colors for Sass, Less or Stylus
            </strong>
          </h1>
          <table className="export-table">
            <thead>
              <tr>
                <th>Color</th>
                <th>Hex value</th>
                <th>RGB value</th>
                <th>Variable name</th>
              </tr>
            </thead>
            <tbody>
              {this.drawTable()}
            </tbody>
          </table>
          <div className="preprops">
            <div 
              style={{display: `${this.props.selectedSamples.length 
                  ? 'block' 
                  : 'none'}`}}
            >
              <h2 className="export__title">Export your code</h2>
              <div className="preprops__links">
                <ExportLink 
                  changeExportType={this.props.changeExportType} 
                  currentType={this.props.export_type}
                >
                  Sass
                </ExportLink>
                <ExportLink 
                  changeExportType={this.props.changeExportType} 
                  currentType={this.props.export_type}
                >
                  Less
                </ExportLink>
                <ExportLink 
                  changeExportType={this.props.changeExportType} 
                  currentType={this.props.export_type}
                >
                  Stylus
                </ExportLink>
              </div>
              <div className="preprops__code">
                <pre>
                    {this.drawCode()}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSamples: state.samples,
    modifiedSamples: state.modifiedSamples,
    export_type: state.colors.export_type
  }
}

export default connect(mapStateToProps, actions)(ExportPage)