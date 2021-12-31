import type { NextPage } from 'next'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import Body from '@components/Body'
import Footer from '@components/Footer/Footer'
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <div className="min-h-screen w-full">
      <Head >
        <title>Vade Studio - No Code Platform For Backend Development</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vadelabs" />
        <meta name="twitter:title" content="Vade Studio" />
        <meta name="twitter:description" content="No Code Platform For Backend Development" />
        <meta name="twitter:image" content="https://www.vadelabs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhassle.9c05f918.png&w=3840&q=75" />
      </Head>
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  )
}

export default Home
