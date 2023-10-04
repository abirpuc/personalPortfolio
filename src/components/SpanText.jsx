import React from 'react'

export default function SpanText({children}) {
  return (
    <div className='text-primaryColor dark:text-darkPrimaryColor'>
        {children}
    </div>
  )
}
