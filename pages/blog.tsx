import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const LazyBlog = dynamic(() => import('components/Blog'), {
   suspense: true,
})

export default function Blog() {
   return (
      <Suspense fallback='Loading...'>
         <LazyBlog />
      </Suspense>
   )
}
