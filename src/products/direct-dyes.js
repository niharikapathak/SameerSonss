import React from 'react';
//import './App.css'; // Create a CSS file for styles
import styled from 'styled-components';



// Define the styled components
const Table = styled.table`
  border: medium solid #000000;
  border-top-width: medium;
  border-top-style: solid;
  border-top-color: #000000;
  border-right-width: medium;
  border-right-style: solid;
  border-right-color: #000000;
  border-bottom-width: medium;
  border-bottom-style: solid;
  border-bottom-color: #000000;
  border-left-width: medium;
  border-left-style: solid;
  border-left-color: #000000;
  
`;

const Td = styled.td`
  border: thin solid #000000;
`;

const TdHeader = styled(Td)`
  background-color: ${(props) => props.bgColor};
`;

const DirectDyes =() => {
    return (
        <div>
        <h6>
  <center>
      <strong>
          <h2 style={{ color: '#2f2fa2' }}>Direct Dyes (Sunfast & Non Benzidine Direct Dyes)Direcrt Dyes (Sunfast & Non Benzidine Direct Dyes)</h2>
      </strong>
  </center>
  <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0 }}>
      <li style={{ fontSize: '18px', marginBottom: '10px' }}>
          <strong>Advantage</strong> :: Advantage ::  Easy and multiple application on different fibers, Good leveling and best fastness & brightness</li>
      <li style={{ fontSize: '18px' }}>
          <strong>Application</strong> ::  Exhaust Dyeing (80-85°C).
      </li>
  </ul>
  </h6>
  <div className="table-responsive">
  <table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
  <tr>
    <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      <span className="style20">
        <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER & SONS</strong>
      </span><br />
    <span class="style21">SUNFAST &amp; NON BENZIDINE DIRECT DYES</span></td>
    
    
    <td className="style29" align="center" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }} >
      Solubility g/l AT RT
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Light
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Washing
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Perspiration
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Hypochlorite
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Dischargibilty
    </td>
    </tr>
    <tr>
          <td
            className="style8"
           
            style={{ border: 'thin solid #000000', backgroundColor: '#FBE305',height: '50px', width: '100px' }}
          ></td>
          <td
            className="style8"
            style={{ border: 'thin solid #000000', backgroundColor: '#FFE500',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>YELLOW 3GX</strong>
            <br />
            YELLOW 6
          </td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            className="style8"
            
            style={{ border: 'thin solid #000000', backgroundColor: '#FFE900',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
        
            style={{ border: 'thin solid #000000', backgroundColor: '#FEDD02',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>YELLOW 5GLL</strong>
            <br />
            YELLOW 44 A
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>40</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            className="style8"
           
            style={{ border: 'thin solid #000000', backgroundColor: '#FFF12E',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
       
            style={{ border: 'thin solid #000000', backgroundColor: '#FFD900',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>YELLOW 5GLL H\C</strong>
            <br />
            YELLOW 44
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>40</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            className="style8"
            
            style={{ border: 'thin solid #000000', backgroundColor: '#F2E614',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
          
            style={{ border: 'thin solid #000000', backgroundColor: '#FFD401' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>CRYSOPHININE</strong>
            <br />
            YELLOW 12
          </td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            className="style8"
           
            style={{ border: 'thin solid #000000', backgroundColor: '#FCB817',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
           
            style={{ border: 'thin solid #000000', backgroundColor: '#F6931C' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>SUNFAST YELLOW RICH</strong>
            <br />
            YELLOW 99
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19"  style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19"  style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            className="style8"
           
            style={{ border: 'thin solid #000000', backgroundColor: '#F78E23',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
           
            style={{ border: 'thin solid #000000', backgroundColor: '#F36F24' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>ORANGE GL</strong>
            <br />
            ORANGE 34
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>6</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            className="style8"
            
            style={{ border: 'thin solid #000000', backgroundColor: '#F9881E',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
           
            style={{ border: 'thin solid #000000', backgroundColor: '#F36A22' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>ORANGE TGLL</strong>
            <br />
            ORANGE 39
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>6</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            className="style8"
          
            style={{ border: 'thin solid #000000', backgroundColor: '#F57921',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
          
            style={{ border: 'thin solid #000000', backgroundColor: '#F05225' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>VISCOSE ORANGE BRO</strong>
            <br />
            ORANGE 108
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>80</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            className="style8"
          
            style={{ border: 'thin solid #000000', backgroundColor: '#F4623B',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
          
            style={{ border: 'thin solid #000000', backgroundColor: '#F05A35' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>ORANGE SE</strong>
            <br />
            ORANGE 26
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>10</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            className="style8"
          
            style={{ border: 'thin solid #000000', backgroundColor: '#ED2E33',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            className="style8"
           
            style={{ border: 'thin solid #000000', backgroundColor: '#D0373C',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>SCARLET 4BS</strong>
            <br />
            RED 23
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            bgcolor="#BD607F"
            className="style8"
            
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#AD295B"
            className="style8"
           
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>LIGHT RED BLN</strong>
            <br />
            RED 80
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            bgcolor="#CC8EA5"
            className="style8"
         
            style={{ border: 'thin solid #000000',height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#AE3E70"
            className="style8"
            
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>RED 5BL</strong>
            <br />
            RED 81
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#EF4898"
            className="style8"
         
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#CF1779"
            className="style8"
           
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>ROSE RED</strong>
            <br />
            RED 227
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#EC184B"
            className="style8"
          
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#E62224"
            className="style8"
            
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>RED 4B (BENZO PURPLE)</strong>
            <br />
            RED 2
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>60</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#C16A8D"
            className="style8"
         
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#AB0B65"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>RED 12 B</strong>
            <br />
            RED 31
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>  
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
         
          </tr>
          <tr>
          <td
            bgcolor="#15BDE2"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#04A9DF"
            className="style8"
           
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>TUR.BLUE FBL</strong>
            <br />
            BLUE 199
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>60</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>6</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#5879BC"
            className="style8"
         
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#3D538F"
            className="style8"
           
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}>
            <strong>SKY BLUE FF</strong>
            <br />
            BLUE 15
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>50</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#33499C"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#00345C"
            className="style8"
           
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLUE GLL</strong>
            <br />
            BLUE 71
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>25</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#805F98"
            className="style8"
            
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#5F3080"
            className="style8"
        
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>VIOLET MB</strong>
            <br />
            VIOLET 9
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#684D90"
            className="style8"
         
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#512F83"
            className="style8"
         
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>HELIO B</strong>
            <br />
            VIOLET 51
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
         
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
          </tr>
          <tr>
          <td
            bgcolor="#4D5D5A"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#222222"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLACK GR</strong>
            <br />
            BLACK 22
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>25</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#4D5A6D"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#1F2022"
            className="style8"
         
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLACK OB</strong>
            <br />
            BLACK 80
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>30</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
    </table>
    </div>
    <table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
  <tr>
    <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      <span className="style20">
        <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER & SONS</strong>
      </span><br />
    <span class="style21">OTHER DIRECT DYES</span></td>
    
    
    <td className="style29" align="center" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }} >
      Solubility g/l AT RT
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Light
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Washing
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Perspiration
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Hypochlorite
    </td>
    <td className="style29" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      Dischargibilty
    </td>
    </tr>
    <tr>
          <td
            bgcolor="#ED145B"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          ></td>
          <td
            bgcolor="#D32026"
            
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style18" style={{ border: 'thin solid #000000' }}>
            <strong>CONGO RED</strong>
            <br />
            RED 28
          </td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>
            &nbsp;
          </td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            bgcolor="#961742"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#7E171B"
            className="style8"
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BOURDEX BW</strong>
            <br />
            RED 7
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>
            &nbsp;
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#2B5444"
            className="style8"
           
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#194232"
            className="style8"
       
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>GREEN B</strong>
            <br />
            GREEN 6
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>
            &nbsp;
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            bgcolor="#1C4849"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#141F1B"
            className="style8"
         
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>GREEN PLS</strong>
            <br />
            GREEN 1
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>
            &nbsp;
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            bgcolor="#5879BC"
            className="style8"

            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#3D538F"
            className="style8"
           
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLUE 2B</strong>
            <br />
            BLUE 6
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>
            &nbsp;
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            bgcolor="#2D519B"
            className="style8"
            
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          ></td>
          <td
            bgcolor="#014171"
            className="style8"
           
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000', }}>
            <strong>BLACK BT</strong>
            <br />
            BLUE 2
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>
            &nbsp;
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#2E3136"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#121212"
            className="style8"
          
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLACK E</strong>
            <br />
            BLACK 38
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>
            &nbsp;
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#8A5952"
            className="style8"
           
            style={{ border: 'thin solid #000000' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#5D221E"
            className="style8"
           
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BROWN MR</strong>
            <br />
            BROWN 2
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>
            &nbsp;
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
    </table>
    </div>
      );
    }
    
    export default DirectDyes;