import React, { useState } from 'react'
import SpanText from '../components/SpanText'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAddCall, MdEmail } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import { TbWorldCode } from 'react-icons/tb'
import Socila from '../components/Socila'
export default function Contact() {

  const [Name, setName] = useState(false)
  const [nameError, setnError] = useState('')
  const [Email, setEmail] = useState(false)
  const [emailError, seteError] = useState('')
  const [Phone, setPhone] = useState(false)
  const [phoneError, setpError] = useState('')
  const [Subject, setSubject] = useState(false)
  const [subjectError, setsError] = useState('')
  const [Message, setMessage] = useState(false)
  const [messageError, setmError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // var mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';

    if (name === '') {
      setName(true)
      setnError('Please enter name')
    } else if (name != '') {
      setName(false)
    }

    if (email === '') {
      setEmail(true)
      seteError('Please enter email!')
    }
    // else if(mailformat.test(email)){
    //   setEmail(true)
    //   seteError('email is not valid')
    // }
    else {
      setEmail(false)
    }

    if (phone === '') {
      setPhone(true)
      setpError('Please give a phone number!')
    } else if (phone.length < 11 && phone.length > 11) {
      setPhone(true)
      setpError('Give a valid Phone number!')
    } else {
      setPhone(false)
    }

    console.log(phone.length)

    if (subject === '') {
      setSubject(true)
      setsError('Enter your subject')
    } else {
      setSubject(false)
    }

    if (message === '') {
      setMessage(true)
      setmError('Write your message!')
    } else {
      setMessage(false)
    }
    form.name.value = ''
    form.email.value = ''
    form.phone.value = ''
    form.subject.value = ''
    form.message.value = ''
    console.log('click send message button!')
  }



  return (
    <section id='contact' className='mt-12'>
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
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mx-4 my-4 w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-[96%] mx-auto sm:w-full'>
                <div className='w-full'>
                  <input className='inputField  p-2 w-full text-md' type="text" name="name" placeholder='Enter your Name' />
                  {
                    Name && <p className='text-red-700'>{nameError}</p>
                  }
                </div>
                <div>
                  <input className='inputField  p-2 w-full text-md' type="email" name="email" placeholder='youremail@gmail.com' />
                  {
                    Email && <p className='text-red-700'>{emailError}</p>
                  }
                </div>
                <div>
                  <input className='inputField  p-2 w-full text-md' type="number" name="phone" placeholder='017****6553' />
                  {
                    Phone && <p className='text-red-700'>{phoneError}</p>
                  }
                </div>
                <div>
                  <input className='inputField  p-2 w-full text-md' type="text" name="subject" placeholder='Enter your Subject' />
                  {
                    Subject && <p className='text-red-700'>{subjectError}</p>
                  }
                </div>
              </div>
              <div className='w-[96%] mx-auto sm:w-full'>
                <textarea placeholder='Write your message' className='inputField h-[100px] p-2 w-full text-md' name="message" id=""></textarea>
                {
                  Message && <p className='text-red-700'>{messageError}</p>
                }
              </div>
              <button type='submit' className='formbtn dark:hover:bg-gradient-to-r dark:hover:from-primaryColor dark:hover:vai-darkSecondaryColor dark:hover:to-darkPrimaryColor'>Send Message <span className='text-2xl'><SiMinutemailer /></span></button>
            </form>
            <div className=' md:w-[30%] flex justify-between items-center flex-wrap gap-2'>
              <Socila/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
