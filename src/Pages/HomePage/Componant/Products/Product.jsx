import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useShoppingCart } from "../ShoppingContext/ShoppingContext";

export default function Product(props) {
  const { product } = props;
  const {
    getItemsQuantity,
    increaseCartQuantity,
  } = useShoppingCart();
  const Quantity = getItemsQuantity(product.id);
  return (
    <>
      <Card style={{ width: "100%", marginBottom: "4rem" }}>
        <Card.Img
          style={{ height: "18rem" }}
          variant="top"
          src={product.thumbnail}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text style={{ color: "red", fontWeight: "bolder"}}>
          DiscountPercentage : {product.discountPercentage}%
          </Card.Text>
          <Card.Text style={{ color: "green", fontWeight: "bolder"}}>
            Finall Price : {product.price}$
          </Card.Text>

          <div>
            {Quantity === 0 ? (
              <Button
                onClick={() => increaseCartQuantity(product.id)}
                variant="outline-danger"
                style={{ width: "100%" , fontWeight : "bolder"}}
              >
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize : "18px" }} />   Add To Cart
              </Button>
            ) : (
              <div>
                <h5>
                <Badge style={{ width : "100%" , padding : "3.5% 0"}} bg="secondary">Product added</Badge>
                </h5>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}




