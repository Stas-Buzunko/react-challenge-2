import React from 'react';

export default (props) => {
  if (props.currentType == props.children) {
    return (
      <button 
        className="btn btn--primary"
        onClick={() => props.changeExportType(props.children)}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <button 
        className="btn btn--default"
        onClick={() => props.changeExportType(props.children)}
      >
        {props.children}
      </button>
    );
  }
} 