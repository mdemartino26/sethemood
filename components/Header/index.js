import Head from 'next/head'
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
            <div className="sesion">
              <a href="/login" className="ahref">Login</a>
              <a href="/signup" className="ahref">Sign Up</a>
            </div>
            </div>
            </div>
            </Cabeza>
        </>

    )
}
export default Header