import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useShoppingCart } from "../../../HomePage/Componant/ShoppingContext/ShoppingContext";
import { Shipgerman, Sign } from './style';

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

export default function NavbarShopping() {
  const {cartQuantity} = useShoppingCart()
  return (
    <>
      
        <Navbar className="bg-danger mb-3 navbar-dark">
          <Container fluid>

          <Shipgerman>
             <Navbar.Brand style={{fontSize : "22px" ,fontFamily : "cursive"}} as={NavLink} to="/">OnlineShopping</Navbar.Brand>
          </Shipgerman>
             
             
            <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">

        

            <Sign>
                <div style={{textDecoration: "none"}}>
                  <div style={{ marginLeft: "3px" , background : "white" , color : "blue" , width : "1.2rem" , height : "1.2rem" , textAlign : "center" , borderRadius : "1.2rem" , fontSize : "12px" }}>{cartQuantity}</div>
                <FontAwesomeIcon icon={faCartShopping} style={{ bottom : "-5%", fontSize : "22px" , color: "white" }} />
                </div>
               
            </Sign>
            
            </Nav>
        
          </Container>
         
        </Navbar>
        
      
    </>
  );
}
