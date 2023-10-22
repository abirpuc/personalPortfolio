import React from 'react'
import FormBtn from './FormBtn'

export default function ContactForm({ref, handleSubmit,handleOnchange, btnIcon, error}) {
  return (
    <form ref={ref} onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mx-4 my-4 w-full'>
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
    <FormBtn/>
  </form>
  )
}
