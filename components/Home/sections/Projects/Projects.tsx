import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from 'data/projects'
import styles from './Projects.module.scss'

export function Projects() {
   return (
      <div className='mb-20'>
         <div className='section-container'>
            <p className='font-bold text-3xl mb-4'>My Projects</p>
            <div className={styles['cards-container']}>
               {React.Children.toArray(
                  projects
                     .slice(0, 4)
                     .map((project) => <ProjectCard project={project} />)
               )}
            </div>
         </div>
      </div>
   )
}
