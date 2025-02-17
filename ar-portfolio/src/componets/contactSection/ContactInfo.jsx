import React from 'react'
import { MdOutlineEmail } from "react-icons/md"; //<MdOutlineEmail />
import { FiPhone } from "react-icons/fi"; //<FiPhone />
import { FaMapLocationDot } from "react-icons/fa6"; //<FaMapLocationDot />
import MyInfo from './MyInfo';

function ContactInfo() {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <MyInfo text="ridgway.austink@gmail.com" Image={MdOutlineEmail}/>
      <MyInfo text="660-351-2xxx" Image={FiPhone}/>
      <MyInfo text="Kansas City Missouri" Image={FaMapLocationDot}/>
    </div>
  )
}

export default ContactInfo
