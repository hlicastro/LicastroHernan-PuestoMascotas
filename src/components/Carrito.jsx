import { useContext, useState } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import { db } from "./Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import FormCart from "./FormCart";
import { Button, Col, Container, Row } from "react-bootstrap";

const Carrito = () => {
  const resultado = useContext(contexto);
  const carrito = resultado.carrito;
  const removeItem = resultado.removeItem;
  const clear = resultado.clear;
  const contador = resultado.contador;
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    email2: "",
  });
  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleClick = () => {
    const orden = {
      buyer: formData,
      items: carrito,
      date: serverTimestamp(),
      total: resultado.total,
    };
    const ordenesCollection = collection(db, "Pedidos");
    addDoc(ordenesCollection, orden).then((res) => {
      toast.success(
        "Su pedido se ha realizado con exito su numero de pedido es: " + res.id
      );
    });

    clear();
  };
  if (contador > 0) {
    return (
      <Container fluid>
        <Row>
          <h2>Carrito</h2>

          <Col xs={12} md={8}>
            <div className="carrito">
              {carrito.map((items) => (
                <div className="carritoItem" key={items.item.id}>
                  <img className="elemento__img" src={items.item.img} />
                  <h3>
                    {items.item.marca.toUpperCase()} -{" "}
                    {items.item.producto.toUpperCase()}{" "}
                  </h3>
                  <h4>{items.item.tipo.toUpperCase()}</h4>
                  <h4>
                    Seleccionste {items.quantity} unidades x $
                    {items.item.precio}{" "}
                  </h4>
                  <h4>Total : ${items.item.precio * items.quantity}</h4>
                  <Button onClick={() => removeItem(items)}>X</Button>
                </div>
              ))}
              <h3 className="total">Total $ {resultado.total} </h3>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <FormCart
              handleOnChange={handleOnChange}
              handleClick={handleClick}
              clear={clear}
              formData={formData}
            />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <>
        <h3> El carrito se encuentra vacio </h3>
        <Link to="/">
          <Button>Ir a comprar</Button>
        </Link>
      </>
    );
  }
};
export default Carrito;
