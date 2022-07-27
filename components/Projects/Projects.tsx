import React from 'react'
import Nav from '@comps/Home/sections/Landing/Nav'
import Header from './Header'
import { projects } from 'data/projects'
import styles from './Projects.module.scss'
import ProjectCard from '@comps/reusable/ProjectCard'

export function Projects() {
   return (
      <div className='bg-dark  text-[#C1C1C1] min-h-screen'>
         <Nav />
         <Header />
         <div className='section-container'></div>
         <div className={styles['cards-container']}>
            {React.Children.toArray(
               projects.map((item) => <ProjectCard project={item} />)
            )}
         </div>
      </div>
   )
}
