import ItemList from "./ItemList";
import {useState,useEffect} from "react";

let productosIniciales = [
    {
        id: 1,
        marca: "Royal Canin ",
        producto: "Mini Adulto",
        tipo: "perro",
        peso: 3,
        precio: 2800
    },
    {
        id: 2,
        marca: "Royal Canin ",
        producto: "Maxi adulto",
        tipo: "perro",
        peso: 15,
        precio: 7500
    },
    {
        id: 3,
        marca: "Royal Canin ",
        producto: "Gato Adulto",
        tipo: "gato",
        peso: 7.5,
        precio: 6900
    },
    {
        id: 4,
        marca: "Royal Canin ",
        producto: "Maxi cachorro",
        tipo: "perro",
        peso: 12,
        precio: 9600
    },
]
function ItemListContainer(props) {
    
    const [cargando, setLoading] = useState(true)
    const [items, setProductos] = useState([])

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })
        promesa
        .then((CargaCorrecta)=>{
            setProductos(productosIniciales)
        })
        .catch((CargaIncorrecta)=>{
            console.log(CargaIncorrecta)
        })
        .finally(()=>{
            setLoading(false)
        })
    })


    return (
        <main>
            <p>{cargando ? "Aguarde un momento por favor estamos iniciando el carrito" : <ItemList items={items}/> }</p>
        </main>
    );
}
export default ItemListContainer