import React from 'react'
import ProjectCard from '@comps/reusable/ProjectCard'
import { projects } from 'data/projects'

export default function Projects() {
   return (
      <div className='mb-20'>
         <div className='section-container'>
            <p className='font-bold text-3xl mb-4'>My Projects</p>
            <div className='flex flex-col items-center gap-y-5'>
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
