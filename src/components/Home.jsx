import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1b2631]'>
      {/* Container */}
      <div className='mx-auto px-8 max-w-[1000px] flex flex-col justify-center h-full '>
            <p className='text-pink-600'>Hi My Name is </p>
            <h1 className='text-xl sm:text-7xl font-bold text-white'>Kakvey</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm a full stack developer</h2>
            <p className='text-gray-500 py-4 max-w[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Rem vel nisi accusamus voluptatibus quibusdam quia eligendi 
                 modi asperiores tenetur labore? Lorem ipsum dolor sit </p>
                <div><button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <FaArrowRight className='ml-3'/>
                </span>
                </button></div>
      </div>
    </div>
  )
}

export default Home