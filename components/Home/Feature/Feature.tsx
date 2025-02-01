 
import { FaCog, FaDesktop, FaLaptop, FaLayerGroup, FaMobileAlt } from 'react-icons/fa'

const Feature = () => {
    const features =[
        {
            icons:<FaLayerGroup className='text-red-500'/>,
            text:'50+ uique design Block',
        },
        {
            icons:<FaLaptop className='text-blue-500'/>,
            text:'Multiple Layouts',
        },
        {
            icons:<FaMobileAlt className='text-yellow-500'/>,
            text:'Mobile First Design',
        },
        {
            icons:<FaDesktop className='text-red-500'/>,
            text:'50+ uique design Block',
        },
        {
            icons:<FaCog className='text-red-500'/>,
            text:'Fully responsive design ',
        },
        {
            icons:<FaDesktop className='text-red-500'/>,
            text:'50+ uique design Block',
        },
        {
            icons:<FaCog className='text-red-500'/>,
            text:'Fully responsive design ',
        },
    ]
  return (
    <div className='bg-pink-50 pt-20 pb-20'>
        <div className=" w-[80%] text-center mx-auto">
            <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center  ">
                Its Everything you will ever need
            </h1>
            <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {features.map((feature,index)=>(
                        <div key={index} className='flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3   '>
                            <div className="text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center flex-col rounded-full  ">
                                <span className='text-3xl '>{ feature.icons}</span>
                            </div>
                                <span className='text-base font-semibold'>{feature.text}</span>
                        </div>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Feature