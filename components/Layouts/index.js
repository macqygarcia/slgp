import Head from 'next/head'
import Navbar from '../Navigation/Navbar'
import Sidebar from '../Navigation/Sidebar'

export default function Main({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DILG SLGP Official Website" />
        <meta name="author" content="macqy garcia" />
        <meta name="author" content="macqy garcia" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@twitteraccount" />
        <meta name="twitter:creator" content="@twitteraccount" />
        {/* <meta name="twitter:image" content="/card.png" /> */}
        <meta property="og:site_name" content="Office Name Official Website" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/card.png" /> */}
        <title>DILG Support for the Local Governance Program</title>
      </Head>

      {/* Navigation goes here */}
      <Navbar />
      <Sidebar />
      {/* Container component goes here */}

      {/* Loader goes here */}

      {children}

      {/* Footer Goes here */}
    </>
  )
}
