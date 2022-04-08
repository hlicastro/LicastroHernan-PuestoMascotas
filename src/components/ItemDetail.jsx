import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { contexto } from "./CartContext";
import { Button } from "react-bootstrap";

function ItemDetail(props) {
  const resultado = useContext(contexto);
  const addItem = resultado.addItem;
  const [cantArticulos, setItemContador] = useState(false);
  const onAdd = (unidadesContador) => {
    if (unidadesContador != undefined) {
      setItemContador(unidadesContador);
    }
  };
  return (
    <div className="elementoDetalle">
      <div className="itemDetalleConteiner">
        <h3>
          {props.item.marca} - {props.item.producto}
        </h3>
        <img className="elementoDetalle__img" src={props.item.img} />
      </div>
      {!cantArticulos ? (
        <>
          <ItemCount
            stock={props.item.stock}
            inicial={props.item.inicial}
            onAdd={onAdd}
          />
          <h5>
            Tenemos en Stock {props.item.stock} unidades, con un valor de ${" "}
            {props.item.precio} cada una
          </h5>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Detalle</Accordion.Header>
              <Accordion.Body>{props.item.detalle}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Composicion</Accordion.Header>
              <Accordion.Body>{props.item.composicion}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      ) : (
        <>
          <p>
            {"Estas por agregar al carrito: " +
              cantArticulos +
              " unidades con un total de $ " +
              cantArticulos * props.item.precio}{" "}
          </p>
          <Link to="/carrito">
            <Button
              variant="success"
              onClick={() => addItem(props.item, cantArticulos)}
            >
              {" "}
              Agregar al carrito{" "}
            </Button>{" "}
          </Link>
          <Link to="/">
            <Button
              variant="secondary"
              onClick={() => addItem(props.item, cantArticulos)}
            >
              Agregar y seguir comprando
            </Button>
          </Link>
          <Link to="/">
            <Button variant="danger">Volver al carrito</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
