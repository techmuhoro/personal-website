import React, { useState } from 'react';
import Logo from '@comps/reusable/Logo';
import Link from 'next/link';

export default function Nav() {
   return (
      <div className="flex items-center py-2 px-6 border">
         <div className="">
            <Logo />
         </div>
         <div className="items-center ml-auto hidden">
            <ul className="flex items-center gap-x-10 mr-20 text-[18px]">
               <li className="border border-white">
                  <Link href="#about">About</Link>
               </li>
               <li>
                  <Link href="#about">Experience</Link>
               </li>
               <li>
                  <Link href="#about">Projects</Link>
               </li>
               <li>
                  <Link href="#about">Contact</Link>
               </li>
               <li>
                  <Link href="#about">Blog</Link>
               </li>
            </ul>
            <button className="border rounded border-primary px-10 py-2">
               Get Resume
            </button>
         </div>
         <div className="w-[55px] ml-auto flex items-end cursor-pointer flex-col gap-y-[9px] bder">
            <div className="w-full h-[4px] bg-primary rounded" />
            <div className="w-[80%] h-[4px] bg-primary rounded" />
            <div className="w-[65%] h-[4px] bg-primary rounded" />
         </div>
         {/* <div className="w-[30px]   h-[40px] relative ml-auto">
            <div className="w-[50px] h-[4px] bg-primary origin-top-left rotate-[50deg] rounded" />
            <div className="w-[50px] h-[4px] bg-primary rounded absolute bottom-0 origin-top-left -rotate-[50deg]" />
         </div> */}
      </div>
   );
}
