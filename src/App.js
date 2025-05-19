import React, { useState } from 'react';
import './styles/App.css';
import InputForm from './components/InputForm';
import ResultBox from './components/ResultBox';

export default function App() {
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  return (
    <div className="app-container">
      <h1>Cipher Visualizer 🔐</h1>
      <InputForm setEncoded={setEncoded} setDecoded={setDecoded} />
      <ResultBox encoded={encoded} decoded={decoded} />
    </div>
  );
}
