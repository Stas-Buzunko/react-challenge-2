import React from 'react';

export default ({currentType, children, changeExportType}) => {
  if (currentType == children) {
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
} 