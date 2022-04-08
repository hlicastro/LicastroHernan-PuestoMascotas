import Item from "./Item";

function ItemList(props) {
  return (
    <div className="baseCarrito">
      {props.items.map((item) => {
        return <Item item={item} key={"key" + item.id} />;
      })}
    </div>
  );
}

export default ItemList;
