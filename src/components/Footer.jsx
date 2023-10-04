import React from 'react'
import {MdCopyright} from 'react-icons/md'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-primaryColor dark:bg-darkPrimaryColor mt-28'>
      <section className='container mx-auto'>
       <div className='flex justify-start items-center py-8'>
          <span><MdCopyright/></span> {currentYear}, <span className='font-bold text-green-400 uppercas'> Mozzammel hossen </span> || all reserved
       </div>
      </section>
    </footer>
  )
}
