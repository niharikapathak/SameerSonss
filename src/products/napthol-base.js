import React from 'react';
import './App1.css'; // Ensure you have the necessary CSS file

const headerStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  paddingLeft: '30px',
  color:'red',
};

const listItemStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  paddingLeft: '30px',
};

const NaptholBase = () => {
  return (
    <div className='np'>
      <h2 style={headerStyle}>NAPTHOL BASE</h2>
      <br></br>
      <ol>
        <li style={listItemStyle}>NAPTHOL AS</li>
        <li style={listItemStyle}>NAPTHOL ASBS</li>
        <li style={listItemStyle}>NAPTHOL ASBO</li>
        <li style={listItemStyle}>NAPTHOLASD</li>
        <li style={listItemStyle}>NAPTHOL ASG</li>
        <li style={listItemStyle}>NAPTHOL ASSW</li>
        <li style={listItemStyle}>FAST SCARLETR BASE</li>
        <li style={listItemStyle}>FAST SCARLET G BASE</li>
        <li style={listItemStyle}>FAST SCARLET RC BASE</li>
        <li style={listItemStyle}>FAST YELLOWGC BASE</li>
        <li style={listItemStyle}>FAST CORINTH B BASE</li>
        <li style={listItemStyle}>FAST GARNET GBC BASE</li>
        <li style={listItemStyle}>FAST ORANGE GC BASE</li>
        <li style={listItemStyle}>FAST RED B BASE</li>
        <li style={listItemStyle}>FAST BLUE B BASE</li>
        <li style={listItemStyle}>SULPHUR BLACK</li>
        <li style={listItemStyle}>CONGO RED</li>
      </ol>
    </div>
  );
};

export default NaptholBase;