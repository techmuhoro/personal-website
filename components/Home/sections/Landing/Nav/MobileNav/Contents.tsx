import React from 'react'
import Logo from '@comps/reusable/Logo'
import Link from 'next/link'
import styles from '../../Landing.module.scss'
import clsx from 'clsx'

interface Props {
   setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Contents(props: Props) {
   const { setShowMobileNav } = props

   return (
      <div
         onClick={(e) => e.stopPropagation()}
         className='bg-[#0c254d] w-[350px] h-full'
      >
         <div className='flex justify-center py-5'>
            <Logo />
         </div>
         <ul className={styles['mobile-links-wrapper']}>
            <li
               className={styles['mobile-link']}
               onClick={() => setShowMobileNav(false)}
            >
               <Link href='#about'>
                  <a className='font-mono w-full inline-block h-full py-3'>
                     <span className='mr-0.5'>about</span>
                     <span className={styles['brackets']}>()</span>
                  </a>
               </Link>
            </li>
            <li
               className={styles['mobile-link']}
               onClick={() => setShowMobileNav(false)}
            >
               <Link href='#experience' className=''>
                  <a className='font-mono w-full inline-block h-full py-3'>
                     <span>experience</span>
                     <span className={styles['brackets']}>()</span>
                  </a>
               </Link>
            </li>
            <li
               className={styles['mobile-link']}
               onClick={() => setShowMobileNav(false)}
            >
               <Link href='#about'>
                  <a className='font-mono w-full inline-block h-full py-3'>
                     <span>projects</span>
                     <span className={styles['brackets']}>()</span>
                  </a>
               </Link>
            </li>
            <li
               className={styles['mobile-link']}
               onClick={() => setShowMobileNav(false)}
            >
               <Link href='#about'>
                  <a
                     className='font-mono w-full inline-block h-full py-3'
                     onClick={(e) => {}}
                  >
                     <span>contact</span>
                     <span className={styles['brackets']}>()</span>
                  </a>
               </Link>
            </li>
         </ul>
      </div>
   )
}
