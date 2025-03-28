import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import { imagePrefix } from "@/app/global-variables"

const Clients = () => {
  return (
    <div id='testimonials' className='py-20'>
        <h1 className='heading'>
            Kind words from
            <span className='text-purple'> satisfied clients</span>
        </h1>
        <div className='flex flex-col items-center mt-[72px] max-lg:mt-10'>
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-[72px] max-lg:mt-10'>
                {companies.map(({ id, img, name, mainImg }) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        {img && <img src={imagePrefix+img} alt={name} className='md:w-10 w-5' />}
                        <img src={imagePrefix+mainImg} alt={name} className='md:w-24 w-20' />
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Clients