import { Container } from './styled'
import Perfil from '../../components/Perfil'
import SpotifyProfile from '../../components/User'



const Dashboard = () => {
    return (
        <Container>
        <Perfil/>
        <SpotifyProfile/>
        </Container>
    )
}

export default Dashboard