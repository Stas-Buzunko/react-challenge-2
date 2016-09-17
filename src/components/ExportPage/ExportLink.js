import React, { PropTypes } from 'react';

const ExportLink = ({ currentType, children, changeExportType }) => {
  if (currentType === children) {
    return (
      <button
        className="btn btn--primary"
        onClick={() => changeExportType(children)}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="btn btn--default"
      onClick={() => changeExportType(children)}
    >
      {children}
    </button>
  );
};

export default ExportLink;

ExportLink.propTypes = {
  currentType: PropTypes.any,
  children: PropTypes.any,
  changeExportType: PropTypes.func.isRequired,
};
