import React, { useState } from 'react'
import QRCode from 'react-qr-code';

function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleQrCodeGeneration() {
        setQrCode(input);
        setInput('');
    }

  return (
    <div>
      <div style={{marginBottom: '20px'}}>
        <h2>QR Code Generator</h2>
        <input type="text" value={input} placeholder='Enter your value' onChange={(e) => setInput(e.target.value)}/>
        <button disabled={(input && input.trim() !== "") ? false : true}  onClick={handleQrCodeGeneration}>Generate QR Code</button>
      </div>
      <div>
        <QRCode value={qrCode} size={400} bgColor='#fff' />
      </div>
    </div>
  )
}

export default QRCodeGenerator
