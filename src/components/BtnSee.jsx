import React from 'react'

export default function BtnSee({ lengthFun,title }) {
    return (
        <div className='flex justify-center items-center' data-aos="fade-in" data-aos->
            <button onClick={lengthFun} className='group seemore my-12'>
            <span className='absolute flex justify-center items-center w-full h-full text-white duration-300 -translate-x-full bg-primaryColor dark:bg-darkPrimaryColor group-hover:translate-x-0'>{title}</span>
                {title}
            </button>

        </div>
    )
}
