import React from 'react'
import WhyChooseCart from './WhyChooseCart'

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-16 '>
        <h1 className='mt-6 tex2xl text-center font-bold capitalize md:text-3xl'>
            Why you choose this application
        </h1>
        <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
           <div>
           <WhyChooseCart image='/images/i1.png' title="Create freee Account" linkText="Start Earning" />
           </div>
           <div>
           <WhyChooseCart image='/images/i2.png' title="Create freee Account" linkText="Start Earning" />
           </div>
           <div>
           <WhyChooseCart image='/images/i3.png' title="Create freee Account" linkText="Start Earning" />
           </div>
           <div>
           <WhyChooseCart image='/images/i4.png' title="Create freee Account" linkText="Start Earning" />
           </div>
        </div>
    </div>
  )
}

export default WhyChoose