import React, {Component} from 'react';
import './nf-lift-box.css';

const NfLiftBox = (transcluded) => {
  return (
    <div className="lift-box">
      <div className="lift-box-header">
        {transcluded.header}
      </div>
      <div className="lift-box-content">
        {transcluded.content}
      </div>
    </div>
  )
};

export default NfLiftBox;