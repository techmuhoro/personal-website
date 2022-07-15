import React from 'react';

export default function Logo() {
   return (
      <div className="w-[56px] h-[56px] relative">
         <p className="w-full h-full border-2 border-white rounded-full absolute top-0 left-0 bg-white bg-opacity-10"></p>
         <p className="w-[40px] h-[40px]  bg-white rounded-full  flex items-center justify-center absolute left-[7px] top-[7px]">
            <span className="font-semibold text-2xl text-black">J</span>
         </p>
      </div>
   );
}
