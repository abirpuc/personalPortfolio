import React from 'react'

export default function ProjectFilter() {
  return (
    <div className='flex flex-col sm:flex-row gap-4'>
        <button className='text-sm py-[5px] px-[8px] rounded font-semibold border-2 border-primaryColor dark:border-darkPrimaryColor'>ALL</button>
        <button className='text-sm py-[5px] px-[8px] rounded font-semibold border-2 border-primaryColor dark:border-darkPrimaryColor'>Frontend</button>
        <button className='text-sm py-[5px] px-[8px] rounded font-semibold border-2 border-primaryColor dark:border-darkPrimaryColor'>Backend</button>
        <button className='text-sm py-[5px] px-[8px] rounded font-semibold border-2 border-primaryColor dark:border-darkPrimaryColor'>Fullstack</button>
    </div>
  )
}
