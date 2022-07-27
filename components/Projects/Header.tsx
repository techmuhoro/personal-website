import React from 'react'
import styles from './Projects.module.scss'
import { projects } from 'data/projects'

export default function Header() {
   return (
      <div className='pt-24'>
         <div className='flex justify-center mb-6'>
            <p className={styles['page-header']}>My Projects</p>
         </div>
         <div className='flex justify-center mb-16'>
            <div className='flex items-center gap-x-3'>
               <p className='font-semibold text-lg font-mono'>Filter:</p>
               <select className='w-[300px] md:w-[400px] bg-transparent border border-white rounded py-2'>
                  <option className='text-black py-1' value='all'>
                     All
                  </option>
                  <option className='text-black' value='frontend'>
                     Frontend
                  </option>
                  <option className='text-black' value='backend'>
                     Backend
                  </option>
                  <option className='text-black' value='design'>
                     Designs
                  </option>
                  <option className='text-black' value='fullstack'>
                     FullStack
                  </option>
               </select>
            </div>
         </div>
      </div>
   )
}
