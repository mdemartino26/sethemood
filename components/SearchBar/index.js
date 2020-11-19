import { Estilos } from './styled'

const SearchBar = ({ children, ...props }) => {
    //const [searchData, setSearchData] = useState("");
    return (
        <Estilos>
        <div className="buscar">
            <div className="bar">
                
                <input placeholder="Buscar una cancion" className="input"/>
             </div>
                <button className="boton">
                    Buscar
                </button>
                </div>
        </Estilos>
    )
}

export default SearchBar;