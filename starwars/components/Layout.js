//import all the components that should be displayed on every page of the app
import Footer from "./Footer";
import Navbar from "./Navbar";
//import styling module
import styles from "../styles/Home.module.css"

// Creating a function called layout that passes in the destructured children
export default function Layout({children}) {
    return (
        <div className='content'>
            <Navbar />
            {/* display images on every page */}
                <img className={styles.img} src='/starwars.png' alt='star wars image' />
                <img className={styles.img} height="200px" src='/yoda.jpg' alt='yoda image'/>
                {children}
            <Footer />
        </div>
    )
}
