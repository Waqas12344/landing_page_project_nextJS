import React from 'react'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
        <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* text content  */}
                <div>
                <div className='bg-white w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3'>
                    <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                        News
                    </div>
                    <p className='text-base sm:text-sm'> we have updated our team & condition policy</p>
                </div>
                {/* heading  */}
                <h1 className='text-2xl sm:text-4xl md:text-5xl mt-5 font-bold mb-6 md:leading-[3rem] lg:leading-[3.5rem]'>The premier workspace compainion for you daily needs</h1>
                <p className='text-base text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, at! Eveniet officia commodi aliquam est corporis quos atque molestiae ducimus?
                </p>

                <div className='flex mt-8 mb-8 items-center space-x-4'>
                    <img src="/images/gp.png" alt="" width={150} height={150} className='object-contain'/>
                    <img src="/images/as.png" alt="" width={150} height={150} className='object-contain'/>
                </div>
                </div>
                
                {/* image content  */}
                <div className="hidden lg:block">
                    <img src="/images/hero.png" alt="hero" width={700} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero