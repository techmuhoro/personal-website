import React from 'react'
import BlogCard from './blog-card'
import styles from './blog.module.scss'

export default function Posts() {
   return (
      <div className='w-[90%] md:w-[85%] mx-auto '>
         <div className={`${styles['cards-container']} `}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
         </div>
      </div>
   )
}
