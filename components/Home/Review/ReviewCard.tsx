import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

type Props={
    name:string,
    image:string
}
const ReviewCard = ({image,name}:Props) => {
  return (
    <div className=' w-full lg:w-[90%] p-5 mx-auto bg-white shadow-lg rounded-lg  relative '>
        <div>
            <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8 ' />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-center ">
            <div className="col-span-3 order-2 lg:order-1">
                <p className='mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae numquam dolorem amet quibusdam. </p>
                <div className='flex items-center mt-6 text-yellow-400'>
                    <FaStar className='w-6 h-6 ' />
                    <FaStar className='w-6 h-6 ' />
                    <FaStar className='w-6 h-6 ' />
                    <FaStar className='w-6 h-6 ' />
                    <FaStar className='w-6 h-6 ' />
                    
                </div>
                <h1 className='text-xl font-semibold mt-8 md:font-medium mb-6'>{name} </h1>
                <p className='text-lg
                '>Fullstack Web Developer </p>

              
            </div>
            <div className='col-span-2 mx-auto order-1 lg:order-2'>
<Image alt={name} className="rounded-full" src={image} width={250} height={120} />
                </div>
        </div>
    </div>
  )
}

export default ReviewCard