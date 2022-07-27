import React from 'react'
import Container from './Container'
import Contents from './Contents'

type Props = {
   showMobileNav: boolean
   setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}

export function MobileNav({ showMobileNav, setShowMobileNav }: Props) {
   return (
      <Container
         showMobileNav={showMobileNav}
         setShowMobileNav={setShowMobileNav}>
         <Contents setShowMobileNav={setShowMobileNav} />
      </Container>
   )
}
