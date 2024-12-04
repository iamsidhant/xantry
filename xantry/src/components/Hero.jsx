import React from 'react'
import { useRef, useState } from 'react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);

    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVdRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    };

    const getVideoSrc = (index) => `videos/heroes-${index}.mp4`;

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div
         id='video-frame'
          className='relative z-10 h-dvh overflow-hidden rounded-lg bg-blue-75'
        >
            <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                <div
                    onClick={handleMiniVdClick}
                    className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'
                >
                    <video
                        ref={nextVdRef}
                        src={getVideoSrc((currentIndex % totalVideos) + 1)}
                        loop
                        muted
                        id="current-video"
                        className='size-64 origin-center scale-150 object-cover object-center'
                        onLoad={handleVideoLoad}
                    />
                </div>
            </div>

            <video
                ref={nextVdRef}
                src={getVideoSrc(currentIndex)}
                loop
                muted
                id="next-video"
                className='absolute-center absolute size-64 object-cover object-center'
                onLoad={handleVideoLoad}
            />
        </div>
    </div>
  )
}

export default Hero