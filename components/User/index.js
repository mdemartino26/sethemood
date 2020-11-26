import Link from 'next/link'
import { Estilos } from './styled'
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


const SpotifyProfile = (props) => {

   


    return (
     <Estilos>
         <Link href='http://localhost:8888/'>
        <button> Conectar con Spotify </button>
        </Link>
       
     
        
        </Estilos> 
    )
   
    };
      


       
         
       // GET https://api.spotify.com/v1/users/{user_id}
    //'https://accounts.spotify.com/authorize?client_id=b7060431aad444dfb62577242ca0c809&response_type=code&redirect_uri=http://localhost:3000/'






export default SpotifyProfile;