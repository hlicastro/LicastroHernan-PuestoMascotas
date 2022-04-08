import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Item({ item }) {
  return (
    <Card className="text-center itemCard " style={{ width: "18rem" }}>
      <Card.Img variant="top" className="elemento__img" src={item.img} />
      <Card.Body>
        <Card.Title>
          {" "}
          {item.marca}
          {item.producto}
        </Card.Title>
        <Card.Subtitle>En su precentacion de {item.peso}kg.</Card.Subtitle>
        <Card.Text>Con un precio de $ {item.precio}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button variant="primary">Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Item;
