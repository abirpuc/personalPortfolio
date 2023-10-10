import React, { useRef, useState } from 'react'
import SpanText from '../components/SpanText'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAddCall, MdEmail } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import { TbWorldCode } from 'react-icons/tb'
import Socila from '../components/Socila'
import emailjs from '@emailjs/browser';
import { Validation } from '../functions/validation'
import toast, { Toaster } from 'react-hot-toast';
export default function Contact() {
  const formRef = useRef()
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [error, setError] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(Validation(values))
    const form = event.target;
    var name = form.name.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var subject = form.subject.value;
    var message = form.message.value;

    if (error.name || error.email || error.phone || error.subject || error.message) {
      console.log('value: ', name, email, phone, subject, message)
      emailjs.sendForm('service_866l8c6', 'template_hwx1inv', formRef.current, '0NxN4yzFKzag-y0C3')
      values.name = ""
      values.email = ""
      values.phone = ""
      values.subject = ""
      values.message = ""
      event.target.reset()
      toast.success('Your email send Successfully')
    } else {
      toast.error('Fill the full form!')
    }

  }

  const handleOnchange = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value }
    setValues(newObj)
  }


  return (
    <section id='contact' className='mt-12'>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <div className='container mx-auto relative'>
        <div>
          <h1 className="flex justify-center items-center md:gap-x-2 text-2xl sm:text-4xl font-semibold md:text-8xl md:font-bold uppercase tracking-widest"><SpanText className="">Contact</SpanText> Me</h1>
        </div>
        <div className='my-4 md:w-[90%] mx-auto grid gri-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center'>
          <div className='flex flex-col items-center justify-center flex-wrap'>
            <div className='bg-primaryColor text-white dark:bg-darkPrimaryColor dark:text-darkTextColor w-[50px] h-[50px] rounded-full flex items-center justify-center p-2 text-2xl'>
              <FaLocationDot />
            </div>
            <p><span className='text-lg text-semibold'>Address:</span> Devipure, Noakhali Sadar, Noakhali, Bangladesh</p>
          </div>
          <div className='flex flex-col items-center justify-center flex-wrap'>
            <div className='bg-primaryColor text-white dark:bg-darkPrimaryColor dark:text-darkTextColor w-[50px] h-[50px] rounded-full flex items-center justify-center p-2 text-2xl'><MdAddCall /></div>
            <p className='pt-2 text-primaryColor dark:text-darkPrimaryColor'>+880 186****437</p>
          </div>
          <div className='flex flex-col items-center justify-center flex-wrap'>
            <div className='bg-primaryColor text-white dark:bg-darkPrimaryColor dark:text-darkTextColor w-[50px] h-[50px] rounded-full flex items-center justify-center p-2 text-2xl'><MdEmail /></div>
            <a href='' className='pt-2 cursor-pointer text-primaryColor dark:text-darkPrimaryColor'>mozzammel.hossen97@gamil.com</a>
          </div>
          <div className='flex flex-col items-center justify-center flex-wrap'>
            <div className='bg-primaryColor text-white dark:bg-darkPrimaryColor dark:text-darkTextColor w-[50px] h-[50px] rounded-full flex items-center justify-center p-2 text-2xl'><TbWorldCode /></div>
            <a href='https://mozzammel-hossen.netlify.app' target='_blanck' className='pt-2 text-primaryColor dark:text-darkPrimaryColor underline'>www.mozzammel.com</a>
          </div>
        </div>
        <div className='w-[80%] mx-auto border-2 border-primaryColor dark:border-darkPrimaryColor my-8 rounded-xl dark:bg-slate-800 dark:bg-opacity-10 backdrop-blur-'>
          <h1 className='text-md text-center my-2 uppercase font-bold tracking-widest bg-gradient-to-l from-primaryColor to-darkSecondaryColor bg-clip-text text-transparent'>Get in Touch</h1>
          <div className='flex flex-col sm:flex-row justify-between items-center my-4 gap-x-2 z-80'>
            <form ref={formRef} onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mx-4 my-4 w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-[96%] mx-auto sm:w-full'>
                <div className='w-full'>
                  <input className='inputField  p-2 w-full text-md' type="text" name="name" placeholder='Enter your Name' onChange={handleOnchange} />
                  {
                    error.name && <p className='text-red-700'>{error.name}</p>
                  }
                </div>
                <div>
                  <input className='inputField  p-2 w-full text-md' type="email" name="email" placeholder='youremail@gmail.com' onChange={handleOnchange} />
                  {
                    error.email && <p className='text-red-700'>{error.email}</p>
                  }
                </div>
                <div>
                  <input className='inputField  p-2 w-full text-md' type="number" name="phone" placeholder='017****6553' onChange={handleOnchange} />
                  {
                    error.phone && <p className='text-red-700'>{error.phone}</p>
                  }
                </div>
                <div>
                  <input className='inputField  p-2 w-full text-md' type="text" name="subject" placeholder='Enter your Subject' onChange={handleOnchange} />
                  {
                    error.subject && <p className='text-red-700'>{error.subject}</p>
                  }
                </div>
              </div>
              <div className='w-[96%] mx-auto sm:w-full'>
                <textarea placeholder='Write your message' className='inputField h-[100px] p-2 w-full text-md' name="message" id="" onChange={handleOnchange}></textarea>
                {
                  error.message && <p className='text-red-700'>{error.message}</p>
                }
              </div>
              <button type='submit' className='formbtn dark:hover:bg-gradient-to-r dark:hover:from-primaryColor dark:hover:vai-darkSecondaryColor dark:hover:to-darkPrimaryColor'>Send Message <span className='text-2xl'><SiMinutemailer /></span></button>
            </form>
            <div className='px-4 md:w-[30%] flex justify-between items-center flex-wrap gap-2'>
              <Socila />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
