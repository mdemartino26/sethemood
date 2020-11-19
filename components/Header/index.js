import Head from 'next/head'
import {Estilos as Cabeza} from './styled';


const Header = () => {
    return (
        <>
        <Cabeza>
            <div >
            <Head></Head>
            <div className="titulo">
               <a href ="/" ><h1> Set the Mood </h1></a>
            </div>
            <div className="sesion">
              <a href="/login">Login</a>
              <a href="/signup">Sign Up</a>
            </div>
            </div>
            </Cabeza>
        </>

    )
}
export default Header