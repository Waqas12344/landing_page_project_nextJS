import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white py-10 '>
            <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8  '>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* logo section  */}
                    <div>
                        <h1 className='text-xl md:text-3xl font-bold  '><span className='text-3xl md:text-4xl text-pink-700'>A</span>ppify</h1>
                        <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-500 '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit deserunt quaerat 
                        </p>
                    </div>

                    {/* about section  */}
                    <div>
                        <h3 className=' text-lg font-semibold text-gray-800'>About us</h3>
                        <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                            <li>Support Center</li>
                            <li>Customer Support</li>
                            <li>About us </li>
                            <li>Copyright</li>
                            <li>Popular campaign </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className=' text-lg font-semibold text-gray-800'>Our Information </h3>
                        <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                            <li>Support Center</li>
                            <li>Customer Support</li>
                            <li>About us </li>
                            <li>Copyright</li>
                            <li>Popular campaign </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className=' text-lg font-semibold text-gray-800'>Contact Info</h3>
                        <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                            <li>Support Center</li>
                            <li>Customer Support</li>
                            <li>About us </li>
                            <li>Copyright</li>
                            <li>Popular campaign </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
                    <p className=' text-center md:text-left'>Copyright @ 2021 Superprops, All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer