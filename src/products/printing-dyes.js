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

const PrintingDyes =() => {
    return (
        <div>
        <h6>
  <center>
      <strong>
          <h2 style={{ color: '#2f2fa2' }}>Reactive PRINTING Dyes (Monochlorotriazine Type Dyes)</h2>
      </strong>
  </center>
  <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0 }}>
      <li style={{ fontSize: '18px', marginBottom: '10px' }}>
          <strong>Advantage</strong> :: Advantage ::   Continuous matched build up and high colour yield adapted to a variety of pad-fixation techniques.</li>
      <li style={{ fontSize: '18px' }}>
          <strong>Application</strong> ::  Printing (102-150°C), Silicate print. 
      </li>
  </ul>
  </h6>
  <div className="table-responsive">
  <table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
  <tr>
    <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      <span className="style20">
        <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER HOT BRAND PRINTING DYES</strong>
      </span><br />
    <span class="style21">       MONOCHLOROTRIAZINE TYPE DYES</span></td>
    
    
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
          bgcolor="#FFF794"
          className="style8"
         
          style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#FEF102"
          className="style9"
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style18" style={{ border: 'thin solid #000000' }}>
          <strong>YELLOW H7GL</strong>
          <br />
          YELLOW 57
        </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
          6
        </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          G
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#FFF44A"
          className="style8"
        
          style={{ border: 'thin solid #000000',height: '50px', width: '100px'  }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#F6E303"
          className="style8"
          style={{ border: 'thin solid #000000',height: '50px', width: '100px'  }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>YELLOW H4G</strong>
          <br />
          YELLOW 18
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          80
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          G
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#FEC762"
          className="style8"
          
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px' }} >
          &nbsp;
        </td>
        <td
          bgcolor="#FEB31A"
          className="style8"
         
          style={{ border: 'thin solid #000000' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>GOLDEN YELLOW HR</strong>
          <br />
          ORANGE 12
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#F5951D"
          className="style8"
        
          style={{ border: 'thin solid #000000',height: '50px', width: '100px'  }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#F17A20"
          className="style8"
        
          style={{ border: 'thin solid #000000' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>ORANGE H2R</strong>
          <br />
          ORANGE 13
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#E1438D"
          className="style8"
       
          style={{ border: 'thin solid #000000',height: '50px', width: '100px'  }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#CC328A"
          className="style8"
         
          style={{ border: 'thin solid #000000' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED H8B</strong>
          <br />
          RED 31
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          130
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
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#C6627C"
          className="style8"
         
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#C03F68"
          className="style8"
          
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED 6BX</strong>
          <br />
          RED 76
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          130
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#DC553F"
         
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#D82028"
          className="style8"
        
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED H7B</strong>
          <br />
          RED MIX
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
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
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#CC534A"
          className="style8"
     
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#DD0C33"
          className="style8"
         
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED H7B CRUDE</strong>
          <br />
          RED MIX
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
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
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#BE5156"
          className="style8"
        
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#B4263E"
          className="style8"
        
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED H7B N</strong>
          <br />
          RED MIX
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
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
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#AF3F2B"
          className="style8"
        
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#971311"
          className="style8"
        
          style={{ border: 'thin solid #000000' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED BROWN H4R</strong>
          <br />
          BROWN 9
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3-4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3-4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#945EA9"
          className="style8"
      
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#7F2A8F"
          className="style8"
     
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>MAGENTA HB</strong>
          <br />
          VIOLET 46
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#94619C"
          className="style8"
         
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#85388A"
          className="style8"
        
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>PURPLE HB</strong>
          <br />
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          80
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#58595B"
          className="style8"
         
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#222021"
          className="style8"
        
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>BLACK HN</strong>
          <br />
          BLACK 8
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
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
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#6C7EBE"
          className="style8"
     
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#4953A8"
          className="style8"
         
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>BLUE 5RH</strong>
          <br />
          BLUE 13
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          120
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          2
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#6F83C0"
          className="style8"
        
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#235AAC"
          className="style8"
          
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>BLUE H3RP</strong>
          <br />
          BLUE 49
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          130
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          2
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
    </table>
   
  <div className="table-responsive">
  <table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
  <tr>
    <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      <span className="style20">
        <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>   SAMEER P-SERIES PRINTING DYES</strong>
      </span><br />
    <span class="style21">       MONOCHLOROTRIAZINE TYPE DYES</span></td>
    
    
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
          bgcolor="#FFF228"
          className="style8"
        
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
        </td>
        <td
          bgcolor="#FEF102"
          className="style9"
          style={{ border: 'thin solid #000000' }}
        >
          &nbsp;
        </td>
        <td className="style18" style={{ border: 'thin solid #000000' }}>
          <strong>YELLOW P6GS</strong>
          <br />
          YELLOW 95
        </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
          6
        </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          G
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#FEDD02"
          className="style8"
      
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#FECD04"
          className="style8"
          style={{ border: 'thin solid #000000' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>YELLOW P2RN</strong>
          <br />
          YELLOW 181
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#FCB589"
          className="style8"
        
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#F59445"
          className="style8"
         
          style={{ border: 'thin solid #000000' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>&nbsp;ORANGE P2R</strong>
          <br />
          ORANGE 35
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#EA979F"
          className="style8"
          
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#DF577F"
          className="style8"
       
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED PBN</strong>
          <br />
          RED 24
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          130
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3-4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#D67294"
          className="style8"
   
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#CF5181"
          className="style8"
   
          style={{ border: 'thin solid #000000' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED P3B</strong>
          <br />
          RED 45
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          130
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#D57A9B"
          className="style8"
  
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#C14C83"
          className="style8"
         
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED P4B</strong>
          <br />
          RED 245
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          150
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
          3-4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#C46E9B"
          className="style8"
         
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#C33D86"
          className="style8"
     
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>RED P6B</strong>
          <br />
          RED 218
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          150
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#3BC3D9"
          className="style8"
         
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#01B0C3"
          className="style8"
         
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>TUR. BLUE PGR</strong>
          <br />
          BLUE 72
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          120
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
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
        <td
          bgcolor="#4379BF"
          className="style8"
         
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#0266B4"
          className="style8"
          
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>BLUE P3R | PN2R</strong>
          <br />
          BLUE 49
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          130
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          2
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#1481C4"
          className="style8"
          
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#0173BC"
          className="style8"
       
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>BLUE P3R SPL</strong>
          <br />
          BLUE 49 A
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          130
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          2
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#6B7FBC"
          className="style8"
         
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#4550A2"
          className="style8"
          
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>BLUE P5R</strong>
          <br />
          BLUE 13&nbsp;
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          120
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4-5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          2
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#94619C"
          className="style8"
       
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#7C2F81"
          className="style8"
        
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>PURPLE PB</strong>
          <br />
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          100
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          4
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          P
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#6D94BF"
          className="style8"
       
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#DF577F"
          className="style8"
         
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>NAVY P2R | PNR</strong>
          <br />
          <strong>BLACK 39</strong>
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
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          3
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          F
        </td>
      </tr>
      <tr>
        <td
          bgcolor="#767779"
          className="style8"
        
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#3E3E40"
          className="style8"
          
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>BLACK PGRR</strong>
          <br />
          BLUE MIX
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          120
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
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
        <td
          bgcolor="#617E84"
          className="style8"
         
          style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          bgcolor="#222021"
          className="style8"
         
          style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>BLACK PNRR</strong>
          <br />
          <strong>BLACK MIX</strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          120
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5-6
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          5
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>
          G
        </td>
      </tr>
    </table>
</div>    </div>
    </div>



);
}

export default  PrintingDyes;