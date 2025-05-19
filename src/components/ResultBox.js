import React from 'react';
import './ResultBox.css';

export default function ResultBox({ encoded, decoded }) {
  return (
    <div className="result-container">
      <div className="box">
        <h2>Encoded</h2>
        <p>{encoded}</p>
      </div>
      <div className="box">
        <h2>Decoded</h2>
        <p>{decoded}</p>
      </div>
    </div>
  );
}
