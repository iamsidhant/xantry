import React from 'react'
import Button from './Button'
import AnimatedTitle from './AnimatedTitle'

const Story = () => {
  return (
    <div id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>
                the multiversal ip world
            </p>

            <div className='relative size-full'>
                {/* <AnimatedTitle /> */}

                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img
                                src='/images/entrance.webp'
                                alt='entrance.webp'
                                className='object-contain' 
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='-mt-80 flex w-full justify-center md:me-44 md:justify-end'>
                <div className='flex h-full w-fit flex-col items-center md:items-start'>
                    <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
                        Where realms converge, lies Xantry and the boundless pillar.
                        Discover its secrets and shape your fate amidst infinite
                        opportunities.
                    </p>

                    {/* <Button /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story