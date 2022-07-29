import React from 'react'
import styles from './blog.module.scss'
import Nav from '@comps/Home/sections/Landing/Nav'
import Header from './header'
import BlogCard from './blog-card'
import Posts from './posts'

export function Blog() {
   return (
      <div className='bg-dark  text-[#C1C1C1] min-h-screen'>
         <Nav />
         <Header />
         <Posts />
      </div>
   )
}
