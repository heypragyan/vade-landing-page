import type { NextPage } from 'next'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import Body from '@components/Body'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Body />
    </div>
  )
}

export default Home
