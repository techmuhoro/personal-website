import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Skill({ name }: { name: string }) {
   return (
      <div className={`flex items-center  w-[49%]`}>
         <p className='mr-2 text-primary text-sm'>
            <FontAwesomeIcon icon={faPlay} />
         </p>
         <p>{name}</p>
      </div>
   )
}
