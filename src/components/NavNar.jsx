import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin , FaGithub, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo1 from '../img/logo1.png';
import { Link } from 'react-scroll';
const NavNar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1b2631] text-gray-300'>
    <div>
      <img src={Logo1} alt="/" className='w-[50px]'/>
    </div>  
    {/* Navabar */}
    <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
            <li >
            <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
            </li>
            <li>
            <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
            </li>
            <li>
            <Link  to="skill"  smooth={true}  duration={500} >
          Skill
        </Link>
            </li>
            <li>
            <Link  to="work"  smooth={true}  duration={500} >
          Work
        </Link>
            </li>
            <li>
            <Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
            </li>
        </ul>
    </div>
    {/* Menu Burger */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/> }
    </div>
    {/* Mobile menu */}
    
        <ul className={!nav ? 'hidden' : ' absolute top-0 bg-[#1b2631] left-0 h-screen w-full flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to="skill"  smooth={true}  duration={500} >
          Skill
        </Link></li>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
        </ul>
    {/* socail icons */}
    <div className='hidden lg:flex fixed top-[35%] left-0'>
      <ul >
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a href='/' className='flex justify-between items-center w-full text-gray-300'>
          Linkedin <FaLinkedin size={30}/>
        </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
          <a href='/' className='flex justify-between items-center w-full text-gray-300'>
          Linkedin <FaGithub size={30}/>
        </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
          <a href='/' className='flex justify-between items-center w-full text-gray-300'>
          Linkedin <HiOutlineMail size={30}/>
        </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-600'>
          <a href='/' className='flex justify-between items-center w-full text-gray-300'>
          Linkedin <BsFillPersonLinesFill size={30}/>
        </a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default NavNar;