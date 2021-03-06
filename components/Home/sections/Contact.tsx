import Link from 'next/link'
import React from 'react'

export default function Contact() {
   return (
      <div className='mb-20'>
         <div className='section-container'>
            <p className='font-bold text-3xl mb-4 tracking-[0.03rem]'>
               How to reach me
            </p>
            <p className='text-center mb-3 tracking-[0.03rem]'>
               You can contact me via twitter{' '}
               <Link href={'https://twitter.com/ice_coder'}>
                  <a className='text-blue-500 underline'>here</a>
               </Link>
               .
            </p>
            <p className='text-center mb-3'>Or</p>
            <p className='text-center mb-2 tracking-[0.03rem]'>
               Leave a me a message(muhorojames7@gmail.com)
            </p>
            <div className='flex justify-center'>
               <Link href='mailto:muhorojames7@gmail.com'>
                  <button className='border border-primary px-10 py-3 rounded-md bg-primary bg-opacity-5 hover:bg-opacity-0 transition-all'>
                     Leave message
                  </button>
               </Link>
            </div>
         </div>
      </div>
   )
}
