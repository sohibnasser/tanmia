import styled from "@emotion/styled";

export const HeaderWrapper = styled("section")`
    height: 36rem;
    padding-top: 4.8%;
    background-color: #e0e0e0;

`;

export const SlideImageWrapper = styled("div")`
    width: 100%;
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

