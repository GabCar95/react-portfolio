import React from 'react'
import HTML from '../skill-icons/html.png';
import CSS from '../skill-icons/css.png';
import JavaScript from '../skill-icons/javascript.png';
import Python from '../skill-icons/python.png'
import Pandas from '../skill-icons/pandas.png'
import Tailwind from '../skill-icons/tailwind.png'
import Node from '../skill-icons/node.png'
import React_logo from '../skill-icons/react.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#283747] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 pt-[300px] flex flex-col w-full h-full items-center'>
            <div>
                <p className='text-3xl font-bold inline border-b-4 border-[#6C3483] justify-center'>Skills</p>
            </div>
            <div>
                <p className='py-4'>These are the technogies I've worked with!</p>
                </div>

            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[160px] mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-2'>JavaScript</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[100px] mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-0'>Tailwind</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[100px] mx-auto' src={React_logo} alt="React icon" />
                    <p className='my-0'>React</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[85px] mx-auto' src={Node} alt="Node.js icon" />
                    <p className='my-3'>Node.js</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[80px] mx-auto' src={Python} alt="Python icon" />
                    <p className='my-5'>Python</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-[100px] mx-auto' src={Pandas} alt="Pandas icon" />
                    <p className='my-0'>Pandas</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills