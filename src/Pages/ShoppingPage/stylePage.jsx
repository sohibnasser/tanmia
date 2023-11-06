import styled from "@emotion/styled";

export const Wrapper = styled("div")`
    position: relative;

`;

export const CARD = styled("div")`
   width: 50% ;
   margin : 3% auto ;
@media screen and (max-width:464px){
     width: 70%;
}
`;

export const AlertWrapper = styled("div")`
    position: absolute;
    left : 43% ;
    top : 24rem;
@media screen and (max-width:464px){
        top : 28rem;
        left : 20% ;
}
`;

