import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='h-[100vh] bg-[#0a192f] flex flex-col justify-center items-center p-4 text-white'>
        <form method='POST' action="https://getform.io/f/cddc94d9-b78a-431b-8553-e2255c61ff5b " className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-300 text-gray-300 text-center'>Contact</p>
                <p className='py-4 font-semibold text-xl'>Submit the form below or shoot me an email - sohamhegde24@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-cyan-300 hover:border-cyan-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact