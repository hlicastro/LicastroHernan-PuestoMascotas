
function ItemDetail(props) {
    const itemDetailCard=()=>{}
    return (
            <div className="elementoDetalle"> 
                <h3>{props.item.marca}</h3>
                <h4>{props.item.producto}</h4>
                <img className="elementoDetalle__img" src={props.item.img}/>
                <h5>Tenemos en Stock {props.item.stock} unidades, con un valor de $ {props.item.precio} cada una</h5>
                <p>{props.item.detalle}</p>
                <p>{props.item.composicion}</p>

            </div>
        
    )   
}

export default ItemDetail
