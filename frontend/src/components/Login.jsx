import React from 'react'

const Login = () => {
  return (
    <div className='pt-50 bg-gradient-to-b from-cyan-100/70'>
        <form className='flex flex-col w-[90%] sm:max-w-100 m-auto gap-4 p-8 text-teal-800 border border-teal-800 rounded-2xl'>
            <div className='flex items-center justify-center gap-2 mb-2 mt-8'>
                <p className='text-4xl text-teal-800'>Login</p>
            </div>
            <input type="email" placeholder='Email' className='w-full px-3 py-2 border border-teal-600 outline-none focus:border-2 rounded-xl'/>
            <input type="password" placeholder='Password' className='w-full px-3 py-2 border border-teal-600 outline-none focus:border-2 rounded-xl'/>
            <button className='px-3 py-2 border border-teal-600 bg-teal-600 rounded-xl text-white hover:bg-teal-800'>Sign In</button>
            <div className='flex items-center'>
                <p className='text-s'>Create an account</p>
            </div>
        </form>
    </div>
  )
}

export default Login