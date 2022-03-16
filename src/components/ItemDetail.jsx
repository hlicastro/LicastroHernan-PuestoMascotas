import ItemCount from  "./ItemCount";
import {useState} from "react";
import CartWidget from "./CartWidget";
import { Link  } from "react-router-dom"

function ItemDetail(props) {

    const [cantArticulos, setItemContador] = useState(false)
    const itemDetailCard=()=>{}
    const onAdd = (unidadesContador) => {
        if(unidadesContador != undefined){
            setItemContador(unidadesContador)
        }
      }

    return (
            <div className="elementoDetalle"> 
                <h3>{props.item.marca}</h3>
                <h4>{props.item.producto}</h4>
                <img className="elementoDetalle__img" src={props.item.img}/>            
                {!cantArticulos ?  
                    <ItemCount stock={props.item.stock} inicial={props.item.inicial} onAdd={onAdd}/>:  
                    <>
                        <h3>{"Agregaste al carrito" + cantArticulos}</h3>
                        <Link to="/carrito"><button> Agregaral carrito </button>  </Link>
                    </> }           
                <h5>Tenemos en Stock {props.item.stock} unidades, con un valor de $ {props.item.precio} cada una</h5>
                <p>{props.item.detalle}</p>
                <p>{props.item.composicion}</p>

            </div>
        
    )   
}

export default ItemDetail
