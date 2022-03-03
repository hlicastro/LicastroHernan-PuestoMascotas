import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import "./estilo.scss";

function App() {
    return (
        <>
            <NavBar/>
            <ItemListContainer
                alimento="Royal canig"
                precio="5623"
            />
        </>
    )   
}
export default App