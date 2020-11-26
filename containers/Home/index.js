import SearchBarra from "../../components/SearchBar"
import { Container } from './styled'

const Home = () => {
    return (
        <Container>
        <div>
            <p className="texto">Pone un artista y encontra relacionados!</p>
          
                
            <SearchBarra></SearchBarra>
            
        


        </div>
        </Container>
    )
}

export default Home

//BASIC es el form