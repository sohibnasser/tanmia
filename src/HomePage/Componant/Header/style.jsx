import styled from "@emotion/styled";

export const HeaderWrapper = styled("section")`
    height: 36rem;
    padding-top: 4.8%;
    background-color: #e0e0e0;

`;

export const SlideImageWrapper = styled("div")`
    width: 95%;
    height: 100%;
    display: flex;
    gap: 1rem;
@media screen and (min-width:401px) and (max-width : 600px){
   gap: 2rem;
   width: 85%;
}

@media screen and (max-width:400px) {
    display: block;
    width: 100%;
    height: 80%;
    padding-top: 2rem;
}
`;

export const P = styled("p")`
   font-size : 1.5rem ;
   margin-top : 17% ;
   color : #dc3545 ;
   font-family : cursive ;
   font-weight : bold ;
@media screen and (min-width:401px) and (max-width : 600px){
    font-size: 1rem;
    width : 70% ;
    margin-top : 40% ;
}
@media screen and (max-width:400px) {
        font-size: 1rem;
        margin-top : 10% ;
        width : 80% ;
        margin : auto ;
   }
`;