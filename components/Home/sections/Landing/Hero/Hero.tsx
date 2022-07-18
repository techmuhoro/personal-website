import React from 'react'
import styles from '../Landing.module.scss'
import Image from 'next/image'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export function Hero() {
   return (
      <div className='section-container'>
         <div className={styles['hero-container']}>
            <div className='md:flex  h-full'>
               <LeftSide />
               <RightSide />
            </div>
         </div>
      </div>
   )
}
