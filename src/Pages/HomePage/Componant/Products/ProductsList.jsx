import { Container } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import ProductsList from "../../../../Design-System/ResableComponant/productList.jsx";
import Product from "./Product";
import { OurProducts } from "./style";


export default function productList() {

  return (
    <>


    <OurProducts>Our Products</OurProducts>
   
      <Container>

        <Row  xs={1} sm={2} md={2}  lg={3} xl={3}>
          {ProductsList.map((product) => {
            return (
              <Col key={product.id}>
                <Product product={product} />
              </Col>
            
            )})}
          
        </Row>
        </Container>
   
    </>
  );
}
