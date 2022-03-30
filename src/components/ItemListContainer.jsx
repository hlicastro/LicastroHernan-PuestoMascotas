import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {db} from './Firebase'
import { getDocs, collection , query , where } from "firebase/firestore"

function ItemListContainer(props) {
  const [cargando, setLoading] = useState(true);
  const [articulos, setProductos] = useState([]);
  const tipo = useParams();
  useEffect(() => {
      if(!tipo.id){
      const collectionItems = collection(db,"Items")
      const documentos =getDocs(collectionItems)
      documentos
      .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
      .catch(error => toast.error("Error al obtener los productos"))
      .finally(() => setLoading(false))

  } else {
      const collectionItems = collection(db, "Items")
      const miFiltro = query(collectionItems,where("tipo","==",tipo.id))
      const documentos = getDocs(miFiltro) 
      documentos
      .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
      .catch(error => toast.error("Error al obtener los productos"))
      .finally(() => setLoading(false))
  }
  }, [tipo]);

  return (
    <main>
      {cargando ? (
        <p>Aguarde un momento por favor estamos iniciando el carrito</p>
      ) : (
        <ItemList items={articulos} tipo={tipo} />
      )}
    </main>
  );
}
export default ItemListContainer;
