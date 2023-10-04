import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function PortfolioModal({ isOpen, onClose, children,git, live }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
            <div className="modal-container bg-white w-[80%] md:w-[60%] mx-auto rounded shadow-lg z-50 overflow-x-auto overflow-y-auto">
                <div className="modal-content py-4 text-left w-full px-6 relative">
                    {children}
                    <button
                        className="modal-close absolute top-2 right-2 px-4 py-2 text-4xl text-red-200 rounded-lg"
                        onClick={onClose}
                    >
                        <AiFillCloseCircle/>
                    </button>
                </div>
                <div className="modal-footer py-4 px-6 flex justify-between relative">
                    <div className='flex gap-x-4'>
                        <a href={git} className='bg-primaryColor dark:bg-darkPrimaryColor rounded-3xl py-2 px-4 flex justify-between items-center cursor-pointer gap-2 hover:gap-6 text-white transition-all duration-300'>Github<span><BsGithub /></span></a>
                        <a href={live} className='bg-primaryColor dark:bg-darkPrimaryColor rounded-3xl py-2 px-4 flex justify-between items-center cursor-pointer gap-2 hover:gap-6 text-white transition-all duration-300'>Live<span><FaLink /></span></a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
