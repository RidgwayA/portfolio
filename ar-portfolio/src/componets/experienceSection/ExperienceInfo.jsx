import React from 'react'

function ExperienceInfo({number, text}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='font-bold text-6xl text-cyan p-3'>{number}</p>
        <p className='font-bold text-xl text-orange uppercase -mt-4'>{text}</p>
    </div>
  )
}

export default ExperienceInfo
