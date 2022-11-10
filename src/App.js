import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import BakeryItem from "./components/BakeryItem";
import CartItemList from "./components/CartItemList";

import bakeryData from "./assets/bakery-data.json";
import logo from './assets/my-bakery.png';

let bakeryPrices = {};
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
  bakeryPrices[item.name] = item.price;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0);
  const [numItems, setNumItems] = useState(0);
  const [cartItems, setCartItems] = useState({});

  const onAddingCart = (name) => {
    if (cartItems[name] !== undefined) {
      setCartItems({...cartItems, [name] :cartItems[name] + 1});
    } else {
      setCartItems({...cartItems, [name]: 1});
    }
    setNumItems(numItems + 1);
    setTotal(total + bakeryPrices[name]);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container style={{ marginLeft: 0 }}>
          <Navbar.Brand href="#home">
            <img 
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="My Backery Logo"
            /> {' '}
            My Bakery
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App">

        <div className="container">
          <Col id="item-list" xs={6} sm={6} md={8} lg={9}>
            <Row style={{ justifyContent: "space-around", height: "27rem" }}>
              {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                <BakeryItem 
                  key={index} 
                  data={item}
                  onAddingCart={onAddingCart}
                />
              ))}
            </Row>
          </Col>

          <Col id="cart" xs={5} sm={5} md={4} lg={3}>
            <div id="cart-wrapper">
              <h2 id="my-cart-title">My Cart <sup><Badge pill style={{ fontSize: "small" }}>{numItems}</Badge></sup></h2>
              {Object.keys(cartItems).length!==0 ? 
                <CartItemList cartItems={cartItems} bakeryPrices={bakeryPrices}/> : <div/>
              }
              <h3 id="my-cart-total"> Total: ${Math.round(total * 100) / 100}</h3>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
}

export default App;
