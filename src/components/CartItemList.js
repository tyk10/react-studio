import ListGroup from 'react-bootstrap/ListGroup';
import CartItem from "./CartItem";

export default function CartItemList(props) {
  return (
    <ListGroup as="ol">
      { console.log(Object.keys(props.cartItems)) }
      { Object.keys(props.cartItems).map((k) => (
          <CartItem key={k} item={k} number={props.cartItems[k]} price={props.bakeryPrices[k]}/>
        ))
      }
    </ListGroup>
  );
}