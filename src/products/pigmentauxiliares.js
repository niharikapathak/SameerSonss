import React from 'react';
import './App1.css'; 
const styles = {
  section: {
    paddingLeft: '30px',
    
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    color:'red',
  },
  list: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

const PigmentEmulsion = () => {
  return (

    <div className="content">
    <div style={styles.section}>

    
      <h2 style={styles.header}>PIGMENT EMULSION</h2>
      <ol>
        <li style={styles.list}>YELLOW GRKW</li>
        <li style={styles.list}>YELLOW 2G</li>
        <li style={styles.list}>GOL. YELLOW RM</li>
        <li style={styles.list}>ORANGE 5G</li>
        <li style={styles.list}>RED GR</li>
        <li style={styles.list}>GREEN G</li>
        <li style={styles.list}>GREEN 2G</li>
        <li style={styles.list}>TUR. BLUE G</li>
        <li style={styles.list}>BLUE B</li>
        <li style={styles.list}>NAVY BLUE B</li>
        <li style={styles.list}>VIOLET B</li>
        <li style={styles.list}>BROWN GR</li>
        <li style={styles.list}>BLACK NG</li>
        <li style={styles.list}>BLACK B</li>
        <li style={styles.list}>OLIVE GREEN</li>
        <li style={styles.list}>BOURDEX</li>
        <li style={styles.list}>PINK B</li>
        <li style={styles.list}>RUBINE CB</li>
      </ol>
   
<br></br>

      <h2 style={styles.header}><br></br>TEXTILE AUXILIARIES</h2>
      <ol>
        <li style={styles.list}>WHITENING AG.2B</li>
        <li style={styles.list}>WHITENING AG LIQUID</li>
        <li style={styles.list}>O.T. PASTE & LIQUID</li>
        <li style={styles.list}>WHITE R</li>
        <li style={styles.list}>SCOURING AGENT</li>
        <li style={styles.list}>MERCERISING AGENT</li>
        <li style={styles.list}>WETTING AGENT</li>
        <li style={styles.list}>LEVELING AGENT</li>
        <li style={styles.list}>DEFOAMING AGENT</li>
        <li style={styles.list}>PE / PVA / MBX</li>
        <li style={styles.list}>DYE FIXING AGENT</li>
        <li style={styles.list}>FIXCER CCL</li>
        <li style={styles.list}>ECO FIX</li>
        <li style={styles.list}>PRINTO FIX</li>
        <li style={styles.list}>SILICON SOFTNER</li>
        <li style={styles.list}>CATONIC SOFTNER</li>
        <li style={styles.list}>NON-IONIC SOFTNER</li>
        <li style={styles.list}>BINDER 9400/4000</li>
        <li style={styles.list}>BINDER SLN/ECN</li>
        <li style={styles.list}>BINDER GOLD / PEST</li>
        <li style={styles.list}>COTTON KHADI</li>
        <li style={styles.list}>CARBONISED KHADI</li>
        <li style={styles.list}>STREACH KHADI</li>
        <li style={styles.list}>WATER</li>
        <li style={styles.list}>TREATMENT CHEM.</li>
      </ol>
    </div>
    </div>
  );
};

const PigmentAuxi = () => {
  return (
    <div>
      <PigmentEmulsion />
      
    </div>
  );
};

export default PigmentAuxi;
