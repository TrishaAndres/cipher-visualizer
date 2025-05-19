import React, { useState } from 'react';
import './InputForm.css';

export default function InputForm({ setEncoded, setDecoded }) {
  const [message, setMessage] = useState('');
  const [cipherKey, setCipherKey] = useState('1,2,3,4');

  const handleEncode = () => {
    const key = cipherKey.split(',').map(Number);
    let result = '';
    let index = 0;
    for (let char of message.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        let shift = key[index % key.length] % 26;
        let code = char.charCodeAt(0) + shift;
        if (code > 122) code -= 26;
        result += String.fromCharCode(code);
        index++;
      }
    }
    setEncoded(result);
  };

  const handleDecode = () => {
    const key = cipherKey.split(',').map(Number);
    let result = '';
    let index = 0;
    for (let char of message.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        let shift = key[index % key.length] % 26;
        let code = char.charCodeAt(0) - shift;
        if (code < 97) code += 26;
        result += String.fromCharCode(code);
        index++;
      }
    }
    setDecoded(result);
  };

  return (
    <div className="form-container">
      <textarea
        rows="5"
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <input
        type="text"
        value={cipherKey}
        onChange={(e) => setCipherKey(e.target.value)}
        placeholder="Enter cipher key (comma-separated)"
      />
      <div className="button-row">
        <button onClick={handleEncode}>Encode</button>
        <button onClick={handleDecode}>Decode</button>
      </div>
    </div>
  );
}
