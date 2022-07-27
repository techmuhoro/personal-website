import React, { useEffect, useState } from 'react'
import Logo from '@comps/reusable/Logo'
import Link from 'next/link'
import styles from '../Landing.module.scss'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import clsx from 'clsx'

export function Nav() {
   const [floatingNav, setFloatingNav] = useState(false)
   const [showMobileNav, setShowMobileNav] = useState(false)

   useEffect(() => {
      let previousYOffeset = window.pageYOffset

      // logic after scroll
      function handleScroll() {
         if (window.pageYOffset < 200) {
            setFloatingNav(false)
         } else {
            if (previousYOffeset > window.pageYOffset && floatingNav !== true) {
               setFloatingNav(true)
            }

            if (
               previousYOffeset < window.pageYOffset &&
               floatingNav !== false
            ) {
               setFloatingNav(false)
            }
         }

         previousYOffeset = window.pageYOffset
      }

      // scroll event
      window.addEventListener('scroll', handleScroll)

      // clean up
      return () => window.removeEventListener('scroll', handleScroll)
   }, [floatingNav])
   return (
      <>
         <div
            className={clsx(styles['nav-container'], {
               [styles['nav-float']]: floatingNav,
            })}
         >
            <div className=''>
               <Logo />
            </div>
            <NavLinks />
            <div className='flex'>
               <Link href={'/blog'} passHref className=''>
                  <a className='bg-white text-black px-10 py-2 rounded-md mr-4 md:mr-0'>
                     Blog
                  </a>
               </Link>

               <div
                  onClick={() => setShowMobileNav(true)}
                  className='w-[55px] ml-auto flex items-end cursor-pointer flex-col gap-y-[9px] bder md:hidden'
               >
                  <div className='w-full h-[4px] bg-primary rounded' />
                  <div className='w-[80%] h-[4px] bg-primary rounded' />
                  <div className='w-[65%] h-[4px] bg-primary rounded' />
               </div>
            </div>
         </div>
         <>
            <MobileNav
               showMobileNav={showMobileNav}
               setShowMobileNav={setShowMobileNav}
            />
         </>
      </>
   )
}
