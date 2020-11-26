import Link from 'next/link'
import { Estilos } from './styled'



const SpotifyProfile = () => {



    return (
     <Estilos>
        <Link href='https://accounts.spotify.com/authorize?client_id=b7060431aad444dfb62577242ca0c809&response_type=code&redirect_uri=https://localhost:3000/dashboard'>
        <button> Conectar con Spotify 
        </button>
        
        
        </Link>
        
        </Estilos> 
    )
   
    } 
  ;console.log('estamos dentro')
      


       
         
       // GET https://api.spotify.com/v1/users/{user_id}
    






export default SpotifyProfile;