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

const ReactiveMe = () => {
    return (
        <div>
        <h6>
          <center>  <strong><h2 style={{ color: '#2f2fa2' }}>Reactive ME Dyes (Bi-Functional Dyes)</h2></strong></center>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0 }}>
        <li style={{ fontSize: '18px', marginBottom: '10px' }}>
                Advantage :: Bright Colours, High fastness in washing and Easy shading shading.</li>
                <li style={{ fontSize: '18px' }}>Application :: Exhaust Dyeing (60°C) , Cold-Pad-Batch, Continuous Dyeing.</li>
            </ul>
        </h6>
        <Table className='style1'>
            <tr>
            <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
            <span className="style20">
              <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER & SONS</strong>
            </span>
            <br />
                    <span className="style21">MILD EXHAUSTIVE(ME)DYES</span>
                </td>
                <Td className="style4" align="center"  bgColor="#DEF3FD">
                    Solubility g/l AT RT
                </Td>
                <Td className="style4" bgColor="#DEF3FD">
                    light
                </Td>
                <Td className="style4" bgColor="#DEF3FD">
                    washing
                </Td>
                <Td className="style4" bgColor="#DEF3FD">
                    perspiration
                </Td>
                <Td className="style4" bgColor="#DEF3FD">
                    hypochlorite
                </Td>
                <Td className="style4" bgColor="#DEF3FD">
                    Dischargeability
                </Td>
            </tr>
            <tr>
                <TdHeader bgColor="#FFF450" height="50px" width="100px"></TdHeader>
                <TdHeader bgColor="#FEF102" height="50px" width="100px"></TdHeader>
                <Td className="style18">
                    <strong>YELLOW ME4GL</strong><br />
                    YELLOW 160 A
                </Td>
                <Td className="style11">
                    200
                </Td>
                <Td className="style11">
                    4-5
                </Td>
                <Td className="style11">
                    5
                </Td>
                <Td className="style11">
                    5
                </Td>
                <Td className="style19">
                    3-4
                </Td>
                <Td className="style19">
                    G
                </Td>
            </tr>
            <tr>
                <TdHeader bgColor="#F9D92E" height="50px" width="100px"></TdHeader>
                <TdHeader bgColor="#F4CC2C" height="50px" width="100px"></TdHeader>
                <Td className="style6">
                    <span><strong>GOLDEN YELLOW MERL</strong></span><br />
                    <span className="style16">YELLOW145</span>
                </Td>
                <Td className="style19">
                    200
                </Td>
                <Td className="style19">
                    5
                </Td>
                <Td className="style19">
                    5
                </Td>
                <Td className="style19">
                    4
                </Td>
                <Td className="style19">
                    3-4
                </Td>
                <Td className="style19">
                    F
                </Td>
            </tr>

            <tr>
      <td className="style8"  bgcolor="#F9D831" style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#FDC210"   style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>GOLDEN YELLOW ME3RL</strong></span><br className="style16" />
        <span className="style16">YELLOW 205</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        200
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
        3
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#F7A01D"  style={{ border: 'thin solid #000000',height:'50px', width: "50px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#F17923"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>ORANGE ME2RL</strong></span><br className="style16" />
        <span className="style16">ORANGE 122</span>
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
      <td className="style8" bgcolor="#EA979F" style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#E35784"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>RED CF(MEGF)</strong></span><br className="style16" />
        <span className="style16">RED 223</span>
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
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        G
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#D67294"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#CF5181"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>RED ME3BL</strong></span><br className="style16" />
        <span className="style16">RED194</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        100
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
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#D6789D" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#C14C83" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>RED ME4BL</strong></span><br className="style16" />
        <span className="style16">RED195</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        200
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
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
      <td className="style8" bgcolor="#C56E9B" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#C33D86" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>RED ME6BL</strong></span><br className="style16" />
        <span className="style16">RED250</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        200
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
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#9660AB" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#812991" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>VIOLET ME2RL</strong></span><br className="style16" />
        <span className="style16">MAGENTA XL</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        80
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
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#895FA9" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#6A2C91" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <strong>VIOLET MERL</strong>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        80
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
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
    
    <tr>
      <td className="style8" bgcolor="#1F6157" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#03493F" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>GREEN MEBL</strong></span><br className="style16" />
        <span className="style16">GREEN 19 A</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        80
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        2-3
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#2562B2" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#094697" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>BLUE ME2RL</strong></span><br className="style16" />
        <span className="style16">BLUE 248</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        100
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
        3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#65A3DC" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#0266B4" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>BLUE BRF</strong></span><br className="style16" />
        <span className="style16">BLUE 221</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        120
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
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
        F
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#255D8E" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#304057" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>BLUE BF</strong></span><br className="style16" />
        <span className="style16">BLUE 222</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        150
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
        2
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        G
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#235499" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#1C1565" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>NAVY BLUE ME2GL</strong></span><br className="style16" />
        <span className="style16">BLUE 194</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        150
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
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



        </Table>
    </div>
        );
        }
export default ReactiveMe;