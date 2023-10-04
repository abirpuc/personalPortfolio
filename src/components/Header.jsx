import React, { useState } from 'react'
import {FaMoon, FaSun} from 'react-icons/fa';


export default function Header({theme, setTheme}) {
    const [toggle, setToggle] = useState(true)

    const handleTheme = (e, theme) => {
        setToggle(e)
        setTheme(theme)
    }
    return (
        <div className='fixed w-full bg-black/20 backdrop-blur-2xl z-50'>
            <div className='container mx-auto flex justify-between items-center flex-wrap h-[60px]'>
                <div className='flex items-center gap-x-2 text-xl text-white'>
                    <div className='flex justify-center items-center bg-primaryColor dark:bg-darkPrimaryColor text-white h-5/6 rounded-full p-2'>
                        MH
                    </div>
                    <h2 className='text-primaryColor dark:text-darkPrimaryColor'>ABIR</h2>
                </div>
                <div className='flex justify-center items-center bg-slate-700 rounded-full p-4 h-3/4 text-sky-700 hover:bg-slate-500 transition all duration-200 shadow-md'>
                    {
                        toggle === true ?
                            <button onClick={() => handleTheme(!toggle, 'light')}><FaSun/></button>
                            :
                            <button onClick={() => handleTheme(!toggle, 'dark')}><FaMoon/></button>
                    }
                </div>
            </div>
        </div>
    )
}
