import React from 'react'
import { Experience } from '@/types/data'
import Achievement from './Achievement'

export default function SingleExperience({
   experience,
}: {
   experience: Experience | undefined
}) {
   return (
      <div className=''>
         <div className='mb-4'>
            <p>
               <span className='text-primary font-semibold mr-2'>
                  {experience?.role}
               </span>
               <span className=''>@{experience?.fullName}</span>
            </p>
            <p className='font-mono text-sm'>
               {experience?.start} - {experience?.end}
            </p>
         </div>
         <div>
            {React.Children.toArray(
               experience?.achievements.map((item) => (
                  <Achievement text={item} />
               ))
            )}
         </div>
      </div>
   )
}
