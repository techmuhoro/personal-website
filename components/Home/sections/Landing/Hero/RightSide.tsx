import React from 'react';
import styles from '../Landing.module.scss';
import Image from "next/image"

export default function RightSide() {
   return (
      <div className={styles['right-side']}>
         <div className={`${styles['hero-image']}`}>
            <div className={styles['underlay']}></div>
            <Image src='/profile.png' layout='fill' className='profile' />
         </div>
      </div>
   )
}
