import { useState } from "react";
import { Button } from "react-bootstrap";
function ItemCount(props) {
  const [contador, setContador] = useState(props.inicial);
  const agregarItem = () => {
    if (contador < props.stock) {
      setContador(contador + 1);
    }
  };
  const sacarItem = () => {
    if (contador > props.inicial) {
      setContador(contador - 1);
    }
  };
  const restaurar = () => {
    setContador(props.inicial);
    props.onAdd(contador);
  };
  return (
    <>
      <div className="itemDetalleConteiner">
        <Button className="botonDefault" variant="primary" onClick={sacarItem}>
          {" "}
          -
        </Button>
        <p> {contador}</p>
        <Button
          className="botonDefault"
          variant="primary"
          onClick={agregarItem}
        >
          {" "}
          +
        </Button>
      </div>
      <div className="itemDetalleConteiner">
        <Button
          className="botonDefault itemDetalleConteinerBoton"
          variant="primary"
          onClick={restaurar}
        >
          {" "}
          Agregar
        </Button>
      </div>
    </>
  );
}
export default ItemCount;
