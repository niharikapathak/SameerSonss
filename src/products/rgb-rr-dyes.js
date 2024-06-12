import React from 'react';
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



const RRDDyes = () => {
  return (
    <div>
      <h6>
        <strong>
         <center> <h2 style={{ color: '#2f2fa2' }}>RGB & RR Dyes (Tri-Functional Dyes)</h2></center>
        </strong>
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0 }}>
        <li style={{ fontSize: '18px', marginBottom: '10px' }}>
          Advantage :: Wide range of colours, excellent colour fastness and compatible in combination.
        </li>
        <li style={{ fontSize: '18px' }}>
          Application :: Exhaust Dyeing (80-85°C).
        </li>
      </ul>
      </h6>

     <center><table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
        <tr>
          <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
            <span className="style20">
              <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER & SONS</strong>
            </span><br /><span class="style21">
            TRI-FUNCTIONAL DYES<br /></span>
          </td>
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
      <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#f9d831', height: '50px', width: '100px', background: '#F9D831' }}></td>
      <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#FDC210', height: '50px', width: '100px' }}> &nbsp;</td>
      <td className="style31" style={{ border: 'thin solid #000000' }}>YELLOW RGB</td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>100</td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>4-5</td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>4-5</td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>2</td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
    </tr>
    <tr>
      <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#e26078', height: '50px', width: '100px' }} 
          bgcolor="#E26078">
      </td>
      <td className="style8" 
          style={{ border: 'thin solid #000000', backgroundColor: '#c51d72' ,height:"50px", width:"100px"}}>
          &nbsp;
      </td>
      <td className="style30" style={{ border: 'thin solid #000000' }}>
          <strong>&nbsp;</strong><b>RED RGB</b>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
          120
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
      </td>
    </tr>
    <tr>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#3F8AA9', height: '50px', width: '100px' }} >
      </td>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#124074', height: '50px', width: '100px' }} bgcolor="#F09FF0">
        &nbsp;
      </td>
      <td className="style30" style={{ border: 'thin solid #000000' }}>
        NAVY BLUE RGB
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        120
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        G
      </td>
    </tr>

    <tr>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#7485b0', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#0a386a', height: '50px', width: '100px' }} bgcolor="#FF33CC">
        &nbsp;
      </td>
      <td className="style30" style={{ border: 'thin solid #000000' }}>
        BLUE RGB
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        150
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </td>
    </tr>
    <tr>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#f7c92e', height: '50px', width: '100px' }} bgcolor="#AE3E2A">
        &nbsp;
      </td>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#fab319', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style30" style={{ border: 'thin solid #000000' }}>
        ULTRA YELLOW RGB
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        G
      </td>
    </tr>
    <tr>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#f7a01d', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" height="50px" width="100px" style={{ border: 'thin solid #000000', backgroundColor: '#f17a20' }}>
        &nbsp;
      </td>
      <td className="style30" style={{ border: 'thin solid #000000' }}>
        ULTRA ORANGE RGB
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </td>
    </tr>

    <tr>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#d0597f', height: '50px', width: '100px' }} bgcolor="#D0597F">
        &nbsp;
      </td>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#b52175', height: '50px', width: '100px' }}  bgcolor="#B52175">
        &nbsp;
      </td>
      <td className="style30" style={{ border: 'thin solid #000000' }}>
        ULTRA RED RGB
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
    <tr>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#e46578', height: '50px', width: '100px' }}  bgcolor="#E46578">
        &nbsp;
      </td>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#af1e23', height: '50px', width: '100px' }}  bgcolor="#AF1E23">
        &nbsp;
      </td>
      <td className="style30" style={{ border: 'thin solid #000000' }}>
        ULTRA CARAMINE RGB
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        100
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
      </table>
      </center> 
      <center> <table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
        <tr>
          <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
            <span className="style20">
              <strong style={{ fontFamily: 'Bodoni MT',  }}>SAMEER & SONS</strong>
            </span>
          </td>
          <td className="style29" align="center" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }} valign="baseline">
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
      <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#fadb2b', height: '50px', width: '100px' }} bgcolor="#FADB2B">
      </td>
      <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#fdc60a',  height: '50px', width: '100px'  }} bgcolor="#FDC50C">
        &nbsp;
      </td>
      <td className="style31" style={{ border: 'thin solid #000000' }}>
        YELLOW RR
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        100
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        G
      </td>
    </tr>
    <tr>
      <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#f9af34', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#f58320', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style31" style={{ border: 'thin solid #000000' }}>
        <strong>&nbsp;ORANGE RR</strong>
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        150
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
    <tr>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#e77e82', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#cd3e74', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style31" style={{ border: 'thin solid #000000' }}>
        RED RR
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        100
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style11" style={{ border: 'thin solid #000000' }}>
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
    <tr>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#4497bf', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8"  style={{ border: 'thin solid #000000', backgroundColor: '#22527a', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style30" style={{ border: 'thin solid #000000' }}>
        BLUE RR
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        150
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </td>
    </tr>
          </table>
          </center>
    </div>
  );
}

export default RRDDyes;


