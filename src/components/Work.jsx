import React from 'react'
import Working from '../projects/workImg.jpeg'
import Realestae from '../projects/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='bg-[#1b2631] w-full  md:h-screen text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
            <p className='py-6'>// Check out some of my recent work</p>
            </div>
         {/* Container */}
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
           {/* grid */}
           <div style={{backgroundImage: `url(${Working})`}} className='shadow-lg shadow-[#1B1212] group container rounded-md flex justify-center items-center mx-auto contents-div'>
            <div>
                {/* Navbar Effect*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl ml-2'>Code</button>
                    </a>
                </div>
              </div>
           </div>
           </div> 
           <div style={{backgroundImage: `url(${Realestae})`}} className='shadow-lg shadow-[#1B1212] group container rounded-md flex justify-center items-center mx-auto contents-div'>
            <div>
                {/* Navbar Effect*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl ml-2'>Code</button>
                    </a>
                </div>
              </div>
           </div>
           </div>
           <div style={{backgroundImage: `url(${Working})`}} className='shadow-lg shadow-[#1B1212] group container rounded-md flex justify-center items-center mx-auto contents-div'>
            <div>
                {/* Navbar Effect*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl ml-2'>Code</button>
                    </a>
                </div>
              </div>
           </div>
           </div>
           <div style={{backgroundImage: `url(${Realestae})`}} className='shadow-lg shadow-[#1B1212] group container rounded-md flex justify-center items-center mx-auto contents-div'>
            <div>
                {/* Navbar Effect*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl ml-2'>Code</button>
                    </a>
                </div>
              </div>
           </div>
           </div>
           <div style={{backgroundImage: `url(${Working})`}} className='shadow-lg shadow-[#1B1212] group container rounded-md flex justify-center items-center mx-auto contents-div'>
            <div>
                {/* Navbar Effect*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl ml-2'>Code</button>
                    </a>
                </div>
              </div>
           </div>
           </div>
           <div style={{backgroundImage: `url(${Realestae})`}} className='shadow-lg shadow-[#1B1212] group container rounded-md flex justify-center items-center mx-auto contents-div'>
            <div>
                {/* Navbar Effect*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl'>Demo</button>
                    </a>
                    <a href='/'>
                        <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 text-xl ml-2'>Code</button>
                    </a>
                </div>
              </div>
           </div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Work