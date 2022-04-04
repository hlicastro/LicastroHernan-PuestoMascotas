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
    const collectionItems = collection(db,"Items")
    let documentos = null
    if (!tipo.id) {
      documentos =getDocs(collectionItems)
    } else {
      documentos = getDocs(query(collectionItems,where("tipo","==",tipo.id)))
    }
    
  documentos
  .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
  .catch(error => toast.error("Error al obtener los productos"))
  .finally(() => setLoading(false))
  
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
