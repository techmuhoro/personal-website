import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import styles from './blog.module.scss'

export default function BlogCard() {
   return (
      <div className='bg-[#1B222D] py-5 px-4'>
         <div className='cursor-pointer'>
            <p className='mb-2 font-mono text-xl font-semibold text-white transition-[color] duration-200 hover:text-primary py-1'>
               Statements vs Expressions
            </p>
            <div className='mb-6'>
               <p className='tracking-wide font-light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  voluptas, est temporibus minima illo modi necessitatibus
                  exercitationem quidem beatae aspernatur labore laboriosam
                  inventore rerum, porro pariatur nesciunt neque? A harum
                  officiis blanditiis numquam temporibus cumque at dicta nostrum
                  ducimus consequatur?
               </p>
            </div>
            <p className='inline-block'>
               <span className={styles['blog-link']}>
                  <span>Read more</span>
                  <span className={styles['link-icon']}>
                     <FontAwesomeIcon icon={faArrowRightLong} />
                  </span>
               </span>
            </p>
         </div>
      </div>
   )
}
