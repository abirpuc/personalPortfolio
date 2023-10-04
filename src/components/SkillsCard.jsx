import React from 'react'

export default function SkillsCard({item}) {
    const {title, img} = item
  return (
    <div className='group rounded-md text-center relative bg-[#dae8e7] hover:bg-zinc-200 dark:bg-gray-700/80 dark:hover:bg-[#172131] ease-in-out duration-200'>
       <img className='w-[150px] h-[150px] my-8 mx-auto group-hover:scale-110 ease-in-out duration-200' src={img} alt="" />
       <h1 className='text-lg md:text-xl absolute bottom-[10px] w-[80%] left-[10%] text-black group-hover:text-primaryColor dark:text-white dark:group-hover:text-darkPrimaryColor'>{title}</h1>
    </div>
  )
}
