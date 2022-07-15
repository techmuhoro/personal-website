import React from 'react';
import styles from './Landing.module.scss';
import Image from 'next/image';

export default function Hero() {
   return (
      <div className="section-container">
         <LeftSide />
         <RightSide />
      </div>
   );
}

function LeftSide() {
   return (
      <div className="mb-32">
         <p className="font-mono mt-32 mb-4 border border-primary inline-block px-4 py-[2px] rounded-3xl bg-primary bg-opacity-5">
            Hello 👋🏽
         </p>
         <div className="text-[2.15rem] font-bold mb-4">
            <p className="">
               My Name is <span className="text-primary">James Muhoro</span>
            </p>
            <p>A Full stack developer</p>
         </div>
         <div className="text-gray-300">
            <p>
               I am addicted to learning, building the web and writing clean,
               maintable code and love working with people. My motto is learn
               build and maintain together.
            </p>
         </div>
      </div>
   );
}

function RightSide() {
   return (
      <div>
         <div className={styles['hero-image']}>
            <div className={styles['underlay']}></div>
            <Image src="/profile.png" layout="fill" className="profile" />
         </div>
      </div>
   );
}
