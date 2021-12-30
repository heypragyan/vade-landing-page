import type { NextPage } from 'next'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
