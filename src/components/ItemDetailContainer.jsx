import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "./Firebase";
import { collection, where, query, getDocs } from "firebase/firestore";

function ItemDetailContainer() {
  const [cargando, setLoading] = useState(true);
  const [itemdescripticion, setProducto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const collectionItems = collection(db, "Items");
    const miFiltro = query(collectionItems, where("id", "==", id));
    const documentos = getDocs(miFiltro);
    documentos
      .then((respuesta) =>
        setProducto(respuesta.docs.map((doc) => doc.data())[0])
      )
      .catch(() => toast.error("Error al obtener los productos"))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main>
      {cargando ? (
        <p>Aguarde un momento por favor estamos iniciando el detalle</p>
      ) : (
        <ItemDetail item={itemdescripticion} />
      )}
    </main>
  );
}
export default ItemDetailContainer;
