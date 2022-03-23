import {FaCartPlus } from "react-icons/fa";
import {useContext} from "react";
import {contexto} from "./CartContext";


  
function CartWidget() {
    const resultado = useContext(contexto)
    const contador =resultado.contador
    return (
        <>
            <h3> <FaCartPlus/> {contador}</h3> 
        </>
    )   
}
export default CartWidget