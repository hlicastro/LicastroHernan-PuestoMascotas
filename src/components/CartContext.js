import {createContext, useState} from "react"
export const contexto = createContext()
const {Provider} = contexto
const CardProvider =({children}) => {
    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [contador,setCont] = useState(0)

    const removeItem = (producto) => {
        setCarrito(carrito.filter(item => item.item.id != producto.item.id))
        setTotal(total -(producto.item.precio*producto.quantity)) 
        setCont(contador - producto.quantity) 
    }
    const addItem = (item,quantity) => {
        let copiaCarrito = carrito
        if (isInCart(item.id)) {
            copiaCarrito.map((carrito)=>{
                if (carrito.item.id ==item.id) {
                    carrito.quantity=  carrito.quantity + quantity
                    setTotal(total +(item.precio*quantity))  
                    setCont(contador + quantity)
                } 
            })
        } else {
            copiaCarrito = [{item,quantity}, ...carrito ]
            setTotal(total +(item.precio*quantity)) 
            setCont(contador + quantity) 
        }    
        setCarrito(copiaCarrito)          
    }
    const clear = () => {
        setCarrito([])
        setTotal(0)
        setCont(0)
    }

    const isInCart = (id) => {
        return   carrito.some((articulo)=>articulo.item.id==id)
        
    }
    const valorDelContexto = {
        total : total,
        carrito : carrito,
        removeItem : removeItem,
        addItem : addItem,
        clear : clear,
        contador:contador
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
         </Provider>
    )
}

export default CardProvider

