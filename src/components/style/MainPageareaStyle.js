import styled from 'styled-components';
import Image from '../Images/World.jpg'

export const MainPageareaWrapper = styled.div`
    width:100%:
    height:400px;
    box-sizing:border-box;
    // display:block;
    // border:1px solid red;
    // background:red;
    // z-index:-999;
    margin-bottom:200px;
`

export const MainPageWrapperBackground = styled.div`
     width:100%;
     min-height:900px;
     background: url(${Image}) no-repeat;
     background-size:cover;
    //  position:relative;
     opacity:0.99;
   //   border:1px solid red;
    //  background:red;
     display:flex;
     justify-content: center;
     align-items:center;
      
`;

export const MainPageWrapperContainer = styled.div`
     width:100%;
    height:484px;
    padding:0px 15px;
   //  border:1px solid #000;
    margin:0px auto;
    // z-index:
     
    
    @media screen and (min-width: 1200px) {
        max-width:1430px;
        padding:0px 15px;
    }
`;

export const MainPageWrapperRow = styled.div`
   display:flex;
   flex-wrap:wrap;
   margin: 0px -15px 0px -15px;
`;

export const MainPageWrapperCol = styled.div`
   position:relative;
   width:100%;
   height:484px;
   padding:0px 15px;
   // border:1px solid red;
   @media screen and (min-width:992px) {
       flex: 0 0 58.333333%;
       max-width:58.333333%;
   }
`;

export const MainPageWrapperColInner = styled.div`
   position:relative;
   z-indx:2;
`;

export const MainPageWrapperColInnertextleft = styled.div`
   text-align:left;
`;

export const MainPageWrapperColInnerTextleftTitle = styled.div`
   color:#1e1e1e;
// color:red;
   font-size: 120px;
   font-weight: 400;
   margin-bottom: 52px;
   z-index:1;
`

export const MainPageWrapperColInnerTextDescription = styled.div`
   color: #000;
   font-size: 24px;
   font-weight: 400;
   line-height: 36px;
   margin-bottom: 70px;
`;

export const MainPageWrapperColLinkButton = styled.div`
    width:97.172px;
    height:24px;
    border: 2px solid orange;
    color:orange;
    padding:11px 40px;
    border-radius: 3px;
    position:relative;
    font-size:16px;
    font-weight:400;
    letter-spacing: .5px;
    transition: all 3s ease;
    background: transparent;
    z-index:2;


`