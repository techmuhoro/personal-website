import React from 'react'
import styles from '../Landing.module.scss'
import { useRouter } from 'next/router'

export default function Cta() {
   const router = useRouter()

   function downloadResume() {
      router.push('/resume.pdf')
   }

   return (
      <>
         <button onClick={downloadResume} className={styles['hero-cta']}>
            Get Resume
         </button>
      </>
   )
}
