import React from 'react';
import Image from 'next/image';

export default function Header (){
  return (
    <nav className='border-gray-300 border-solid border-b-[1px] mt-6'>
      <div className='flex justify-evenly lg:justify-between items-center'>
        <div className='ml-6'>
          <p className='font-bold text-[16px] media590:text-[24px] media769:text-[30px] mb-5'>Test Analysis App</p>
        </div>
        <div className='w-32 media590:w-40 p-2 flex rounded-md font-bold border-gray-300 border-solid border-[1px] mb-6 mr-6'>
          <Image className='rounded-full mr-1' src='/student.png' alt='student' objectFit='contain' width={30} height={30}/>
          <p className='mt-1 media590:mt-0 text-[10px] media590:text-base'>Sanjula Arora</p>
        </div>
      </div>
    </nav>
  )
}
