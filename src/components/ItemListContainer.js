import ItemList from "./ItemList";
import {useState,useEffect} from "react";

let productosIniciales = [
    {
        id: 1,
        marca: "Royal Canin ",
        producto: "Mini Adulto",
        tipo: "perro",
        peso: 3,
        precio: 2800,
        img: "./img/Royal canin mini adulto.jpg"
    },
    {
        id: 2,
        marca: "Royal Canin ",
        producto: "Maxi adulto",
        tipo: "perro",
        peso: 15,
        precio: 7500,
        img: "./img/Royal canin maxi adulto.jpg"
    },
    {
        id: 3,
        marca: "Royal Canin ",
        producto: "Gato Adulto",
        tipo: "gato",
        peso: 7.5,
        precio: 6900,
        img: "./img/Royal canin gato 7+.png"
    },
    {
        id: 4,
        marca: "Royal Canin ",
        producto: "Maxi cachorro",
        tipo: "perro",
        peso: 12,
        precio: 9600,
        img: "./img/Royal canin puppy.webp"
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
            {cargando ? <p>Aguarde un momento por favor estamos iniciando el carrito</p> : <ItemList items={items}/> }
        </main>
    );
}
export default ItemListContainer