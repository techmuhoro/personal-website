import React from 'react'
import Link from 'next/link'
import styles from '../Landing.module.scss'

export default function NavLinks() {
   return (
      <div className='hidden md:block'>
         <ul className='flex items-center gap-x-16 mr text-[15px] lg:text-[1.1rem] font-mono'>
            <li>
               <Link href='#about'>
                  <a className={styles['nav-link']}>
                     <span className='mr-0.5'>about</span>
                     <span className='font-mono text-primary'>()</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href='#experience'>
                  <a className={styles['nav-link']}>
                     <span>experience</span>
                     <span className='font-mono text-primary'>()</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href='#projects'>
                  <a className={styles['nav-link']}>
                     <span>projects</span>
                     <span className='font-mono text-primary'>()</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href='#contact'>
                  <a className={styles['nav-link']}>
                     <span>contact</span>
                     <span className='font-mono text-primary'>()</span>
                  </a>
               </Link>
            </li>
         </ul>
      </div>
   )
}
