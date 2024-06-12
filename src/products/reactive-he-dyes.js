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

const MyTable = () => {
  return (
    <div>
      <h6>
<center>
    <strong>
        <h2 style={{ color: '#2f2fa2' }}>Reactive HE Dyes (Bismonochlorotriazine Type Dyes)</h2>
    </strong>
</center>
<ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0 }}>
    <li style={{ fontSize: '18px', marginBottom: '10px' }}>
        <strong>Advantage</strong> :: Wide range of colours, excellent colour fastness and compatible in combination.
    </li>
    <li style={{ fontSize: '18px' }}>
        <strong>Application</strong> :: Exhaust Dyeing (80-85°C).
    </li>
</ul>
</h6>
    
<Table className='style1'>
            <tr>
            <td className="style28" colSpan="3" style={{ border: 'thin solid #000000', backgroundColor: '#DEF3FD' }}>
            <span className="style20">
              <strong style={{ fontFamily: 'Bodoni MT', color: '#2f2fa2' }}>SAMEER & SONS</strong>
            </span>
            <br />
            <span className="style21">  HE DYES<br />
              BISMONOCHLOROTRIAZINE TYPE DYES</span>
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
            <TdHeader bgcolor="#FFF460" height="50px" width="100px"></TdHeader>
            <TdHeader bgcolor="#FFF102" height="50px" width="100px"></TdHeader>
            <Td className="style18"><strong>YELLOW HE6G</strong><br />YELLOW 135</Td>
            <Td className="style11">70</Td>
            <Td  className="style11">4-5</Td>
            <Td  className="style11">4</Td>
            <Td  className="style11">4</Td>
            <Td  className="style19">3</Td>
            <Td  className="style19">G</Td>
          </tr>
          <tr>
      <td className="style8"  bgcolor="#F8EE59" style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#FFE500"   style={{ border: 'thin solid #000000',height:"50px" ,width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>YELLOW HE4G</strong></span><br className="style16" />
        <span className="style16">YELLOW 105</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        80
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
        2-3
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        G
      </td>
    </tr>
    <tr>
  <td className="style8" bgcolor="#F9D831" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
    &nbsp;
  </td>
  <td className="style8" bgcolor="#FDC210" style={{ border: 'thin solid #000000', height: '50px', width: '100px' }}>
    &nbsp;
  </td>
  <td className="style6" style={{ border: 'thin solid #000000' }}>
    <span className="style16"><strong>YELLOW HE4R</strong></span><br className="style16" />
    <span className="style16">YELLOW 84</span>
  </td>
  <td className="style19" style={{ border: 'thin solid #000000' }}>
    80
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
    4
  </td>
  <td className="style19" style={{ border: 'thin solid #000000' }}>
    P
  </td>
</tr>


<tr>
      <td className="style8" bgcolor="#F9D831"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#FDC210"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>GOLDEN YELLOW HER</strong></span><br className="style16" />
        <span className="style16">YELLOW 84A</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       70
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
        P
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#F7A01D"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#F17A20"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>ORANGE HE2R NMJ</strong></span><br className="style16" />
        <span className="style16">ORANGE 94</span>
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
        3
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
     
<tr>
      <td className="style8" bgcolor="#F9A81B"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#F58320"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>ORANGE HE2R</strong></span><br className="style16" />
        <span className="style16">ORANGE 94A</span>
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       100
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     3-4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        3
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
          


<tr>
      <td className="style8" bgcolor="#EA979F"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#DF577F"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>RED HE3B</strong></span><br className="style16" />
        <span className="style16">RED 120</span>
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
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
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
        <span className="style16"><strong>RED HE5B</strong></span><br className="style16" />

      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       120
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     4      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
    <tr>
      <td className="style8" bgcolor="#D37899"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#C14C83"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>RED HE7B</strong></span><br className="style16" />
<span className="style16">RED 141</span>

      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       120
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     4      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
      
<tr>
      <td className="style8" bgcolor="#C46E9B"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#C33D86"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>RED HE8B</strong></span><br className="style16" />
<span className="style16">RED 152</span>

      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       150
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     4      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       4- 5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       3- 4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>

   
<tr>
      <td className="style8" bgcolor="#34C1EC"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#2384C8"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>BLUE HEGH</strong></span><br className="style16" />
<span className="style16">BLUE 198</span>

      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       100
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     5     </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
    1
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        P
      </td>
    </tr>
      

<tr>
      <td className="style8" bgcolor="#5DAFDE"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#2A78A8"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>BLUE HERD</strong></span><br className="style16" />
<span className="style16">BLUE 160</span>

      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       100
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     5     </td>
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
        F
      </td>
    </tr>
       
<tr>
      <td className="style8" bgcolor="#6B6EB1"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#004684"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>NAVY BLUE HE2R</strong></span><br className="style16" />
<span className="style16">BLUE 172</span>

      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       150
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     5     </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        4-5
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
    1
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
        F
      </td>
    </tr>
         

<tr>
      <td className="style8" bgcolor="#68238A"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#4D1380"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>BLACK HEBL</strong></span><br className="style16" />
<span className="style16">BLACK 8</span>

      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       200
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     5     </td>
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
      <td className="style8" bgcolor="#68238A"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style8" bgcolor="#350675"  style={{ border: 'thin solid #000000',height:"50px", width:"100px" }}>
        &nbsp;
      </td>
      <td className="style6" style={{ border: 'thin solid #000000' }}>
        <span className="style16"><strong>BLACK HEGR</strong></span><br className="style16" />
<span className="style16">BLACK 168</span>

      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
       200
      </td>
      <td className="style19" style={{ border: 'thin solid #000000' }}>
     5     </td>
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
       
      </Table>
    </div>
  );
};

export default MyTable;
