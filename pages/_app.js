import Fonts from '../components/fonts'
import Layout from '../components/Layouts'
import '../styles/globals.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Fonts />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
