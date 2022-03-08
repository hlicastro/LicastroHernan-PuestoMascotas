function Item(props) {
    const itemCardCreate=()=>{}
    console.log(props)

    return (
            <div className="elemento"> 
                <p>{props.item.marca} con un precio de $ {props.item.precio}</p> 
            </div>
        
    )   
}

export default Item
