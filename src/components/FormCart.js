import { Button, Container } from "react-bootstrap";

function FormCart({ formData, clear, handleClick, handleOnChange }) {
  return (
    <Container>
      <h5>Por favor completa tus datos para continuar la compra</h5>
      <form onSubmit={handleClick} onChange={handleOnChange}>
        <p>Nombre:</p>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          defaultValue={formData.name}
          required
          style={{ width: "90%" }}
        />
        <p>Apellido:</p>
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="surname"
          defaultValue={formData.surname}
          required
          style={{ width: "90%" }}
        />
        <p>Telefono:</p>
        <input
          type="number"
          placeholder="Ingrese su telefono"
          name="phone"
          defaultValue={formData.phone}
          required
          style={{ width: "90%" }}
        />
        <p>Email:</p>
        <input
          type="email"
          placeholder="Ingrese su email"
          name="email"
          defaultValue={formData.email}
          required
          style={{ width: "90%" }}
        />
        <Button
          onClick={handleClick}
          className="btn-primary mt-3"
          style={{ width: "90%" }}
        >
          Finalizar Compra
        </Button>
        <Button
          onClick={clear}
          className="btn-danger mt-3"
          style={{ width: "90%" }}
        >
          Vacíar carrito
        </Button>
      </form>
    </Container>
  );
}
export default FormCart;
