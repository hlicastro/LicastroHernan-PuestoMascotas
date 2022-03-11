import ItemDetail from "./ItemDetail";
import {useState,useEffect} from "react";

let productosDescripcion = 
    {
        id: 1,
        marca: "Royal Canin ",
        producto: "Mini Adulto",
        tipo: "perro",
        peso: 3,
        precio: 2800,
        img: "./img/Royal canin mini adulto.jpg",
        stock: 5,
        inicial: 1,
        detalle:"Alimento para perros adultos de talla pequeña (peso adulto hasta 10 kg). De 10 meses a 8 años de edad.",
        composicion:"INGREDIENTES:  \n Arroz, harina de subproductos de pollo, maíz,harina de gluten de maíz, grasas vacuna, aceite de pollo, hidrolizadode hígado de pollo, proteína vegetal purificada L.I.P.* (gluten de trigo),pulpa de remolacha, celulosa purificada, sales minerales, aceite depescado, aceite de soja, levadura de cerveza, vitaminas, oligoelementos,fructo-oligosacáridos (FOS), DL-metionina, L-carnitina, taurina.(*) Low Indigestible Protein: proteína seleccionada por su alta asimilación.Vitaminas: Vitamina A, vitamina D3, vitamina E, vitamina C, pantotenatode calcio, niacina, vitamina B1, vitamina B2, vitamina B6, ácido fólico,biotina, vitamina B12, colina.Sales minerales: Politrifosfato de sodio, cloruro de sodio, cloruro depotasio, sorbato de potasio, calcita, óxido de magnesio, fosfatomonocálcico.Oligoelementos: Óxido de zinc, sulfato de hierro, óxido de manganeso,sulfato de cobre, selenio orgánico, iodato de calcio.Conservantes y antioxidantes: BHA, galato de propilo y ácido cítrico.   \n Proteína bruta (mín.): 25%; Extractoetéreo (mín.): 14%; Fibra cruda (máx.): 4%; Minerales (máx.): 5,9%;Humedad (máx.): 11%; Calcio (mín.): 0,55%, (máx.): 1,28%; Fósforo(mín.): 0,48%, (máx.): 1,12%; Sodio (máx.): 0,48%.Energía Metabolizable: 3.919 kcal/kg. Enriquecimiento por Kg (mín.):Vitaminas: A: 22.000 UI; D3: 1.000 UI; E: 500 mg; C: 200 mg; B1: 4,2 mg;Niacina: 47 mg; Ác. Fólico: 8,9 mg; B2: 6,8 mg; B6: 26,4 mg; Biotina:2,74 mg; B12: 0,07 mg; Pantotenato de calcio: 34,3 mg; Colina: 1.200 mg.Oligoelementos: Cobre: 11 mg; Hierro: 36 mg; Manganeso: 47 mg;Zinc: 142 mg; Selenio: 0,09 mg; Yodo: 3,6 mg."
        }
    

function ItemDetailContainer(props) {
    
    const [cargando, setLoading] = useState(true)
    const [itemdescripticion, setProductos] = useState([])

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosDescripcion)
            },2000)
        })
        promesa
        .then((CargaCorrecta)=>{
            setProductos(productosDescripcion)
        })
        .catch((CargaIncorrecta)=>{
            console.log(productosDescripcion)
        })
        .finally(()=>{
            setLoading(false)
        })
    })


    return (
        <main>
            {cargando ? <p>Aguarde un momento por favor estamos iniciando el carrito</p> : <ItemDetail item={itemdescripticion}/> }
        </main>
    );
}
export default ItemDetailContainer