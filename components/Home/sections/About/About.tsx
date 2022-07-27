import React from 'react'
import Image from 'next/image'
import Skill from './Skill'
import styles from './About.module.scss'

export function About() {
   return (
      <div id='about' className={styles['about-container']}>
         <div className='section-container mt-10'>
            <div className='md:flex'>
               <div className={styles['about-text']}>
                  <p className='font-bold text-3xl mb-4'>About me</p>
                  <div className='tracking-wide font-normal leading-[25px] text-gray-400'>
                     <p className='mb-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati quia inventore expedita, tempora cumque
                        distinctio debitis quo magni sit eveniet, a repellendus
                        ab? A reiciendis assumenda eveniet. Vitae, nam hic?
                     </p>
                     <p className='mb-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati quia inventore expedita, tempora cumque
                        distinctio debitis quo magni sit eveniet, a repellendus
                        ab? A reiciendis assumenda eveniet. Vitae, nam hic?
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

               <div className={styles['about-image']}>
                  <div className={styles['img-container']}>
                     <Image
                        src='/skills.png'
                        layout='fill'
                        alt='Skills avatar'
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
