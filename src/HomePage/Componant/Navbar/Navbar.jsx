// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import { Container } from "@mui/material";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import * as React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import img from "../Header/image/f515d11d-f955-40e4-a0e1-9608d9448e0c.jpeg";

// export default function Navbar() {
//   return (
//   <Container>
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar style={{ backgroundColor: "rgb(188,156,79)" }} >
//         <Toolbar>
//           <Typography
//           style={{margin : "0" , padding : "0"}}
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             <img style={{ width: "250px", height: "80px" }} src={img} />
//           </Typography>

//           <Dropdown>
//             <Dropdown.Toggle style={{border : "none"}} variant="rgb(188,156,79)" id="dropdown-basic">
//               الصفحة الرئيسية
//             </Dropdown.Toggle>

//             <Dropdown.Menu style={{marginTop : "1.2rem"}}>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Dropdown>
//             <Dropdown.Toggle style={{border : "none"}} variant="rgb(188,156,79)" id="dropdown-basic">
//             اخبار الجمعية
//             </Dropdown.Toggle>

//             <Dropdown.Menu style={{marginTop : "1.2rem"}}>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Dropdown>
//             <Dropdown.Toggle style={{border : "none"}} variant="rgb(188,156,79)" id="dropdown-basic">
//             عن الجمعية
//             </Dropdown.Toggle>

//             <Dropdown.Menu style={{marginTop : "1.2rem"}}>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Dropdown>
//             <Dropdown.Toggle style={{border : "none"}} variant="rgb(188,156,79)" id="dropdown-basic">
//             النشاط التشغيلي
//             </Dropdown.Toggle>

//             <Dropdown.Menu style={{marginTop : "1.2rem"}}>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Dropdown>
//             <Dropdown.Toggle style={{border : "none"}} variant="rgb(188,156,79)" id="dropdown-basic">
//             المشاريع والبرامج
//             </Dropdown.Toggle>

//             <Dropdown.Menu style={{marginTop : "1.2rem"}}>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Dropdown>
//             <Dropdown.Toggle style={{border : "none"}} variant="rgb(188,156,79)" id="dropdown-basic">
//             للتواصل
//             </Dropdown.Toggle>

//             <Dropdown.Menu style={{marginTop : "1.2rem"}}>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           <IconButton size="large" aria-label="search" color="inherit">
//             <SearchIcon />
//           </IconButton>

//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </Box>
//     </Container>
//   );
// }

// import { Container } from "@mui/material";
// import { Navbar, Offcanvas } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
// import {
//   NavContainer,
//   NavbarWrapper
// } from "./style";

// export default function NavbarComponant() {

//   return (
//     <>
//       {["lg"].map((expand) => (
//         <Navbar
//           style={{ position: "fixed", zIndex: "2", width: "100%" }}
//           key={expand}
//           expand={expand}
//           className="navbar-dark"
//         >
//           <NavbarWrapper>
//             <Container fluid>
//               <NavContainer>
//                 <div>
//                   <img className="Logo"  alt="Logo" />
//                 </div>

//                 <Navbar.Toggle
//                   style={{ marginLeft: "42%" , background : "black" }}
//                   aria-controls={`offcanvasNavbar-expand-${expand}`}
//                 />
//                 <Navbar.Offcanvas
//                   style={{ width: "100%", height: "100%" }}
//                   id={`offcanvasNavbar-expand-${expand}`}
//                   aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                   placement="top"
//                 >
//                   <Offcanvas.Header
//                     closeVariant="black"
//                     closeButton
//                     style={{ backgroundColor: "yellow" }}
//                   >
//                     <Offcanvas.Title

//                       id={`offcanvasNavbarLabel-expand-${expand}`}
//                     >
//                       <div style={{width : "15rem"}}>
//                         <img className="Logo"  alt="Logo" />
//                         <span className="wow animate__animated animate__fadeInUp animate__slower	1s">
//                           web
//                         </span>
//                         <span className="wow animate__animated animate__backInDown animate__slower	3ms">
//                           school
//                         </span>
//                       </div>
//                     </Offcanvas.Title>
//                   </Offcanvas.Header>

//                   <Offcanvas.Body  style={{ backgroundColor: "yellow" }}>

//           <Dropdown>
//            <Dropdown.Toggle style={{border : "none"}} variant="yellow" id="dropdown-basic">
//            للتواصل
//            </Dropdown.Toggle>

//            <Dropdown.Menu style={{marginTop : "1.2rem"}}>
//              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//            </Dropdown.Menu>
//          </Dropdown>

//                   </Offcanvas.Body>
//                 </Navbar.Offcanvas>
//               </NavContainer>
//             </Container>
//           </NavbarWrapper>
//         </Navbar>
//       ))}
//     </>
//   );
// }






import * as React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { LinksWrapper, Title } from "./style";

export default function NavbarComponant() {
  return (
    <>
      {["xl"].map((expand) => (

        <div style={{backgroundColor : "yellow"}}>
        <Container>
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            <Title>
            <Navbar.Brand href="#">Tanmia</Navbar.Brand>
            </Title>


            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Tanmia
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <LinksWrapper>
                <NavDropdown
                  title="الصفحة الرئيسية"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home1">Home1</Nav.Link>
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home2">Home2</Nav.Link>

                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home3">Home3</Nav.Link>
                </NavDropdown>

                <Nav.Link href="#action2">اخبار الجمعية</Nav.Link>

                <NavDropdown
                  title="النشاط التشغيلي"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home1">Home1</Nav.Link>
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home2">Home2</Nav.Link>

                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home3">Home3</Nav.Link>
                </NavDropdown>

                <NavDropdown
                  title="عن الجمعية"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home1">Home1</Nav.Link>
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home2">Home2</Nav.Link>

                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home3">Home3</Nav.Link>
                </NavDropdown>

                <NavDropdown
                  title="المشاريع والبرامج"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home1">Home1</Nav.Link>
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home2">Home2</Nav.Link>

                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home3">Home3</Nav.Link>
                </NavDropdown>

                <NavDropdown
                  title="للتواصل"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home1">Home1</Nav.Link>
                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home2">Home2</Nav.Link>

                  <Nav.Link  style={{textAlign : "center"}} as={NavLink} to="/Home3">Home3</Nav.Link>
                </NavDropdown>
                </LinksWrapper>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </Container>
        </div>
      ))}
    </>
  );
}
