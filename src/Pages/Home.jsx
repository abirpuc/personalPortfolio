import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { GoDownload } from 'react-icons/go'
import { BsFillChatSquareDotsFill } from 'react-icons/bs'
import Header from '../components/Header'
import img from '../assets/profile.jpg'
import SpanText from '../components/SpanText'
import { Link } from 'react-scroll'

export default function Home({ theme, setTheme }) {
    return (
        <section id="home" className='min-h-screen bg-pattern dark:bg-darkPattern'>
            <Header theme={theme} setTheme={setTheme} />
            <div className="container mx-auto pt-20">
                <div className='w-full mx-auto'>
                    <div className='dark:bg-slate-800 dark:bg-opacity-10 backdrop-blur- border-2 rounded-xl z-20'>
                        <div className='flex flex-col-reverse justify-center items-center md:flex-row md:justify-evenly p-8 md:p-12'>
                            <div className='py-8 flex flex-col justify-start'>
                                <div className='sm:w-full sm:mx-auto md:w-full'>
                                    <p className='text-primaryColor dark:text-darkPrimaryColor text-xl'>Hello, welcome to my page</p>
                                    <p className='text-textColor dark:text-darkTextColor text-xl'>my name is </p>
                                    {/* <span className='text-primaryColor'>Hossen</span> */}
                                    <h1 className='text-2xl sm:4xl text-secondaryColor dark:text-sky-700 md:text-6xl font-bold uppercase py-2 md:max-w-[400px]'>Mozzammel 
                                    <SpanText
                                    
                                    > Hossen</SpanText></h1>
                                    <p className='text-secondaryColor dark:text-darkSecondaryColor text-sm md:text-xl'>I am a</p>
                                    <TypeAnimation
                                        sequence={[
                                            'Mern Developer',
                                            2000,
                                            'Frontend Developer',
                                            2000,
                                            'backend Developer',
                                            2000
                                        ]}
                                        speed={50}
                                        className="text-xl md:text-3xl font-semibold uppercase text-primaryColor dark:text-darkPrimaryColor"
                                        wrapper="span"
                                        repeat={Infinity}
                                    />
                                    <div className='flex md:flex-row items-center gap-x-4 my-2'>
                                        <button className='btn my-4 sm:my-0 text-md'>Resume <span className="icon"><GoDownload/></span></button>
                                        <Link to="contact" smooth={true}><button className='btn text-md'>Contact <span className="icon"><BsFillChatSquareDotsFill/></span></button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className='img'>
                                <img src={img} alt="mozzammel hossen" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
