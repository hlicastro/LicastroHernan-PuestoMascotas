import Item from "./Item";

function ItemList(props) {
    const itemListCreate=()=>{}
    return (
        <div className="baseCarrito"> 
            {
                props.items.map((item)=>{
                    return <Item item={item}/>
                })
            }
        </div>
    )   
}

export default ItemList
