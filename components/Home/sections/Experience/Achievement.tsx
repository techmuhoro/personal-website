import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Achievement({ text }: { text: string }) {
   return (
      <div className='flex mb-3'>
         <p className='text-primary text-sm mt-1 mr-3'>
            <FontAwesomeIcon icon={faPlay} />
         </p>
         <p className='text-[14.5px] md:text-[15px]'>{text}</p>
      </div>
   )
}
