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

const PigmentDyes = () => {
  return (
    
    <div className='pg-dyes'>
      <h2 style={headerStyle}>PIGMENT DYES</h2><br></br>
      <ol type="I">
        <li style={listItemStyle}>BENIZIDINE YELLOW GR/ PIGMENT YELLOW GR 12</li>
        <li style={listItemStyle}>BENIZIDINE YELLOW GR 13</li>
        <li style={listItemStyle}>DIARYLIDE YELLOW HR/PIGMENT YELLOW 83</li>
        <li style={listItemStyle}>FAST YELLOW SC/ PIGMENT YELLOW 65</li>
        <li style={listItemStyle}>RED 2R/PIGMENT RED 2</li>
        <li style={listItemStyle}>LAKE RED C/PIGMENT RED 53:1</li>
        <li style={listItemStyle}>RUBINE TONER/ PIGMENT RED 57:1</li>
        <li style={listItemStyle}>MAROON TONER/PIGMENT RED 63:1</li>
        <li style={listItemStyle}>TOLUIDINE RED/PIGMENT RED 3</li>
        <li style={listItemStyle}>FAST RED FGR/PIGMENT RED 112</li>
        <li style={listItemStyle}>FAST RED FB/PIGMENT RED 146</li>
        <li style={listItemStyle}>NAPTHOLRED AC/PIGMENT RED 170</li>
        <li style={listItemStyle}>PERMANENT RED F1/ PIGMENT RED 184</li>
        <li style={listItemStyle}>PERMANENTRED F2/ PIGMENT RED 210</li>
        <li style={listItemStyle}>PHTHALOCYANINE GREEN/ PIGMENT GREEN 7</li>
        <li style={listItemStyle}>PIGMENT GREEN B/PIGMENT GREEN 8</li>
        <li style={listItemStyle}>PHTHALOCYANINE ALPHA BLUE 15:1</li>
        <li style={listItemStyle}>PHTHALOCYANINE BETA BLUE/ PIGMENT BLUE 15:3</li>
        <li style={listItemStyle}>PERMANENT ORANGE R / PIGMENT ORANGE 13</li>
        <li style={listItemStyle}>VIOLET TONER 772/ PIGMENT VIOLET 3</li>
        <li style={listItemStyle}>VIOLET TONER 777/PIGMENT VIOLET 27</li>
        <li style={listItemStyle}>MIDDLE CHROME/PIGMENT YELLOW 34</li>
        <li style={listItemStyle}>LEMON CHROME/PIGMENT YELLOW 34</li>
        <li style={listItemStyle}>PRIMEROSE CHROME/PIGMENT YELLOW 34</li>
        <li style={listItemStyle}>SCARLET CHROME/ PIGMENT RED 104</li>
        <li style={listItemStyle}>PIGMENT BLACK PASTE</li>
      </ol>
    </div>
   
  );
};

export default PigmentDyes;