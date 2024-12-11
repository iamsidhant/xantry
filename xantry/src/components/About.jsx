import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  return (
    <div id='about' className='min-h-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <p className='font-general text-sm uppercase md:text-[10px]'>
          Welcome to Xantry
        </p>

        <div className='about-subtext'>
          <p>The Game of Games begins - your life now an epic MMORPG</p>
          <p className='text-gray-500'>
            Xantry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div id='clip' className='h-dvh w-screen'>
        <div className='mask-clip-path about-image'>
          <img
            src='images\about.webp'
            alt='Background'
            className='absolute left-0 top-0 size-full object-cover'
          />
        </div>
      </div>

    </div>
  )
}

export default About