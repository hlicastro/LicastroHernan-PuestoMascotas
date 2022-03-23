import ItemCount from  "./ItemCount";
import {useState,useContext} from "react";
import CartWidget from "./CartWidget";
import { Link  } from "react-router-dom"
import { Accordion} from "react-bootstrap";
import {contexto} from "./CartContext"


function ItemDetail(props) {
    const resultado = useContext(contexto)
    const addItem =resultado.addItem
    const [cantArticulos, setItemContador] = useState(false)
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
                        <h3>{"Estas por agregar al carrito: " + cantArticulos+ " unidades con un total de $ " + cantArticulos*props.item.precio} </h3>
                        <Link to="/carrito"><button onClick={()=>addItem(props.item, cantArticulos)}> Agregaral carrito </button>  </Link>
                    </> }           
                <h5>Tenemos en Stock {props.item.stock} unidades, con un valor de $ {props.item.precio} cada una</h5>
                
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Detalle</Accordion.Header>
                    <Accordion.Body>
                        {props.item.detalle}  
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Composicion</Accordion.Header>
                <Accordion.Body>
                    {props.item.composicion}
                </Accordion.Body>
                </Accordion.Item>
                </Accordion>    
            </div>
        
    )   
}

export default ItemDetail
