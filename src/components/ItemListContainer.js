function ItemListContainer(props) {
    return (
        <>
            <p> 
                {props.alimento} con un precio de $ {props.precio}
            </p> 
        </>
    )   
}
export default ItemListContainer