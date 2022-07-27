import React from 'react'
import Landing from './sections/Landing'
import About from './sections/About'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export function Home() {
   return (
      <div className='bg-dark  text-[#C1C1C1]'>
         <Landing />
         <About />
         <Experience />
         <Projects />
         <Contact />
         <Footer />
      </div>
   )
}
