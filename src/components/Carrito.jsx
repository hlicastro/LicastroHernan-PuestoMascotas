import {useContext} from "react"
import {contexto} from "./CartContext"

const Carrito = () => {
  
  const resultado = useContext(contexto)
  const carrito = resultado.carrito
  const removeItem = resultado.removeItem
  const clear = resultado.clear
  
  return (
      <>
          <h2>Carrito</h2>
          {carrito.map(item => (
              <div key={item.item.id}>
                  <img className="elemento__img" src={item.item.img}/>
                  <h3>{item.item.marca} - {item.item.producto} </h3>
                  <p>{item.item.tipo}</p>
                  <p>Seleccionste {item.quantity} unidades x ${item.item.precio} </p>
                  <p>Total : ${item.item.precio * item.quantity}</p>
                  <button onClick={()=>removeItem(item)}>Borrar</button>
              </div>
          ))}
          <h3>Total {resultado.total} </h3>
          <button onClick={clear}>Limpiar Carrito</button>

      </>
  )
}
export default Carrito;
