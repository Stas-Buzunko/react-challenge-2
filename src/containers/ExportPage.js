import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import ExportLink from '../components/ExportPage/ExportLink';

function cutHex(h) { return (h.charAt(0) === '#') ? h.substring(1, 7) : h; }
function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16); }
function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16); }
function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16); }

class ExportPage extends Component {
  componentWillMount() {
    if (this.props.selectedSamples.length !== undefined) {
      const modifiedSamples = [];

      this.props.selectedSamples.map((sample, i) => {
        const R = hexToR(sample);
        const G = hexToG(sample);
        const B = hexToB(sample);

        modifiedSamples.push({
          hex: sample,
          value: `color-${i}`,
          rgb: `rgb(${R}, ${G}, ${B})`,
        });
      });
      this.props.modifySamples(modifiedSamples);
    }
  }

  drawTable() {
    if (!this.props.modifiedSamples.length) {
      return (
        <tr>
          <td colSpan="4">Select Colors Before Exporting</td>
        </tr>
      );
    }
    return (
      this.props.modifiedSamples.map(sample => (
        <tr key={sample.hex}>
          <td style={{ background: sample.hex }}></td>
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
      ))
    );
  }

  handleChange(sample, value) {
    const modifiedSamples = [];
    const samples = this.props.modifiedSamples;
    const id = samples.indexOf(sample);
    const item = this.props.modifiedSamples[id];
    item.value = value;
    modifiedSamples[id] = item;
    this.setState({ modifiedSamples });
  }

  drawCode() {
    let exportSamples;
    if (this.props.modifiedSamples.length !== undefined) {
      switch (this.props.export_type) {
        case 'Sass':
          exportSamples = this.props.modifiedSamples.map(sample => (
            <code key={sample.hex}>
              <span className="code__colored" >
                ${sample.value}:
              </span>
              <span>
                &nbsp;{sample.hex};<br></br>
              </span>
            </code>
            )
          );
          break;
        case 'Less':
          exportSamples = this.props.modifiedSamples.map(sample => (
            <code key={sample.hex}>
              <span className="code__colored" >
                @{sample.value}:
              </span>
              <span>
                &nbsp;{sample.hex};<br></br>
              </span>
            </code>
            )
          );
          break;
        case 'Stylus':
          exportSamples = this.props.modifiedSamples.map(sample => (
            <code key={sample.hex}>
              <span className="code__colored" >
                {sample.value} =
              </span>
              <span>
                &nbsp;{sample.hex}<br></br>
              </span>
            </code>
            )
          );
          break;
      }
    }
    return exportSamples;
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
              style={{ display: `${this.props.selectedSamples.length
                  ? 'block'
                  : 'none'}`,
              }}
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

const mapStateToProps = state => ({
  selectedSamples: state.samples,
  modifiedSamples: state.modifiedSamples,
  export_type: state.colors.export_type,
});

export default connect(mapStateToProps, actions)(ExportPage);

ExportPage.propTypes = {
  selectedSamples: PropTypes.array,
  modifySamples: PropTypes.func.isRequired,
  modifiedSamples: PropTypes.array,
  changeExportType: PropTypes.func.isRequired,
  export_type: PropTypes.string,
};
