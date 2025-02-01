import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AnalyticsFeature = () => {
  return (
    <div className='pt-24 pb-16 '>
        <div className=" w-[95%] sm:w-[80%] items-center  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ">
            {/* image content  */}
            <div>
                <Image src={"/images/a.jpg"} alt='image' width={500} height={500} className='object-contain' />
            </div>

            {/* text content  */}
            <div className="p-6 ">
                <h1 className='text-base font-semibold text-orange-500  '>Audience tracking and insights</h1>
                <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita porro optio odio asperiores, earum obcaecati.
                </h1>
                <p  className='mt-5 text-sm font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi laborum voluptate. Optio dolorum a, veniam velit quibusdam consequuntur maxime commodi, modi, animi quas quos.</p>
                <ul className='mt-7 space-y-2 text-gray-800'>
                    <li className="flex items-center font-semibold text-base">
                        <FaCheckCircle className='text-green-500 mr-2'/>
                        Chat Prompt module supported
                    </li>
                    <li className="flex items-center font-semibold text-base">
                        <FaCheckCircle className='text-green-500 mr-2'/>
                        Chat Prompt module supported
                    </li>
                    <li className="flex items-center font-semibold text-base">
                        <FaCheckCircle className='text-green-500 mr-2'/>
                        Chat Prompt module supported
                    </li>
                    
                </ul>
                <button className='mt-5 text-base bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white px-8 py-3  '>Explore More &rarr;</button>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsFeature