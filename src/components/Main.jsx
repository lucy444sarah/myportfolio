import React from 'react'
import bgportfolioclear from '../img/bgportfolioclear.png';
import { TypeAnimation } from 'react-type-animation';
import {FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const Main = () => {
  return (
    <div id='main'>
     <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={bgportfolioclear} alt="background" />
    
    <div className='w-full h-screen absolute top-0 left-0 bg-white/01'>

   <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Ich bin Sully Hagedorn-Alvarez</h1>
    <h2 className='flex sm:text-3xl text-2xl pt-4  text-gray-800'>Ich bin...

    <TypeAnimation
      sequence={[
        // Ich bin
        'FullStack Web-Entwickler ',
        2000, 
        'Kreativ',
        2000,
        'Empathisch',
        2000,
        'Verantwortungsbewusst',
        2000
        ,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em',paddingLeft: '5px' }}
      repeat={Infinity}
    />

    </h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full '>
    <FaLinkedinIn  className='cursor-pointer' size={20}/>
        <FaInstagram  className='cursor-pointer' size={20}/>
        <FaFacebookF  className='cursor-pointer' size={20}/>
        

    </div>
   </div>

    </div>
    </div>
  )
}

export default Main