import {FaCartPlus } from "react-icons/fa";
import {useContext} from "react";
import {contexto} from "./CartContext";


  
function CartWidget() {
    const resultado = useContext(contexto)
    const contador =resultado.contador
    if (contador>0) {
        return (<h3> <FaCartPlus/> {contador}</h3>)          
    }else{return ("")}
}
export default CartWidget