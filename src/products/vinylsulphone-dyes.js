import React from 'react';
import styled from 'styled-components';

// Define the styled components
const Table = styled.table`
  border: medium solid #000000;
`;

const Td = styled.td`
  border: thin solid #000000;
`;

const TdHeader = styled(Td)`
  background-color: ${(props) => props.bgColor};
`;

const VinylSulphone = () => {
  return (
    <div>
      <h6>
        <strong>
          <center>
            <h2 style={{ color: '#2f2fa2' }}>VinylSulphone VS Dyes</h2>
          </center>
        </strong>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li style={{ fontSize: '18px', marginBottom: '10px' }}>
            Advantage :: Easy Wash off, Good wet fastness & discharge ability
            and Outstanding color strength.
          </li>
          <li style={{ fontSize: '18px' }}>
            Application :: Exhaust Dyeing (60°C) , Cold-Pad-Batch, Continuous
            Dyeing & Printing also.
          </li>
        </ul>
      </h6>
      <center><table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
        <tr>
          <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
            <span className="style20">
              <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER & SONS</strong>
            </span><br />
            <span class="style21">
            VinylSulphone VS Dyes<br /></span>
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
            <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#FFF450', height: '50px', width: '100px' }}></td>
            <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#F3CB2B',height: '50px', width: '100px' }}>&nbsp;</td>
            <td className="style24" style={{ border: 'thin solid #000000' }}>
                <span className="style23"><strong>YELLOW R</strong></span><br className="style23" />
                <span className="style23">YELLOW 77</span>
            </td>
            <td className="style11" style={{ border: 'thin solid #000000' }}>100</td>
            <td className="style11" style={{ border: 'thin solid #000000' }}>5</td>
            <td className="style11" style={{ border: 'thin solid #000000' }}>4</td>
            <td className="style11" style={{ border: 'thin solid #000000' }}>4-5</td>
            <td className="style19" style={{ border: 'thin solid #000000' }}>1</td>
            <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
        </tr>
        <tr>
                <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#F6EF6B', height: '50px', width: '100px' }}>&nbsp;</td>
                <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#FFF34F' }}>&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>&nbsp;YELLOW FG</strong><br />
                    YELLOW 42
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>150</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>1</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>

            {/* Second Row */}
            <tr>
                <td className="style8" style={{ border: 'thin solid #000000', height: '50px', width: '100px', backgroundColor: '#FFE74C' }}>&nbsp;</td>
                <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#FEDD02', height: '50px', width: '100px' }}>&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>YELLOW GR</strong><br />
                    YELLOW 15
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>

            {/* Third Row */}
            <tr>
                <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#F9D831', height: '50px', width: '100px' }}>&nbsp;</td>
                <td className="style8" style={{ border: 'thin solid #000000', backgroundColor: '#FFCA08', height: '50px', width: '100px' }}>&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>YELLOW RNL</strong><br />
                    YELLOW 107
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>120</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>
              {/* First Row */}
              <tr>
                <td className="style8"  style={{ border: 'thin solid #000000',backgroundColor:"#F9D831", height:"50px" ,width:"100px" }}>&nbsp;</td>
                <td className="style8" bgcolor="#FDC210" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>YELLOW RTN</strong><br />
                    YELLOW 24
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>6</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
            </tr>

            {/* Second Row */}
            <tr>
                <td className="style8" bgcolor="#FEDD02"  style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }}>&nbsp;</td>
                <td className="style8" bgcolor="#F3CB2B" height="50px" width="100px" style={{ border: 'thin solid #000000' }}>&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>GOLDEN YELLOW R</strong><br />
                    YELLOW 201
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>

            {/* Third Row */}
            <tr>
                <td className="style8" bgcolor="#F7A84B"style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }}>&nbsp;</td>
                <td className="style8" bgcolor="#F28520" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>ORANGE 2R</strong><br />
                    ORANGE 7
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>

            <tr>
                <td className="style8" bgcolor="#F7A01D"  style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }} >&nbsp;</td>
                <td className="style8" bgcolor="#F17A20" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>ORANGE 3R</strong><br />
                    ORANGE 16
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>

            {/* Second Row */}
            <tr>
                <td className="style8" bgcolor="#DE4A7A" style={{ border: 'thin solid #000000' ,height:"50px" ,width:"100px"}} >&nbsp;</td>
                <td className="style8" bgcolor="#C51D72" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>RED NB</strong><br />
                    RED 180A
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
            </tr>

            {/* Third Row */}
            <tr>
                <td className="style8" bgcolor="#D37899"  style={{ border: 'thin solid #000000' ,height:"50px" ,width:"100px"}} >&nbsp;</td>
                <td className="style8" bgcolor="#C14C83" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>RED 5B</strong><br />
                    RED 180 A
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>150</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>1</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>
            <tr>
                <td className="style8" bgcolor="#EA979F"  style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }}>&nbsp;</td>
                <td className="style8" bgcolor="#DF577F" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>RED C2G</strong><br />
                    RED 106
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>60</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>1</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>

            {/* Second Row */}
            <tr>
                <td className="style8" bgcolor="#E081A1"  style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }}>&nbsp;</td>
                <td className="style8" bgcolor="#D21A70" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>RED BB</strong><br />
                    RED 21
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>100</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>2</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>G</td>
            </tr>

            {/* Third Row */}
            <tr>
                <td className="style8" bgcolor="#D77196"  style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }} >&nbsp;</td>
                <td className="style8" bgcolor="#BD206D" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>RED RBL</strong><br />
                    RED 198 A
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>130</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5-6</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
            </tr>

            {/* Fourth Row */}
            <tr>
                <td className="style8" bgcolor="#CE5E8C"  style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }} >&nbsp;</td>
                <td className="style8" bgcolor="#B12167" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>RED RB METALIC</strong><br />
                    RED 198
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>120</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5-6</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>3</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
            </tr>
            <tr>
            <td className="style8" bgcolor="#BD607F" style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }} >&nbsp;</td>
            <td className="style8" bgcolor="#AD295B" height="50px" style={{ border: 'thin solid #000000' }} width="100px">&nbsp;</td>
            <td className="style6" style={{ border: 'thin solid #000000' }}>
                <strong>RED BSID</strong><br />
                RED 111
            </td>
            <td className="style19" style={{ border: 'thin solid #000000' }}>150</td>
            <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
            <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
            <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
            <td className="style19" style={{ border: 'thin solid #000000' }}>3-4</td>
            <td className="style19" style={{ border: 'thin solid #000000' }}>F</td>
        </tr>
        </table>
        </center>
        <table className="style1" frame="border" style={{ border: 'medium solid #000000' }}>
        <tr>
          <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
            <span className="style20">
              <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER & SONS</strong>
            </span><br /><span class="style21">
            VinylSulphone VS Dyes<br /></span>
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
                <td className="style8" bgcolor='#45C5E2' style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }}>&nbsp;</td>
                <td className="style8" bgcolor="#00A9DC"style={{ border: 'thin solid #000000',height:"50px" ,width:"100px"}}>&nbsp;</td>
                <td className="style6" style={{ border: 'thin solid #000000' }}>
                    <strong>TUR. BLUE G</strong><br />
                    BLUE 21
                </td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>200</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>4-5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>5</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>2-3</td>
                <td className="style19" style={{ border: 'thin solid #000000' }}>P</td>
            </tr>


        <tr>
            <td className="style8" style={{ border: "thin solid #000000", backgroundColor: "#2DC1E5", height:"50px", width:"100px"}}>
                &nbsp;
            </td>
            <td className="style8" style={{ border: "thin solid #000000", backgroundColor: "#00A1EC" }}>
                &nbsp;
            </td>
            <td className="style32" style={{ border: "thin solid #000000" }}>
                <strong>TUR. BLUE H2GP</strong>
            </td>
            <td className="style11" style={{ border: "thin solid #000000" }}>
                200
            </td>
            <td className="style11" style={{ border: "thin solid #000000" }}>
                5
            </td>
            <td className="style11" style={{ border: "thin solid #000000" }}>
                4-5
            </td>
            <td className="style11" style={{ border: "thin solid #000000" }}>
                5
            </td>
            <td className="style19" style={{ border: "thin solid #000000" }}>
                2-3
            </td>
            <td className="style19" style={{ border: "thin solid #000000" }}>
                P
            </td>
        </tr>
        <tr>
            <td className="style8"  bgcolor="#945EA9" style={{ border: "thin solid #000000",height:"50px", width:"100px" }}>
                &nbsp;
            </td>
            <td className="style8" bgcolor="#7F2A8F" height="50px" width="100px" style={{ border: "thin solid #000000" }}>
                &nbsp;
            </td>
            <td className="style6" style={{ border: "thin solid #000000" }}>
                <strong>VIOLET 5R</strong><br />
                <span className="style16">VIOLET 5</span>
            </td>
            <td className="style19" style={{ border: "thin solid #000000" }}>
                100
            </td>
            <td className="style19" style={{ border: "thin solid #000000" }}>
                5
            </td>
            <td className="style19" style={{ border: "thin solid #000000" }}>
                4-5
            </td>
            <td className="style19" style={{ border: "thin solid #000000" }}>
                4-5
            </td>
            <td className="style19" style={{ border: "thin solid #000000" }}>
                4-5
            </td>
            <td className="style19" style={{ border: "thin solid #000000" }}>
                P
            </td>
        </tr>
        <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#60AFD8", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#4D83C3", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BLUE BB</strong>
                        <br />
                        BLUE 220
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        120
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        G
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#008ECC", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#0061AE", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BLUE R</strong>
                        <br />
                        BLUE 19
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        100
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5-6
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        3
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        F
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#8191C5", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#4558A7", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BLUE 3R</strong>
                        <br />
                        BLUE 28
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        100
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        6
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        3-4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        F
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#314781", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#003070", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>NAVY BLUE GG</strong>
                        <br />
                        BLUE203
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        200
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        3-4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        G
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#3A416B", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#162659", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BLACK B</strong>
                        <br />
                        BLACK 5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        200
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        3-4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        2
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        G
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#A2A0B5", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#7B7A8A", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BLACK RL</strong>
                        <br />
                        BLACK 31
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        200
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        2
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        F
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#839098", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#4E4D55", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BLACK HFGR</strong>
                        <br />
                        BLACK MIX
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        200
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        3-4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        2
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        F
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#748A97", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#464D5F", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BLACK N150</strong>
                        <br />
                        BLACK MIX
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        200
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        3-4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        2
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        G
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#737C85", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#464652", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BLACK GDN</strong>
                        <br />
                        BLACK MIX
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        150
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        3-4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        G
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#DE9666", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#C22D41", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BROWN GR</strong>
                        <br />
                        BROWN 18 A
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        100
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        1
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        F
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#DD7B62", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#B51730", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BROWN GR H\C</strong>
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        100
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        1
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        F
                    </td>
                </tr>
                <tr>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#D57962", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td
                        className="style8"
                        style={{ backgroundColor: "#A51628", height: "50px", width: "100px", border: "thin solid #000000" }}
                    >
                        &nbsp;
                    </td>
                    <td className="style32" style={{ border: "thin solid #000000" }}>
                        <strong>BROWN GR SPL</strong>
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        100
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4-5
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        4
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        1
                    </td>
                    <td className="style19" style={{ border: "thin solid #000000" }}>
                        F
                    </td>
                </tr>
        </table>
    </div>
  );
};

export default VinylSulphone;
