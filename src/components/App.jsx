import NavBar from "./NavBar";
import  Carrito from "./Carrito";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./estilo.scss";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                </Routes>    
            </main>
            <ToastContainer/>
        </BrowserRouter>
    )   
}
export default App