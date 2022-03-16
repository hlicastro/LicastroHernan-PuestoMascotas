import ItemList from "./ItemList";
import {useState,useEffect} from "react";
import {useParams}  from "react-router-dom"
import { toast } from 'react-toastify'

function ItemListContainer(props) {
    
    const [cargando, setLoading] = useState(true)
    const [items, setProductos] = useState([])
    const tipo=useParams()
    useEffect(() => {
        setTimeout(()=>{
            const articulosIniciales = fetch('/articulos.json')
            articulosIniciales
                .then((res) => {
                    return res.json() 
                })
                .then((datos) => {
                    setProductos(datos)
                    if (tipo.id== undefined) {
                        setProductos(datos)
                    } else {
                        datos = datos.filter(e => e.tipo.includes(tipo.id))
                        setProductos(datos)
                    }                 
                })
                .catch(() => {toast.error('Error al acargar el carrito')})
                .finally(() => { setLoading(false) })      
        },1500)
    },[tipo])
    
    

    return (
        <main>
            {cargando ? <p>Aguarde un momento por favor estamos iniciando el carrito</p> : <ItemList items={items} tipo={tipo}/> }
        </main>
    );
    }
export default ItemListContainer