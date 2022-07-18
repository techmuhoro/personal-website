import React from 'react'
import Hero from './Hero'
import Nav from './Nav'

export function Landing() {
   return (
      <div className='min-h-screen mb-20'>
         <Nav />
         <Hero />
      </div>
   )
}
