import React from 'react'
import styles from './blog.module.scss'

export default function Header() {
   return (
      <div className='pt-24 mb-10'>
         <div className='flex justify-center'>
            <p className={styles['page-header']}>My Post</p>
         </div>
      </div>
   )
}
