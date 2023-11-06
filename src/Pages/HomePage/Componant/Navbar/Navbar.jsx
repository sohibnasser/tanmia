import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../ShoppingContext/ShoppingContext";
import { Shipgerman, Sign } from './style';


export default function NavbarComponant() {
  const {cartQuantity} = useShoppingCart()
  return (
    <>
      {['md'].map((expand) => (
        <Navbar style={{position : "fixed" , zIndex : "2" , width : "100%"}}  key={expand} expand={expand} className="bg-danger navbar-dark">
          <Container fluid>

          <Shipgerman>
             <Navbar.Brand style={{fontSize : "22px" ,fontFamily : "cursive"}} as={NavLink} to="/">OnlineShopping</Navbar.Brand>
          </Shipgerman>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeVariant="white" closeButton className="bg-danger">
                <Offcanvas.Title style={{color : "whitesmoke" , fontSize : "22px" ,fontFamily : "cursive"}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                OnlineShopping
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-danger navbar-dark">
            <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">

            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/">About</Nav.Link>
        
        

            <Sign>
                <Link style={{textDecoration: "none"}} to="ShoppingPage">
                  <div style={{ marginLeft: "3px" , background : "white" , color : "blue" , width : "1.2rem" , height : "1.2rem" , textAlign : "center" , borderRadius : "1.2rem" , fontSize : "12px" }}>{cartQuantity}</div>
                <FontAwesomeIcon icon={faCartShopping} style={{ bottom : "-5%", fontSize : "22px" , color: "white" }} />
                </Link>
               
            </Sign>
            </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
         
          </Container>
         
        </Navbar>
        
      ))}
    </>
  );
}
