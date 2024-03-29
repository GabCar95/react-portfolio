import React from 'react'
import Git from '../skill-icons/git.png';
import CSS from '../skill-icons/css.png';
import JavaScript from '../skill-icons/javascript.png';
import Python from '../skill-icons/python.png'
import Django from '../skill-icons/django.png'
import Tailwind from '../skill-icons/tailwind.png'
import Java from '../skill-icons/java.png'
import React_logo from '../skill-icons/react.png'

const Skills = () => {
  return (
    <div name='skills' className='text-gray-500 bg-[#FFFAF0]'>
       
       <div className='px-3 pb-[80px]'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-[#40E0D0] justify-center'>Skills</p>
            </div>
            <div>
                <p className='py-4 text-xl font-semibold'>These are some technologies I've worked with!</p>
            </div>

            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={Git} alt="Git icon" />
                    <p className='my-4 text-gray-500 font-semibold'>Git</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4 text-gray-500 font-semibold'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[80px] h-[90px] mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-2 text-gray-500 font-semibold'>JavaScript</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[100px] mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-0 text-gray-500 font-semibold'>Tailwind</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[100px] mx-auto' src={React_logo} alt="React icon" />
                    <p className='my-0 text-gray-500 font-semibold'>React</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[95px] mx-auto' src={Java} alt="Java icon" />
                    <p className='my-2 text-gray-500 font-semibold'>Java</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={Python} alt="Python icon" />
                    <p className='my-6 text-gray-500 font-semibold'>Python</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[79px] mx-auto' src={Django} alt="Django icon" />
                    <p className='my-1 text-gray-500 font-semibold'>Django</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills