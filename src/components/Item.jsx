import ItemCount from  "./ItemCount";

function Item(props) {
    const itemCardCreate=()=>{}
    return (
            <div className="elemento"> 
                <h3>{props.item.marca}</h3>
                <h4>{props.item.producto}</h4>
                <img className="elemento__img" src={props.item.img}/>
                <h5>Con un precio de $ {props.item.precio}</h5>
                <ItemCount stock={props.item.stock} inicial={props.item.inicial} />
            </div>
        
    )   
}

export default Item
