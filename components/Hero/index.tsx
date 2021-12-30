import NewsLetter from '@components/Newsletter'
import Image from 'next/image'
import React from 'react'
import DotsPattern from 'svg-assets/DotsPattern'

const Hero = () => {


    return (
        <div className='relative'>
            <DotsPattern className='w-full -mt-8 absolute top-0 left-0'/>
            <div className="m-auto text-center space-y-5 pt-28">
                <h1 className='text-6xl font-bold w-1/2 m-auto'>Build Backend Systems in Minutes</h1>
                <p className='font-semibold text-xl w-2/5 m-auto'>Get ridiculously creative with your products and let us do the hard work for you!</p>
                <NewsLetter className='m-auto max-w-xs'/>
            </div>
        </div>
    )
}

export default Hero
