import React from 'react'
import Dashboard from '../project-imgs/dashboard.png'
import Gpc from '../project-imgs/gpc.png'

const Projects = () => {
  function onClick(){
    return 0
  }
  
  return (
    <div name='projects' className='w-full min-w-[600px] h-full bg-[#FFFAF0] text-gray-500 '>
        {/* Container */}
        <div className='max-w-[screen] mx-auto p-4 pt-[150px] flex flex-col justify-center w-full h-full items-center'>
            <div className='pb-4'>
              <p className='text-3xl font-bold inline border-b-4 border-[#40E0D0]'>Projects</p>
            </div>

            <div className='pb-6'>
              <p className='py-1 text-xl font-semibold'>Check out some of my work!</p>
            </div>


            {/* Projects */}
            <div className='flex flex-col w-full h-full'>
              {/* manage system */}
              <div className='grid grid-cols-1 md:grid-cols-2 w-screen'>
                  <div className='grid pt-4  shadow-2xl shadow-black hover:scale-110 mx-auto'>
                      <div className='lg:px-[50px] pb-4'>
                        <h1 className='text-xl text-gray-500 ml-[140px] font-semibold py-4'>Maintenance Management System</h1>
                        <img className='w-[500px] h-[250px] ml-[40px] pb-2' src={Dashboard} alt='/' />
                        <div className='inline py-4 ml-[140px]'>
                          <a href='https://maintmanagementsystem.herokuapp.com/' target="_blank" className='px-4 py-1 bg-[#40E0D0] text-gray-500 font-semibold rounded-xl'>Live Demo</a>
                          <a href='https://github.com/GabCar95/Management-System' target="_blank" className='ml-[180px] px-4 py-1 bg-[#40E0D0] text-gray-500 font-semibold rounded-xl'>Code</a>
                        </div>
                        <p className='w-[580px]'>
                          This is a full stack application using Django and React.js.
                          It allows a truck company to keep track of their business information using a relational database. 
                        </p>
                        <strong>username: test </strong>  
                        <br/>  
                        <strong>password: password123!  </strong>
                      </div>
                    </div>

                    {/* GPC */}
                  <div className='grid pt-10 shadow-2xl shadow-black hover:scale-110 mx-auto'>
                    <div className='lg:px-[50px] pb-4'>
                      <h1 className='text-xl text-gray-500 ml-[250px] font-semibold py-4'>GPC Service</h1>
                      <img className='w-[500px] h-[250px] ml-[40px] pb-2' src={Gpc} alt='/' />
                      <div className='inline py-4 ml-[140px]'>
                        <a href='https://gpcsocal.com/' target="_blank" className='px-4 py-1 bg-[#40E0D0] text-gray-500 font-semibold rounded-xl'>Live Site</a>
                        <a href='https://github.com/GabCar95/gpc-app' target="_blank" className='ml-[180px] px-4 py-1 bg-[#40E0D0] text-gray-500 font-semibold rounded-xl'>Code</a>
                      </div>
                      <p className='w-[580px]'>
                        This is a React.js applicatation for a small local business. The application is fully responsive and has features such as
                        a react-responsive-carousel, google map, and a functional contact form.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Projects