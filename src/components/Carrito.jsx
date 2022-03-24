import {useContext} from "react"
import {contexto} from "./CartContext"
import { Link  } from "react-router-dom"

const Carrito = () => {
  
  const resultado = useContext(contexto)
  const carrito = resultado.carrito
  const removeItem = resultado.removeItem
  const clear = resultado.clear
  const contador =resultado.contador

  if (contador>0) {
      return (
          <div className="carrito">
              <h2>Carrito</h2>
              {carrito.map(item => (
                  <div className="carritoItem" key={item.item.id}>
                      <img className="elemento__img" src={item.item.img}/>
                      <h3>{item.item.marca} - {item.item.producto} </h3>
                      <h4>{item.item.tipo}</h4>
                      <h4>Seleccionste {item.quantity} unidades x ${item.item.precio} </h4>
                      <h4>Total : ${item.item.precio * item.quantity}</h4>
                      <button onClick={()=>removeItem(item)}>X</button>
                  </div>
              ))}
              <h3 className="total" >Total $ {resultado.total} </h3>
              <button onClick={clear}>Limpiar Carrito</button>
    
          </div>
      )
    } else {
        return (
            <>
                <h3> El carrito se encuentra vacio </h3>
                <Link to="/"><button>Ir a comprar</button></Link> 
            </>
        )
      }
}
export default Carrito;
