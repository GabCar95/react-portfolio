import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#283747] text-gray-300  pt-[100px]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[600px] mx-auto flex flex-col justify-center w-full p-6 items-center'>
                <p className='text-3xl font-bold inline border-b-4 border-[#6C3483] text-gray-300'>About</p>
            </div>
            <div className='max-w-[1000px] w-full sm:grid grid-cols-2 px-3 mx-auto'>
                <div className='px-3 sm:text-right text-2xl font-bold pb-5'>
                    <p>Hello, I'm Gabriel, thanks for stopping by. Please take a look around.</p>
                </div>
                <div className='px-3 pt-1'>
                    <p>
                    Blah blah blah write a bio in here when we figure 
                    out what we want to say. For the mean time I'll 
                    type this filler.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About