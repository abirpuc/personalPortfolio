import React from 'react'
import { SiMinutemailer } from 'react-icons/si'
export default function FormBtn() {
  return (
    <button type='submit' className='formbtn dark:hover:bg-gradient-to-r dark:hover:from-primaryColor dark:hover:vai-darkSecondaryColor dark:hover:to-darkPrimaryColor'>Send Message <span className='text-2xl'><SiMinutemailer /></span></button>
  )
}
