import React from 'react';
import './App1.css'; // Ensure you have the necessary CSS file

const headerStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  paddingLeft: '30px',
 
};

const listItemStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  paddingLeft: '30px',
};

const DisperseDyes = () => {
  return (
    <div className='dd'>
      <h2 style={headerStyle}>DISPERSE DYES</h2>
      <ol type="I"><br></br>
        <li style={listItemStyle}>YELLOW SF CONC</li>
        <li style={listItemStyle}>YELLOW BROWN 2RFL</li>
        <li style={listItemStyle}>DARK RED 28</li>
        <li style={listItemStyle}>SCARLET RR</li>
        <li style={listItemStyle}>ORANGE 3R 150%</li>
        <li style={listItemStyle}>YELLOW 10 GN</li>
        <li style={listItemStyle}>PINK 5BN</li>
        <li style={listItemStyle}>NAVY BLUE 3G H/C</li>
        <li style={listItemStyle}>SACRLET GS</li>
        <li style={listItemStyle}>GOLDEN YELLOW 2GD</li>
        <li style={listItemStyle}>YELLOW 7GD</li>
        <li style={listItemStyle}>BLUE BRSL</li>
        <li style={listItemStyle}>YELLOW C4G H/C</li>
        <li style={listItemStyle}>YELLOW 4G 200%</li>
        <li style={listItemStyle}>BRILL BLUE SR</li>
        <li style={listItemStyle}>BRILL BLUE GRL</li>
        <li style={listItemStyle}>BRILL RED F3BS</li>
        <li style={listItemStyle}>BLUE 3REL</li>
        <li style={listItemStyle}>BLUE 2R CONC</li>
        <li style={listItemStyle}>ORANGE RL 200%</li>
        <li style={listItemStyle}>BRILL BLUE DBR CONC.</li>
      </ol>
    </div>
  );
};

export default DisperseDyes;