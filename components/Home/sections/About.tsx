import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import Image from 'next/image'

export default function About() {
   function generatePattern() {
      const pattern = '+'
      const paras: JSX.Element[] = []

      for (let i = 0; i <= 30; i++) {
         paras.push(
            <p className='mb-4 text-xl text-white'>{pattern.repeat(80)}</p>
         )
      }

      return paras
   }
   return (
      <div className='mb-20  bg-plus-pattern pt-12 pb-20'>
         <div className='section-container mt-10'>
            <div className='mb-10'>
               <p className='font-bold text-3xl mb-4'>About me</p>
               <div className='tracking-wide font-normal leading-[25px] text-gray-400'>
                  <p className='mb-3'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Obcaecati quia inventore expedita, tempora cumque
                     distinctio debitis quo magni sit eveniet, a repellendus ab?
                     A reiciendis assumenda eveniet. Vitae, nam hic?
                  </p>
                  <p className='mb-3'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Obcaecati quia inventore expedita, tempora cumque
                     distinctio debitis quo magni sit eveniet, a repellendus ab?
                     A reiciendis assumenda eveniet. Vitae, nam hic?
                  </p>
                  <p className='mb-3'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Obcaecati quia inventore expedita, tempora cumque
                     distinctio debitis quo.
                  </p>
               </div>
               <div className='w-[89%] flex flex-wrap gap-y-3'>
                  <Skill name={'Typescript'} />
                  <Skill name='React/Next.js' />

                  <Skill name='Node/Express.js' />
                  <Skill name='Laravel' />

                  <Skill name='Docker' />
                  <Skill name='Design/Figma' />
               </div>
            </div>
            <div className=''>
               <div className='w-[400px] h-[400px] mx-auto relative'>
                  <Image src='/skills.png' layout='fill' alt='Skills avatar' />
               </div>
            </div>
         </div>
      </div>
   )
}

function Skill({ name }: { name: string }) {
   return (
      <div className={`flex items-center  w-[49%]`}>
         <p className='mr-2 text-primary text-sm'>
            <FontAwesomeIcon icon={faPlay} />
         </p>
         <p>{name}</p>
      </div>
   )
}
