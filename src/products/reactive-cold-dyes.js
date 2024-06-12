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

const ReactiveCold =() => {
    return (
      <div>
        <h6>
  <center>
      <strong>
          <h2 style={{ color: '#2f2fa2' }}>Reactive COLD Dyes (Dischlorotriazine Type Cold Dyes)</h2>
      </strong>
  </center>
  <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0 }}>
      <li style={{ fontSize: '18px', marginBottom: '10px' }}>
          <strong>Advantage</strong> :: Advantage ::  Good Reactivity fastness and high economic efficiency in light shade.</li>
      <li style={{ fontSize: '18px' }}>
          <strong>Application</strong> :: Cold water dyeing at room temprature (25-30°C).
      </li>
  </ul>
  </h6>
  <div className="table-responsive">
  <table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
  <tr>
    <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      <span className="style20">
        <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}> SAMEER COLD DYES</strong>
      </span><br />
    <span class="style21">DISCHLOROTRIAZINE TYPE DYES</span></td>
    
    
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
            bgcolor="#FFF466"
            className="style8"
        
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          ></td>
          <td
            bgcolor="#FEF102"
            className="style9"
        
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style18" style={{ border: 'thin solid #000000' }}>
            <strong>YELLOW M8G</strong>
            <br />
            YELLOW 86
          </td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>20</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>5-6</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style11" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>1</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            bgcolor="#FFF589"
            className="style8"
        
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#FFF44A"
            className="style8"
         
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>YELLOW M4G</strong>
            <br />
            YELLOW 22
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>40</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>1</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
          <td
            bgcolor="#FFE85C"
            className="style8"
         
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#FEE34A"
            className="style8"
         
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>YELLOW MGR</strong>
            <br />
            YELLOW 7
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>40</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>6</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            bgcolor="#F9D028"
            className="style8"
            
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#FAB319"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>YELLOW M3R SPL&nbsp;&nbsp;&nbsp;
              <br />
            </strong>
            ORANGE 86 A
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>80</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            bgcolor="#F9D028"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#FAB319"
            className="style8"
           
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>GOLDEN&nbsp; YELLOW MR</strong>
            <br />
            YELLOW 44
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>60</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        {/* New rows */}
        <tr>
          <td
            bgcolor="#FAE649"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#F9C613"
            className="style8"
          
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>YELLOW M4R</strong>
            <br />
            ORANGE 14
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>30</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>1</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#F7A01D"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#F17A20"
            className="style8"
            
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>ORANGE M2R</strong>
            <br />
            ORANGE 4
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>180</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            bgcolor="#F5951D"
            className="style8"
          
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#F17225"
            className="style8"
          
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>ORANGE M2RJ</strong>
            <br />
            ORANGE 4 A
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>180</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            bgcolor="#D676A6"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#C51881"
            className="style8"
       
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>RED M5B</strong>
            <br />
            RED 2
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>1</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            bgcolor="#CE74A7"
            className="style8"
       
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#BE1C81"
            className="style8"
            
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong className="style22">RED M8B</strong>
            <br />
            RED 11
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>60</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            bgcolor="#BE1C81"
            className="style8"
         
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#B51F83"
            className="style8"
           
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>PINK MB</strong>
            <br />
            RED 74
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>80</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
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
            bgcolor="#812991"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>MAGNETA MB</strong>
            <br />
            VIOLET 13
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>30</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        <tr>
          <td
            bgcolor="#6DBAD4"
            className="style8"
         
            style={{ border: 'thin solid #000000',height: '50px', width: '100px' }}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#00A6D3"
            className="style8"
         
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>TUR. BLUE BLN</strong>
            <br />
            BLUE 140A
            <br />
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>120</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            bgcolor="#61A2DA"
            className="style8"
         
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#0266B4"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLUE MR</strong>
            <br />
            BLUE 4 A
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>50</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>6</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>
        <tr>
          <td
            bgcolor="#606CA8"
            className="style8"
         
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#2F4E91"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLUE MR G</strong>
            <br />
            BLUE 4
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>50</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>6</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>

        <tr>
          <td
            bgcolor="#2463B2"
            className="style8"
         
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#094696"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLUE M2R </strong>
            <br />
            BLUE 81
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>50</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>6</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>

    
        <tr>
          <td
            bgcolor="#174F80"
            className="style8"
         
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td
            bgcolor="#272570"
            className="style8"
          
            style={{ border: 'thin solid #000000' ,height: '50px', width: '100px'}}
          >
            &nbsp;
          </td>
          <td className="style6" style={{ border: 'thin solid #000000' }}>
            <strong>BLUE M3R </strong>
            <br />
            BLUE 9
          </td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
          <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
        </tr>

    


        

          


    </table>
    </div>
    </div>
      );
    }
    
    export default  ReactiveCold;