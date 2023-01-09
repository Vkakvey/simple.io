import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='h-100vh w-full bg-[#1b2631] flex justify-center p-4 lg:mb-5'>
    <form method="POST" action='https://getform.io/f/d6d2fa12-8557-4175-976d-03fee9186fd2' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 mt-10'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='py-4 text-white'>// Submit the form below or short  me an email - myemail.@gamil.com</p>
        </div>
        <input className='bg-[#ccd5f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd5f6]' type='email' placeholder='Email' name='email'/>
        <textarea name="message"  rows="10"
        className='bg-[#ccd5f6]'
        placeholder=' Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8
        flex mx-auto items-center'>Let's Collabrate</button>
    </form>
    </div>
  )
}

export default Contact