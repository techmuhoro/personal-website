import React from 'react'
import styles from '../Landing.module.scss'
import Cta from './Cta'

export default function LeftSide() {
   return (
      <div className={styles['left-side']}>
         <div>
            <p className='font-mono mt-32 md:mt-0 mb-4 border border-primary inline-block px-4 py-[2px] rounded-3xl bg-primary bg-opacity-5'>
               Hello 👋🏽
            </p>
            <div className='text-[2.15rem] md:text-[1.8rem] font-bold mb-4'>
               <p className=''>
                  My Name is <span className='text-primary'>James Muhoro</span>
               </p>
               <p>A Full stack developer</p>
            </div>
            <div className='text-gray-300 mb-8'>
               <p>
                  I am addicted to learning, building the web and writing clean,
                  maintable code and love working with people. My motto is learn
                  build and maintain together.
               </p>
            </div>
            <div>
               <Cta />
            </div>
         </div>
      </div>
   )
}
