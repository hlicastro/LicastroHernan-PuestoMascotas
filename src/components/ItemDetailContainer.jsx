import ItemDetail from "./ItemDetail";
import {useState,useEffect} from "react";
import {useParams}  from "react-router-dom"
import { toast } from 'react-toastify'
  

function ItemDetailContainer(props) {
    
    const [cargando, setLoading] = useState(true)
    const [itemdescripticion, setProductos] = useState([])
    const {id}=useParams()
    useEffect(()=>{
        const articulosIniciales = fetch('/articulos.json')
        articulosIniciales
            .then((res) => {
                return res.json() 
            })
            .then((CargaCorrecta)=>{
                CargaCorrecta = CargaCorrecta.find(e => e.id == id)
                setProductos(CargaCorrecta)
            })
            .catch((CargaIncorrecta)=>{
                toast.error('Error al acargar el la descripcion del prodocuto')
            })
        .finally(()=>{
            setLoading(false)
        })
    },[id])


    return (
        <main>
            {cargando ? <p>Aguarde un momento por favor estamos iniciando el detalle</p> : <ItemDetail item={itemdescripticion}/> }
        </main>
    );
}
export default ItemDetailContainer