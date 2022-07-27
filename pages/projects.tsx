import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const LazyProjects = dynamic(() => import('components/Projects'), {
   suspense: true,
})

export default function ProjectsPage() {
   return (
      <Suspense fallback='loading'>
         <LazyProjects />
      </Suspense>
   )
}
