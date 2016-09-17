import React, { PropTypes } from 'react';

const RectangleDrawer = ({ scheme, selectedSamples, selectAllSamples, name }) => {
  function equal(a, b) {
    return a.length === b.length &&
    a.every((element, i) => element === b[i]);
  }
  // Array.prototype.equals = function( array ) {
  //   return this.length === array.length &&
  //   this.every( function(this_i,i) { return this_i === array[i]; });
  // };
  // const current = scheme.equals(selectedSamples);
  const current = equal(scheme, selectedSamples);
  return (
    <div
      className={`scheme ${current ? 'scheme--selected' : ''}`}
      onClick={() => selectAllSamples(scheme)}
    >
      <header className="scheme__header">
        <h3>
          <strong>{name}
            <i
              className="fa fa-check"
              style={{ display: `${current ? 'inline-block' : 'none'}` }}
            />
          </strong>
        </h3>
      </header>
      <div className="scheme__body">
        {scheme.map(color => (
          <div
            className="scheme__color"
            style={{ background: color }} key={color}
          />
        ))}
      </div>
    </div>
  );
};

export default RectangleDrawer;

RectangleDrawer.propTypes = {
  scheme: PropTypes.array,
  selectedSamples: PropTypes.array,
  selectAllSamples: PropTypes.func.isRequired,
  name: PropTypes.string,
};
