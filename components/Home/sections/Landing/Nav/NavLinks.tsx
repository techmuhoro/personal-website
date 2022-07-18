import React from 'react'
import Link from 'next/link'

export default function NavLinks() {
   return (
      <div className='hidden md:block'>
         <ul className='flex items-center gap-x-16 mr text-[15px] lg:text-[1.1rem] font-mono'>
            <li className='font-mono'>
               <Link href='#about'>
                  <a className='font-mono'>
                     <span className='mr-0.5'>about</span>
                     <span className='font-mono text-primary'>()</span>
                  </a>
               </Link>
            </li>
            <li className=''>
               <Link href='#about'>
                  <a>
                     <span>experience</span>
                     <span className='font-mono text-primary'>()</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href='#about'>
                  <a>
                     <span>projects</span>
                     <span className='font-mono text-primary'>()</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href='#about'>
                  <a>
                     <span>contact</span>
                     <span className='font-mono text-primary'>()</span>
                  </a>
               </Link>
            </li>
         </ul>
      </div>
   )
}
