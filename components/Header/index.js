import Head from 'next/head'

const Header = () => {
    return (
        <>
            <div >
            <Head></Head>
            <div>
               <a href ="/" ><h1> Set the Mood </h1></a>
            </div>
            <div>
              <a href="/login">Login</a>
              <a href="/signup">Sign Up</a>
            </div>
            </div>
        </>

    )
}
export default Header