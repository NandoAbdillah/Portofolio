import { FaWhatsapp } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"; 
import React from 'react'
import Link from "next/link";

const socials = [
    {
        icon : <FaGithub />,
        path : ""
    },
    {
        icon : <FaLinkedin />,
        path : ""
    },
    {
        icon : <FaInstagram />,
        path : ""
    },
    {
        icon : <FaWhatsapp />,
        path : ""
    },
]
function Socials({containerStyle, iconStyles}) {
  return (
    <div className={containerStyle}>
        {
            socials.map((social, index) => (
                <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            ))
        }
    </div>
  )
}

export default Socials