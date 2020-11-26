import Link from 'next/link'

const SpotifyProfile = () => {



    return (
     
        <Link href='https://accounts.spotify.com/authorize?client_id=b7060431aad444dfb62577242ca0c809&response_type=code&redirect_uri=https://sethemood.vercel.app/dashboard'>
        <button> Conectar con Spotify 
        </button>
        </Link>
            
    )
    }
  ;
      


       
         
       // GET https://api.spotify.com/v1/users/{user_id}
    






export default SpotifyProfile;