import React, { useRef } from 'react'
import styles from '../../Landing.module.scss'
import clsx from 'clsx'

type Props = {
   showMobileNav: boolean
   setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
   children: JSX.Element
}

export default function Container(props: Props) {
   const { showMobileNav, setShowMobileNav, children } = props
   const ref = useRef(null)
   return (
      <div
         onClick={(e) => setShowMobileNav(false)}
         className={clsx(styles['mobile-nav-container'], {
            [styles['show']]: showMobileNav,
         })}>
         {children}
      </div>
   )
}
