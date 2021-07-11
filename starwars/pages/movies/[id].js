// We need to tell Nextjs how many html pages needed to be made based on our data (remote api). Both get static paths and get static props get triggered on build or development so they do it before the final component actually renders on the page.
export const getStaticPaths = async () => {
    const res = await fetch('https://swapi.dev/api/films');
    const data = await res.json();

    const paths = data.results.map(movie => {
        return {
            params: { id: movie.episode_id.toString() }
        }
    })

    return {
        paths, //Next will see how this paths function and then know how many pages to create
        fallback: false //This is for if for some reason a url is incorrect it will direct to our 404 page.
    }
}

// We fetch a single item (id) and pass the data as props to the details page component to render the single item. 
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://swapi.dev/api/films/' + id);
    const data = await res.json();

    return {
        props: {movie: data}
    }
}

// Final rendering using the fetched details from above.
export default function Details ({movie}) {
    return (
        <div>
            <h1>{movie.title}</h1>
            <h3>Episode {movie.episode_id}</h3>
            <p>{movie.director}</p>
            <p>{movie.release_date}</p>
            <p>{movie.opening_crawl}</p>
        </div>
    )
}
