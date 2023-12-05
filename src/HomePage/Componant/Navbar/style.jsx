import styled from "@emotion/styled";


export const NavbarWrapper = styled("section")` 
   top : 0 ; 
   padding : 1rem 0 ;
   background-color: yellow;
   z-index: 2;
   position: fixed;
   width: 100%;
`;

export const NavContainer = styled("div")`  
    display : flex ;
    align-items : center ;
    width: 100%;
    gap: 12%;
    overflow: hidden;

`;

export const Title = styled("div")`  
    width: 40%;
    display: flex;
    align-items : center ;
    gap: 5px;
    font-size : 1.5rem;
    font-family : 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    overflow: hidden;
    position: relative;


@media screen and (max-width:665px) {
    width: 30%;
    overflow: unset;
}

@media screen and (max-width:426px) {
    font-size: 1.2rem;
    width: 25%;
    overflow: unset;
}

`;



export const LinksWrapper = styled("div")`  
    gap : 1rem;
   display : flex;
   width: 90% ;
   font-weight: bolder;
   font-family : 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;

@media screen and (min-width:992px) and (max-width:1024px) {
    gap : 1rem;
}

@media screen and (min-width:769px) and (max-width:991px) {
    text-align: center;
    margin: auto;
    margin-top: 20%;
    width: 100%;
    display: block;
}

@media screen and (min-width:600px) and (max-width:768px) {
    text-align: center;
    margin: auto;
    margin-top: 8%;
    width: 100%;
    display: block;
}

@media screen and (min-width:427px) and (max-width:599px) {
    text-align: center;
    margin: auto;
    margin-top: 11%;
    width: 100%;
    display: block;
}

@media screen and (max-width:426px) {
    text-align: center;
    margin: auto;
    margin-top: 20%;
    width: 100%;
    display: block;
}

`;


export const RoutLinks = styled("div")`  
   width: 100%;
   display : flex;


@media screen and (min-width:769px) and (max-width:991px) {
    display: block;
    width: 100%;
    padding: 2% 0;
}

@media screen and (min-width:600px) and (max-width:768px) {
    display: block;
    width: 100%;
    padding: 2.5% 0;
}

@media screen and (min-width:427px) and (max-width:599px) {
    display: block;
    width: 100%;
    padding: 3% 0;
}

@media screen and (max-width:426px) {
    display: block;
    width: 100%;
    padding: 4% 0;
}

`;