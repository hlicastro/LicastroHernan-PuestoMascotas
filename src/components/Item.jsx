import ItemCount from  "./ItemCount";
import {Link} from "react-router-dom";
function Item({item}) {
    const itemCardCreate=()=>{}
    return (
            <div className="elemento"> 
                    <Link to={`/item/${item.id}`}>                     
                        <h3>{item.marca}</h3>
                        <h4>{item.producto}</h4>
                        <img className="elemento__img" src={item.img}/>
                        <h5>Con un precio de $ {item.precio}</h5>
                    </Link>
                <ItemCount stock={item.stock} inicial={item.inicial} />
            </div>
        
    )   
}

export default Item