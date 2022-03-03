import ItemCount from "./ItemCount";


function ItemListContainer(props) {
    const miOnAdd=()=>{}
    return (
        <>
            <div className="elemento"> 
                <p>{props.alimento} con un precio de $ {props.precio}</p> 
                <ItemCount stock={5} inicial={1} onAdd={miOnAdd} />
            </div>
        </>
    )   
}
export default ItemListContainer