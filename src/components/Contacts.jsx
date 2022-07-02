import React from 'react'

const Contacts = () => {
  return (
    <div name='contact' className='w-full min-w-[600px] h-screen bg-[#FFFAF0] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/3ba2d602-21d3-408e-ac6d-6b11fde26e16" className='flex flex-col max-w-[600px] w-full'>
            <div className='max-w-[600px] mx-auto p-4 pt-[100px] flex flex-col justify-center w-full h-full items-center'>
                <p className='text-3xl font-bold inline border-b-4 border-[#40E0D0] text-gray-500'>Contact</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6]' name="message" rows="10" placeholder='Message' ></textarea>
            <button className='text-gray-500 font-semibold border-2 px-4 py-2 flex items-center hover:bg-[#40E0D0] hover:border-[#40E0D0] hover:text-gray-500 hover:font-bold mx-auto my-6 rounded-full' >Send</button>
        </form>
    </div>
  )
}

export default Contacts