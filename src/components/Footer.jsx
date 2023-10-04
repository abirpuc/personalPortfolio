import React from 'react'
import {MdCopyright} from 'react-icons/md'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-primaryColor text-white dark:bg-darkPrimaryColor mt-28 h-[150px] sm:h-[100px] px-4'>
      <section className='container mx-auto'>
       <div className='flex justify-start items-center flex-wrap py-2 sm:py-8 md:py-8'>
          <span className='flex justify-center items-center'>copyright <MdCopyright/></span> {currentYear} <span className='font-bold text-green-400 uppercase underline'> Mozzammel hossen </span> || all reserved
       </div>
      </section>
    </footer>
  )
}
