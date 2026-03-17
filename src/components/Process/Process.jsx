import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, } from 'react-icons/tb'
import { PiPlant, PiFactory } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'


const Process = () => {

    const renderSteps = steps.map(item => {
        return (
            <div  className ={`flex-1 basis-full sm:basis-[48%] lg:basis-[22%] ${item.id %2 === 0 ?'lg:-mt-60':''}`} >
                <div className="flex justify-center lg:justify-start">
                <span className='flex justify-center items-center 
                w-16 h-16 md:w-20 md:h-20
                rounded-full text-4xl md:text-6xl
                bg-zinc-800 text-white 
                outline outline-4 outline-offset-4 outline-zinc-800 outline-dotted'>
                    {item.number}
                </span>
                </div>

                <div className='flex items-center mt-5 gap-x-5'>

                    <span className='flex justify-center items-center 
                    text-xl md:text-2xl
                    bg-gradient-to-b from-orange-400 to-orange-500 
                    text-white w-12 h-12 md:w-14 md:h-14 
                    rounded-full'>
                        {item.icon}
                    </span>
                    <div className='flex-1'>
                        <h4 className='text-zinc-800 text-lg md:text-xl font-bold'>{item.title}</h4>
                        <p className=' text-zinc-600 mt-2'>{item.para}</p>
                    </div>
                </div>

            </div>

        )
    })




    return (
        <section>
            <div className='max-w-[1250px] mx-auto px-10 py-20'>
                <Heading highlight='Our' heading='Process' />
                <div className='flex flex-wrap  items-center justify-center md:mt-20 pt-20 gap-10'>
                    {renderSteps}
                </div>
            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon: <PiPlant />
    },

    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />
    },

    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <BsTruck />
    },
]
