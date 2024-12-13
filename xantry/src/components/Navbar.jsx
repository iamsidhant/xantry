import React from 'react'
import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

import Button from './Button';

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  }

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying])

  return (
    <div
      ref={navContainerRef}
      className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'
    >
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
          {/* Logo and Product Button */}
          <div className='flex items-center gap-7'>
            <img
              src='/images/logo.png'
              alt='logo'
              className='w-10' 
            />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation links and Audio Button */}
          <div className='flex h-full items-center'>
            <div className='hidden md:block'>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className='nav-hover-btn'
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className='ml-10 flex items-center space-x-0.5'
            >
              <audio 
                ref={audioElementRef}
                className='hidden'
                src='/audio/loop.mp3'
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div 
                  key={bar}
                  className={('indicator-line', {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar