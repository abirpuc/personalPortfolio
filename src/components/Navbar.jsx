import React from 'react'
import { Link } from 'react-scroll'
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import {FaHome, FaUserAlt, FaBriefcase} from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full h-[60px] sm:h-[96px] bg-black/20 backdrop-blur-2xl rounded-full max-w-[300px] sm:max-w-[420px] mx-auto px-5 flex justify-between items-center text-xl md:text-2xl text-darkPrimaryColor dark:text-primaryColor">
          <Link 
          to="home"
          activeClass="active dark:darkActive"
          smooth={true}
          spy={true} 
          className="navItem">
            <FaHome/>
          </Link>
          <Link 
          to="about"
          activeClass="active"
          smooth={true}
          spy={true} 
          className="navItem">
            <FaUserAlt/>
          </Link>
          {/* <Link 
          to=""
          activeClass="active"
          smooth={true}
          spy={true} 
          className="cursor-pointer w-[60px] h-[60px]flex items-center justify-center">
            <BsClipboard/>
          </Link> */}
          <Link 
          to="portfolio"
          activeClass="active"
          smooth={true}
          spy={true} 
          className="navItem">
            <FaBriefcase/>
          </Link>
          <Link 
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true} 
          className="navItem">
            <BsFillChatSquareDotsFill/>
          </Link>
        </div>
      </div>
    </nav>
  )
}
