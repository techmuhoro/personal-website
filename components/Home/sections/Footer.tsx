import React from 'react'
import styles from './Sections.module.scss'

export default function Footer() {
   return (
      <footer id='footer' className='border-t-[1.5px] border-gray-700 pt-10'>
         <p className='text-center'>
            &copy; {new Date().getFullYear()} Desing and build by James Muhoro
         </p>
      </footer>
   )
}
