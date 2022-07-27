import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types/data'
// import styles from 'Reusable.module.scss';

export default function ProjectCard({ project }: { project: Project }) {
   return (
      <div className='w-[380px] bg-[#1B222D] py-4 px-3'>
         <div className='w-full h-[150px] mb-4 relative'>
            <Image src={project.cover} layout='fill' alt='project cover' />
         </div>
         <div>
            <p className='font-mono font-bold text-xl mb-2'>{project.name}</p>
            <p className='tracking-[0.03rem] mb-2'>{project.description}</p>
            <div className='text-[12.9px] font-mono flex gap-x-3 mb-10'>
               {React.Children.toArray(
                  project.techs.map((tech) => <p>{tech}</p>)
               )}
            </div>

            <div className='flex text-[1.6rem]'>
               <p className='text-primary'>
                  <FontAwesomeIcon icon={faFolder} />
               </p>
               <div className='ml-auto flex mr-4'>
                  <p className='mr-6 cursor-pointer transition-all hover:text-primary hover:-translate-y-0.5'>
                     <Link href={project.github} passHref>
                        <a target='_blank'>
                           <FontAwesomeIcon icon={faGithub} />
                        </a>
                     </Link>
                  </p>
                  <p className='cursor-pointer transition-all hover:text-primary hover:-translate-y-0.5 '>
                     <Link href={project.link} passHref>
                        <a target={'_blank'}>
                           <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
