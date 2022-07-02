import React, {useState} from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-screen min-w-[600px] h-[80px] flex justify-between items-center px-4 bg-[#283747] text-gray-300 font-semibold'>

        {/* menu */}
        <div>
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                {/* <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li> */}
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
        {/* menu burger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#283747] flex flex-col justify-center items-center'}>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
               
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div> 

        {/* socials */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/gabriel-caraballo-96906b239/' target="_blank">
                    Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/GabCar95' target="_blank">
                    GitHub <FaGithub size={30} />
                    </a>
                </li>
                {/* <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                    Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li> */}
            </ul>
        </div>

    </div>
  )
}

export default Navbar
