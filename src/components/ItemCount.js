import {useState} from "react"

function ItemCount(props) {
    const [contador, setContador] = useState(props.inicial)
    const agregarItem = ()=> {
        if (contador<props.stock){
        setContador(contador + 1)
    }}
    const sacarItem = ()=> {
        if (contador>props.inicial){
        setContador(contador - 1)
    }}
    const restaurar = ()=> {
        setContador(props.inicial)
    }
    return (
        <>
            <div className="controArticulos">
                <button  onClick={sacarItem}> -</button> 
                <p> {contador}</p> 
                <button onClick={agregarItem}> +</button> 
            </div>
            <button onClick={restaurar}> Agregar al carrito</button> 
            
        </>
    )   
}
export default ItemCount
        
