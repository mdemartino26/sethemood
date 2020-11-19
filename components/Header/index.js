import Head from 'next/head'
import NavBar from '../NavBar'
import {Estilos as Cabeza} from './styled';


const Header = () => {
    return (
        <>
        <Cabeza>
            <div className="styled">
            <Head></Head>
            <div className="headerstyled">
            <div className="titulo">
               <a href ="/" className="ahref"><h1> Set the Mood </h1></a>
            </div>
            <NavBar/>
            </div>
            </div>
            </Cabeza>
        </>

    )
}
export default Header