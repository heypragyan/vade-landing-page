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
        <title>Vade Studio - No Code Platform For Backend Development.</title>
      </Head>
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  )
}

export default Home
