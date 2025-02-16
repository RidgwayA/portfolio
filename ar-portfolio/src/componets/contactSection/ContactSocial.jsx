import React from 'react'
import SocialInfo from './SocialInfo'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function ContactSocial() {
  return (
    <div className='flex gap-4'>
      <SocialInfo link='#' Icon={FaLinkedin}/>
      <SocialInfo link='#' Icon={FaGithub}/>
    </div>
  )
}

export default ContactSocial
