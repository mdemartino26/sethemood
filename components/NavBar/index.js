import Link from 'next/link';
import {Estilos} from './styled';
import { useAuth } from 'lib/useUser';

export default function NavBar() {
    const auth = useAuth();
    return (
        <Estilos>
            <ul>
                {!auth.user ?
                    <>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/signup"><a>Sign Up</a></Link></li>
                        <li  id="log"><Link href="/login" id="log"><a>Login</a></Link></li>
                        
                    </>
                    :
                    <>
                        <li><Link href="/dashboard"><a>Dashboard</a></Link></li>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li  id="log"><Link href="/"><a onClick={() => auth.logout()}>Logout</a></Link></li>
                        
                    </>
                }
            </ul>
        </Estilos>
    )
}