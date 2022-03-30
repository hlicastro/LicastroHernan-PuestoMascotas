import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
function Item({ item }) {
  return (
    <div className="elemento">
      <h3 className="elementoText">{item.marca}</h3>
      <h4 className="elementoText">{item.producto}</h4>
      <Link to={`/item/${item.id}`}>
        <img className="elemento__img" src={item.img} />
      </Link>
      <h5 className="elementoText">Con un precio de $ {item.precio}</h5>
    </div>
  );
}

export default Item;
