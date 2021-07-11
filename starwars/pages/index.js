// importing styles for css and Head 
//import Link for routing
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import swstyles from '../styles/Starwars.module.css'
import Link from 'next/link'

//getStaticProps allows us to fetch the data during the production time. 
//We then pass the results of that fetched data as props so the Home function can make use of the fetched datd
export const getStaticProps = async () => {
  //fetch data
  const res = await fetch('https://swapi.dev/api/films/');
  const data = await res.json();
  let starwars = data;

  return {
    props: starwars
  }
}

// create home page component to display all relevant info
export default function Home(starwars) {
  return (
    <>
    <Head>
      <title>STARWARS</title>
      <meta name="keywords" content="starwars" />
    </Head>
    <div>
    {/* Using css module styling method instead of styles jsx method - this makes my code cleaner than jsx would */}
      <h1 className={styles.title}>EPISODES</h1>
      
      {/* Mapping our passed prop data so that we can create different cards that hold our fetched data and present it */}
      {starwars.results.map(movie => (
        <Link href={'/movies/' + movie.episode_id} key={movie.episode_id}>
          <a className={swstyles.single}>
            <h3>{movie.title}</h3>
            <p className={styles.text}>EPISODE{movie.episode_id}</p>
          </a>
        </Link>
        )
      )}
    </div>
    </>
  )
}
