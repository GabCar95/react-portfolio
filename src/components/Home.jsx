import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div name='home' className='w-screen min-w-[600px] h-full bg-[#283747] flex justify-center'>

        {/* container */}
        <div className='max-w-[2000px] flex flex-col h-full py-[150px] items-center'>
            <p className='text-2xl text-[#40E0D0]'>Welcome to my portfolio, my name is</p>
            <h1 className='text-5xl font-bold text-white'>Gabriel Caraballo,</h1>
            <div className='TypeWriter'>
              <Typewriter 
                options={{
                  strings: ['A fullstack developer.','An IT technician.','A proud veteran!'],
                  loop: true,
                  autoStart: true,
                }}
                  />    
            </div>
            
            <div>
                <Link to="projects" smooth={true} duration={500} className='text-[#B3B6B7] cursor-pointer group border-2 px-4 py-2 flex items-center hover:bg-[#40E0D0] hover:border-[#40E0D0] hover:text-gray-900 hover:font-bold rounded-full'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2' />
                </span>
                </Link>
            </div>


        </div>

    </div>
  )
}

export default Home