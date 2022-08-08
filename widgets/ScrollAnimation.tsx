import React from 'react'
import styles from './widgets.module.scss'
import clsx from 'clsx'

export default function ScrollAnimation() {
   return (
      <>
         <p className={clsx(styles['scroll-animation'], 'border-white')}></p>
      </>
   )
}
