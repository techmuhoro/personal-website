import React from 'react'
import styles from './widgets.module.scss'
import clsx from 'clsx'

interface Props {
   xPadding: string
   text: string
   handler?: () => void
}
export default function CoolButton(props: Props) {
   const { xPadding, text, handler = () => {} } = props
   return (
      <>
         <button
            type='button'
            className={`${styles['custom-btn']} ${xPadding}`}
            onClick={handler}
         >
            {text}
         </button>
      </>
   )
}
