import React, { useRef, useState } from 'react'
import SpanText from '../components/SpanText'
import Socila from '../components/Socila'
import emailjs from '@emailjs/browser';
import { Validation } from '../functions/validation'
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from '../components/ContactForm'
import Address from '../components/Address'
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
        <Address/>
        <div className='w-[80%] mx-auto border-2 border-primaryColor dark:border-darkPrimaryColor my-8 rounded-xl dark:bg-slate-800 dark:bg-opacity-10 backdrop-blur-'>
          <h1 className='text-md text-center my-2 uppercase font-bold tracking-widest bg-gradient-to-l from-primaryColor to-darkSecondaryColor bg-clip-text text-transparent'>Get in Touch</h1>
          <div className='flex flex-col sm:flex-row justify-between items-center my-4 gap-x-2 z-80'>
            <ContactForm 
              ref = {formRef}
              handleSubmit= {handleSubmit}
              handleOnchange = {handleOnchange}
              error = {error}
            />
            <div className='px-4 md:w-[30%] flex justify-between items-center flex-wrap gap-2'>
              <Socila />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
