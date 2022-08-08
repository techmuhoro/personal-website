import React from 'react'
import Link from 'next/link'
import styles from '../Landing.module.scss'
import { useRouter } from 'next/router'

export default function NavLinks() {
   const router = useRouter()

   function linkRedirect(id: string) {
      router.push('/')
      router.push(`/#${id}`)
   }

   return (
      <div className='hidden md:block'>
         <ul className='flex items-center gap-x-16 mr text-[15px] lg:text-[1.1rem] font-mono'>
            <li>
               <a
                  className={styles['nav-link']}
                  onClick={() => linkRedirect('about')}
               >
                  <span className='mr-0.5'>about</span>
                  <span className='font-mono text-primary'>()</span>
               </a>
            </li>
            <li>
               <a
                  className={styles['nav-link']}
                  onClick={() => linkRedirect('experience')}
               >
                  <span>experience</span>
                  <span className='font-mono text-primary'>()</span>
               </a>
            </li>
            <li>
               <a
                  className={styles['nav-link']}
                  onClick={() => linkRedirect('projects')}
               >
                  <span>projects</span>
                  <span className='font-mono text-primary'>()</span>
               </a>
            </li>
            <li>
               <a
                  className={styles['nav-link']}
                  onClick={() => linkRedirect('contact')}
               >
                  <span>contact</span>
                  <span className='font-mono text-primary'>()</span>
               </a>
            </li>
         </ul>
      </div>
   )
}
