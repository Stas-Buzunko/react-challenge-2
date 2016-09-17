import React, { PropTypes } from 'react';

const SampleDiv = ({ deleteSample, sample }) => (
  <div
    onClick={deleteSample}
    className="selected__color selected__color--active"
    style={{ background: sample, height: 48, width: 48 }}
  >
    <i
      className="fa fa-times selected__icon"
      style={{ color: 'rgb(255, 255, 255)' }}
    />
  </div>
);


export default SampleDiv;

SampleDiv.propTypes = {
  deleteSample: PropTypes.func.isRequired,
  sample: PropTypes.string,
};
