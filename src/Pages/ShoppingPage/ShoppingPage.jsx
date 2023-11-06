import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import productList from "../../Design-System/ResableComponant/productList.jsx";
import { useShoppingCart } from '../HomePage/Componant/ShoppingContext/ShoppingContext';
import NavbarShopping from '../ShoppingPage/Componant/Navbar/NavbarShopping';
import ProductsShopping from './Componant/ProductsShopping/ProductsShopping';
import { AlertWrapper, CARD, Wrapper } from './stylePage';


export default function ShoppingPage() {

  const {cartItems} = useShoppingCart() ;
  return (
    <Wrapper>
    
    <NavbarShopping />

    <CARD>
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item style={{textAlign : "center"}}>CART SUMMARY</ListGroup.Item>
        <ListGroup.Item>
          <span style={{marginRight : "40%"}}>Subtotal</span>
          EGB {cartItems.reduce((total , items)=>{
        const product = productList.find((i) => i.id === items.id) ;
        return total + (product?.price || 0) * items.quantity
    },0)
    }
        </ListGroup.Item>
        <ListGroup.Item>OnlineShopping Express items are eligible for free delivery <FontAwesomeIcon color='red' icon={faMotorcycle} /></ListGroup.Item>
        <ListGroup.Item><Button style={{width : "100%"}}>CHECKOUT (EGB  {cartItems.reduce((total , items)=>{
        const product = productList.find((i) => i.id === items.id) ;
        return total + (product?.price || 0) * items.quantity
    },0)
    })</Button></ListGroup.Item>
      </ListGroup>
    </Card>
    </CARD>
    
 

    <AlertWrapper>
        <Button as={NavLink} to="/" variant="warning"  style={{backgroundColor : "yellow" , padding : "1rem"}}>Chose Your Product </Button>
    </AlertWrapper>


    {cartItems.map((item) =>
    (
      <ProductsShopping key={item.id}  {...item}/>
    ))}
       
    </Wrapper>
  )
}
