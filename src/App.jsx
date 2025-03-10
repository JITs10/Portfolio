import React from 'react'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Contact from './components/Contact'
import RandomBackground from './components/RandomBackground'


function App() {
  return <>
     <div className="fixed -z-10 min-h-screen w-full">
     <RandomBackground/>
       </div> 
    <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 text-white'>
   
      <Navbar/>
      <Hero/>
      <Tech/>
      <Projects/>
      <Contact/>
    </main>
  </>
}

export default App

