function Item(props) {
    const itemCardCreate=()=>{}
    return (
            <div className="elemento"> 
                <h3>{props.item.marca}</h3>
                <h4>{props.item.producto}</h4>
                <img className="elemento__img" src={props.item.img}/>
                <h5>Con un precio de $ {props.item.precio}</h5>
                <button>Agregar</button>
            </div>
        
    )   
}

export default Item
