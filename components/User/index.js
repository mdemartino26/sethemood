import Link from 'next/link'

const SpotifyProfile = () => {

var authOptions = {
    url:( 'https://accounts.spotify.com/authorize?client_id=b7060431aad444dfb62577242ca0c809&response_type=code&redirect_uri=http://localhost:3000/dashboard'),
  }

return(
    <Link href='https://accounts.spotify.com/authorize?client_id=b7060431aad444dfb62577242ca0c809&response_type=code&redirect_uri=http://localhost:3000/dashboard'><button> Conectar con Spotify </button></Link>
    )



}

export default SpotifyProfile;