import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-[#1b2631] text-gray-300'>
    <div className='flex flex-col justify-center items-center h-full w-full '>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold border-b-4 border-pink-600 inline'>About</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid  sm:grid-cols-2
            gap-8'>
                <div className='text-4xl font-bold sm:text-right px-4'>
                    <p>Hi I'm kakvey, Nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, 
                    animi odio. Dicta blanditiis autem quidem cupiditate, dolorum 
                    at, dolorem quisquam delectus laboriosam libero, porro sequi!
                    Corrupti vitae laboriosam molestias quas iure accusamus neque
                    veritatis aperiam!</p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default About