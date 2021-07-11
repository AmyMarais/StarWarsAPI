// Importing our layout component and global css here
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // Place the layout component around the default components thereby creating a child parent relationship.
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

//export
export default MyApp;