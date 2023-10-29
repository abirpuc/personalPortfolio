import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAddCall, MdEmail } from 'react-icons/md'
import { TbWorldCode } from 'react-icons/tb'

export default function Address() {
    return (
        <div className='my-4 md:w-[90%] mx-auto grid gri-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center'>
            <div className='singleAddress' data-aos="zoom-im" data-aos-duration="10000">
                <div className='addressContent'>
                    <FaLocationDot />
                </div>
                <p><span className='text-lg text-semibold'>Address:</span> Devipure, Noakhali Sadar, Noakhali, Bangladesh</p>
            </div>
            <div className='singleAddress' data-aos="zoom-im" data-aos-duration="10000">
                <div className='addressContent'><MdAddCall /></div>
                <p className='pt-2 text-primaryColor dark:text-darkPrimaryColor'>+880 186****437</p>
            </div>
            <div className='singleAddress' data-aos="zoom-im" data-aos-duration="10000">
                <div className='addressContent'><MdEmail /></div>
                <a href='' className='pt-2 cursor-pointer text-primaryColor dark:text-darkPrimaryColor'>mozzammel.hossen97@gamil.com</a>
            </div>
            <div className='singleAddress' data-aos="zoom-im" data-aos-duration="10000">
                <div className='addressContent'><TbWorldCode /></div>
                <a href='https://mozzammel-hossen.netlify.app' target='_black' className='pt-2 text-primaryColor dark:text-darkPrimaryColor underline'>www.mozzammel.com</a>
            </div>
        </div>
    )
}
