// Importing link and useRouter module for routing. Using React useEffect so that we can tell the app to do something after the initial lifecycle render. 
import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router'

export default function NotFound() {
    // Initialising useRouter method.
    const router = useRouter();

    // Use effect has a delay of 3 seconds before it routes the user back to the home page
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

// Final rendering
    return (
        <div className='not-found'>
            <h1>Ooopss...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}
