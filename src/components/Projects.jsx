import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#283747]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 pt-[200px] flex flex-col justify-center w-full h-full items-center'>
            <div className='pb-4'>
                <p className='text-3xl font-bold inline border-b-4 border-[#6C3483]'>Projects</p>
            </div>
            <div>
            <p className='py-1 pb-6'>Check out some of my work!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-col-3 gap-4'>
              <div className='shodow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx auto'>
                <div>
                  <span>

                  </span>
                  <div>
                    <a href='/'>
                      <buttom></buttom>
                    </a>
                    <a href='/'>
                      <buttom></buttom>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Projects