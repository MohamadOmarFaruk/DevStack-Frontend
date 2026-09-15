
import { Suspense } from 'react';
import './App.css'
import Explore from './Components/Explore';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import type { Typeofdummy } from './Type';
import Footer from './Components/footer';

function App() {
  const GetDummyData = async():Promise<Typeofdummy[]>=>{
    const res = await fetch("/Dummydata.json")
    const data = await res.json()
    return data

  }

  return (
      <>
      <Navbar />
      <Hero/>
      <Suspense fallback={<p>Loading...</p>}>
      <Explore Dummydata={GetDummyData()}/>
      </Suspense>

      <Footer/>
    </>
  )
}

export default App
