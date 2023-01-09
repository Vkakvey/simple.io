import React from 'react'
import Html from '../img/html.png';
import Asw from '../img/aws.png';
import Css from '../img/css.png';
import Firsebase from '../img/firebase.png';
import JavaScript from '../img/javascript.png';
import Node from '../img/node.png';
import Mongo from '../img/mongo.png';
import Reactjs from '../img/react.png';
import Tailwind from '../img/tailwind.png';
import Github from '../img/github.png';
const Skill = () => {
  return (
    <div name='skill' className='bg-[#1b2631] text-gray-300 w-full h-screen '>
    {/* Container */}
        <div className='max-w-[1000px] p-4 flex flex-col justify-center w-full h-full mx-auto'>
            <div>
                <p className='text-4xl   border-b-4 inline border-pink-600'>Skill</p>
                <p className='py-6'>// These are technologise I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center px-6 py-8'>
                <div className='shadow-md shadow-[#1B1212] hover:scale-110 duration-500 rounded-xl'>
                    <img src={Html} alt='HTML icon' className='w-20 mx-auto'/>
                    <p className='py-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#1B1212] hover:scale-110 duration-500 rounded-xl'>
                    <img src={Tailwind} alt='HTML icon' className='w-20 mx-auto'/>
                    <p className='py-4 uppercase'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#1B1212] hover:scale-110 duration-500 rounded-xl'>
                    <img src={Css} alt='HTML icon' className='w-20 mx-auto'/>
                    <p className='py-4 uppercase'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#1B1212] hover:scale-110 duration-500 rounded-xl'>
                    <img src={Github} alt='HTML icon' className='w-20 mx-auto'/>
                    <p className='py-4 uppercase'>Github</p>
                </div>
                <div className='shadow-md shadow-[#1B1212] hover:scale-110 duration-500 rounded-xl'>
                    <img src={JavaScript} alt='HTML icon' className='w-20 mx-auto'/>
                    <p className='py-4 uppercase'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#1B1212] hover:scale-110 duration-500 rounded-xl'>
                    <img src={Node} alt='HTML icon' className='w-20 mx-auto'/>
                    <p className='py-4 uppercase'>NodeJs</p>
                </div>
                <div className='shadow-md shadow-[#1B1212] hover:scale-110 duration-500 rounded-xl'>
                    <img src={Mongo} alt='HTML icon' className='w-20 mx-auto'/>
                    <p className='py-4 uppercase'>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#1B1212] hover:scale-110 duration-500 rounded-xl'>
                    <img src={Reactjs} alt='HTML icon' className='w-20 mx-auto'/>
                    <p className='py-4 uppercase'>React</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skill