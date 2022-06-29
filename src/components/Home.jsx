import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-screen h-full bg-[#283747] flex justify-center'>

        {/* container */}
        <div className='max-w-[2000px] flex flex-col h-full pt-[250px] items-center'>
            <p className='text-2xl text-[#6C3483]'>Hi, my name is</p>
            <h1 className='text-5xl font-bold text-gray-300'>Gabriel Caraballo</h1>
            <h2 className='text-2xl sm:text-3xl font-bold text-[#B3B6B7]'>I'm a self taught developer.</h2>
            <p className='text-[#B3B6B7] py-3'>I'm a Marine Corps veteran who got into programming.</p>
            <div>
                <button className='text-[#B3B6B7] group border-2 px-4 py-2 flex items-center hover:bg-[#6C3483] hover:border-[#6C3483] hover:text-gray-900 hover:font-bold rounded-full'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2' />
                </span>
                </button>
            </div>


        </div>

    </div>
  )
}

export default Home