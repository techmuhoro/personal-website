import React, { useState } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { experiences } from 'data/experience'
import SingleExperience from './SingleExperience'
import styles from './Experience.module.scss'

export function Experience() {
   const [activeTab, setActiveTab] = useState('techtenum') // other option 'knh'

   const experience = experiences.find((item) => item.title === activeTab)

   const tabClass1 = clsx(styles['tab-link'], {
      [styles['active']]: activeTab === 'techtenum',
   })

   const tabClass2 = clsx(styles['tab-link'], {
      [styles['active']]: activeTab === 'knh',
   })

   return (
      <div className='mb-20'>
         <div className='section-container'>
            <div className='lg:flex lg:justify-center'>
               <div className=' lg:w-[700px]'>
                  <p className='font-bold text-3xl mb-4'>Career Highlights</p>
                  <div className='md:flex'>
                     <div className='mb-5 md:mr-6'>
                        <ul className='font-mono text-sm flex gap-x-4 flex-nowrap  overflow-x-auto md:flex-col'>
                           <li
                              onClick={() => setActiveTab('techtenum')}
                              className={`${tabClass1}`}>
                              Techtenum
                           </li>
                           <li
                              onClick={() => setActiveTab('knh')}
                              className={tabClass2}>
                              KNH
                           </li>
                        </ul>
                     </div>
                     <SingleExperience experience={experience} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
