import type { NextPage } from 'next'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import Body from '@components/Body'
import Footer from '@components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  )
}

export default Home
