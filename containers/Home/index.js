import { Basic } from 'components'


const Home = () => {
    return (
        <div>
            <p>Pone una cancion para buscar pistas relacionadas!</p>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Nombre de la cancion" name="search"></input>
                    <button type="submit">Submit</button>
                </form>

            <p>
                Canciones relacionadas:
            </p>
            </div>


        </div>
    )
}

export default Home

//BASIC es el form