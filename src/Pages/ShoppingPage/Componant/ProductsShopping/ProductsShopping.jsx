import React from "react";
import { Button, Card } from "react-bootstrap";
import productList from "../../../../Design-System/ResableComponant/productList.jsx";
import { useShoppingCart } from "../../../HomePage/Componant/ShoppingContext/ShoppingContext";
import "./style.css";

export default function ProductsShopping({ id }) {
  const {
    getItemsQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const Quantity = getItemsQuantity(id);

  const product = productList.find((i) => i.id === id);
  if (product == null) return null;
  
  const total = `${Quantity * product.price}` 

  return (
    <>


      <Card 
      className="CardProduct"
      
      >
        <Card.Img
          style={{ height: "17rem" }}
          variant="top"
          src={product.thumbnail}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>

          <div
            style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
          >
            <Card.Text style={{ color: "green", fontWeight: "bolder" }}>
              Total Price : {total}$
            </Card.Text>
          </div>

          

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              alignItems: "center",
              padding : "1rem 0"
            }}
          >
            <Button
              onClick={() => increaseCartQuantity(product.id)}
              style={{ width: "35px" }}
            >
              +
            </Button>

            <span style={{ fontSize: "15px" }}>{Quantity} Product</span>

            <Button
              onClick={() => decreaseCartQuantity(product.id)}
              style={{ width: "35px" }}
            >
              -
            </Button>
          </div>
          <Button
            onClick={() => removeItemFromCart(product.id)}
            className="btn btn-danger"
            style={{ width: "100%" }}
          >
            Remove
          </Button>
          
        </Card.Body>
      </Card>
    </>
  );
}
