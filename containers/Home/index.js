import SearchBar from "../../components/SearchBar"
import { Container } from './styled'

const Home = () => {
    return (
        <Container>
        <div>
            <p className="texto">Pone una cancion para buscar pistas relacionadas!</p>
          
                
            <SearchBar></SearchBar>
            <p className="texto">
                Canciones relacionadas:
            </p>
        


        </div>
        </Container>
    )
}

export default Home

//BASIC es el form