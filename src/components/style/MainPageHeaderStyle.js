import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const MainPageHeadeWrapper = styled.div`
    width:100%;
    height:100px;
    // background:gray;
    position:fixed;
    z-index:1;
`;

export const MainPageHeaderInner = styled.div`
    max-width:1717px;
    height:100px;
    // background:red;
    margin:auto;
    display:flex;
    align-items:center;
    justfiy-content: space-between;
    min-height:100px;    
`;

export const MainPageHeaderLeft = styled.div`
    width:66px;
    height:32px;
    position:absolute;
    left:5%;
    width:30px;
    height:32px;
    box-sizing:border-box;
    
`;

export const MainPageHeaderLeftLogo = styled(LinkR)`
   position:absolute;
//    overflow:hidden;
   display:inline-block;
   width:66px;
   height:32px;
   color:#000;
   font-size:30px;
   text-decoration:none;
`



export const MainPageHeaderRight = styled.div`
    //  float:right;
     position:absolute;
     right:7%;
     width:30px;
     height:32px;
     box-sizing:border-box;
`

export const MainPageHeaderBox = styled.div`
    width:30px;
    height: 16px;
    display:inline-block;
    position:relative;
    cursor:pointer;
    float:right;
`