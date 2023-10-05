import React from 'react'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {FaLinkedinIn, FaGithub, FaYoutube, FaInstagram} from 'react-icons/fa'
export default function Socila() {
    return (
        <>
            <a href='https://www.facebook.com/profile.php?id=100008236265019' target='_blanck' className='socialIcon'><BiLogoFacebookCircle/></a>
            <a href='https://www.linkedin.com/in/mozzammel-hossen-031822177/' target='_blanck' className='socialIcon'><FaLinkedinIn/></a>
            <a href='https://github.com/' className='socialIcon' target='_blanck'><FaGithub/></a>
            {/* <a href='' className='socialIcon'><FaYoutube/></a> */}
            <a href='https://www.instagram.com/mh_khan_abir/' className='socialIcon' target='_blanck'><FaInstagram/></a>
        </>
    )
}
