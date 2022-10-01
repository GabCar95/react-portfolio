import React from 'react'
import Skills from './Skills'


const About = () => {
  return (
    <div name='about' className='w-full min-w-[600px] h-full bg-[#FFFAF0] text-gray-500  py-[150px]'>
        <div className='flex flex-col w-full h-full items-center'>
            
            <div className='max-w-[1000px] w-full sm:grid grid-cols-4 px-3'>
                
                <div className='px-3 sm:text-left text-xl font-semibold pb-5 col-start-1 col-span-2'>
                    <p className='text-3xl font-bold inline border-b-4 border-[#40E0D0] text-gray-500'>About</p>
                    <p className='pt-4'>
                        ("Hello World!"), thanks for stopping by and checking out my portfolio. I'm a Marine Corps veteran who got into programming.
                        I have multiple years of experience working with tech, both hardware and software. Shoot me an email if you're looking for a full stack developer to join your team, collaborate on a project or make you a custom site!
                    </p>
                </div >


                <div className='col-start-3 col-span-2'>
                    <Skills />
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default About