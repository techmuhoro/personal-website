import React, { useState } from 'react'
import Logo from '@comps/reusable/Logo'
import Link from 'next/link'
import styles from '../Landing.module.scss'
import NavLinks from './NavLinks'

export function Nav() {
   return (
      <div className={styles['nav-container']}>
         <div className=''>
            <Logo />
         </div>
         <NavLinks />
         <div className='flex'>
            <div className='mr-4 md:mr-0'>
               <button className='bg-white text-black px-10 py-2 rounded-md'>
                  Blog
               </button>
            </div>
            <div className='w-[55px] ml-auto flex items-end cursor-pointer flex-col gap-y-[9px] bder md:hidden'>
               <div className='w-full h-[4px] bg-primary rounded' />
               <div className='w-[80%] h-[4px] bg-primary rounded' />
               <div className='w-[65%] h-[4px] bg-primary rounded' />
            </div>
         </div>
      </div>
   )
}
