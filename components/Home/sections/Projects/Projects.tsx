import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from 'data/projects'
import styles from './Projects.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faArrowRightLong,
   faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export function Projects() {
   return (
      <div id='projects' className='mb-20'>
         <div className='section-container'>
            <p className='font-bold text-3xl mb-4'>My Projects</p>
            <div className={styles['cards-container']}>
               {React.Children.toArray(
                  projects
                     .slice(0, 4)
                     .map((project) => <ProjectCard project={project} />)
               )}
            </div>
            <div className='flex justify-center mt-5'>
               <Link href='/projects' className='font-mono'>
                  <a className={styles['projects-link']}>
                     <span>All projects</span>
                     <span className={styles['link-icon']}>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                     </span>
                  </a>
               </Link>
            </div>
         </div>
      </div>
   )
}
