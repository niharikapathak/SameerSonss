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

const PremiumDyes =() => {
    return (
        <div>
        <h6>
  <center>
      <strong>
          <h2 style={{ color: '#2f2fa2' }}>PREMIUM Series Dyes (Multispeciality Dyes)</h2>
      </strong>
  </center>
  <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0 }}>
      <li style={{ fontSize: '18px', marginBottom: '10px' }}>
          <strong>Advantage</strong> :: Advantage :: Excellent compatibility, Good fastness, Reproductability and highly purified dyes</li>
      <li style={{ fontSize: '18px' }}>
          <strong>Application</strong> :: Exhaust Dyeing (60°C) , Cold-Pad-Batch, Continuous Dyeing.
      </li>
  </ul>
  </h6>
  <table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
  <tr>
    <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
      <span className="style20">
        <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER & SONS</strong>
      </span><br /><span class="style21">
      MULTISPECALIST DYES<br /></span>
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
      <td   className="style8"
        style={{border: 'thin solid #000000', backgroundColor: '#FFB617', height: '50px', width: '100px'}}
      >
      </td>
      <td   className="style8"
        style={{border: 'thin solid #000000', backgroundColor: '#ED951A',height: '50px', width: '100px'}}
      >
        &nbsp;
      </td>
      <td className="style6"
        style={{border: 'thin solid #000000'}}
      ><strong>
ORANGE W3R
      </strong>
        
      </td>
        <td className="style11" style={{ border: 'thin solid #000000' }}>
        200
      </td>
      <td className="style11" 
        style={{border: 'thin solid #000000'}}
      >
        4
      </td>
      <td className="style11" 
        style={{border: 'thin solid #000000'}}
      >
        5
      </td>
      <td className="style11" 
        style={{border: 'thin solid #000000'}}
      >
        4-5
      </td>
      <td className="style19" 
        style={{border: 'thin solid #000000'}}
      >
        3-4
      </td>
      <td 
       
      className="style19" 
        style={{border: 'thin solid #000000'}}>
        G
      </td>
    </tr>
    <tr>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#f0a019', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#e97424' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>&nbsp;</strong><b>ORANGE CD</b>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>200</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
      </tr>
      <tr>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#eb801e', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#ee5c21', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}><strong>ORANGE RS</strong></td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>200</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
      </tr>
      <tr>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#ec3024', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#b92025', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}><strong>ORANGE G | 4R</strong></td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>200</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
      </tr>
      <tr>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#ee544c', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#e41f26', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}><strong>SCARLET 2GF</strong></td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>120</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
      </tr>
      <tr>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#d6553f', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
          style={{ border: 'thin solid #000000', backgroundColor: '#cd2228', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}><strong>RED W3R</strong></td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>200</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
      </tr>
      <tr>
        <td
          className="style8"
       
          style={{ border: 'thin solid #000000', backgroundColor: '#b63d72' ,height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          className="style8"
        
          style={{ border: 'thin solid #000000', backgroundColor: '#ab2466',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>  RUBINE GD
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>200</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
      </tr>
      <tr>
        <td
          className="style8"
        
          style={{ border: 'thin solid #000000', backgroundColor: '#b63b67', height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          className="style8"
          
          style={{ border: 'thin solid #000000', backgroundColor: '#a41f54', height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>   DEEP RED CD
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>200</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
      </tr>
      <tr>
        <td
          className="style8"
        
          style={{ border: 'thin solid #000000', backgroundColor: '#8e4b52', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
       
          style={{ border: 'thin solid #000000', backgroundColor: '#6f122f',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>  MAROON WBR
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>120</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
      </tr>
      <tr>
        <td
          className="style8"
      
          style={{ border: 'thin solid #000000', backgroundColor: '#366fb6', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
        
          style={{ border: 'thin solid #000000', backgroundColor: '#0054a5', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>BLUE FNG
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>150</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5-6</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
      </tr>
      <tr>
        <td
          className="style8"
          
          style={{ border: 'thin solid #000000', backgroundColor: '#2a82c2', height: '50px', width: '100px'}}
        >
          &nbsp;
        </td>
        <td
          className="style8"
         
          style={{ border: 'thin solid #000000', backgroundColor: '#015aaa',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong> 
          SKY BLUE G
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>120</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5-6</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
      </tr>
   

      {/* New rows */}
      <tr>
        <td
          className="style8"
       
          style={{ border: 'thin solid #000000', backgroundColor: '#008ece', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
         
          style={{ border: 'thin solid #000000', backgroundColor: '#0161ae', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
          <strong>
          BLUE RE
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5-6</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
      </tr>
      <tr>
        <td
          className="style8"
         
          style={{ border: 'thin solid #000000', backgroundColor: '#596575',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
         
          style={{ border: 'thin solid #000000', backgroundColor: '#272727', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>BLACK WNN
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>150</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
      </tr>
      <tr>
        <td
          className="style8"
        
          style={{ border: 'thin solid #000000', backgroundColor: '#3b4850',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
         
          style={{ border: 'thin solid #000000', backgroundColor: '#1a1a1a',height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>BLACK Z
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>150</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
      </tr>
      <tr>
        <td
          className="style8"
        
          style={{ border: 'thin solid #000000', backgroundColor: '#8b665d', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td
          className="style8"
    
          style={{ border: 'thin solid #000000', backgroundColor: '#62352f', height: '50px', width: '100px' }}
        >
          &nbsp;
        </td>
        <td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>
          BROWN W3R
          </strong>
        </td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>200</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
        <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
      </tr>
      
    </table>
    </div>        
      
  );
}

export default PremiumDyes;
