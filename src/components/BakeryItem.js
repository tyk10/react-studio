import "./BakeryItem.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function BakeryItem(props) {
  return (
      <Card className="bakery-card">
        <Card.Img 
          variant="top" 
          src={props.data.image}
          style={{ paddingTop: "12px" }}
        />
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>{props.data.description}</Card.Text>
          <Card.Text className="price">{"$" + props.data.price}</Card.Text>
          <Button 
            className="add-cart-btn btn-secondary"
            onClick={() => props.onAddingCart(props.data.name)}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
}