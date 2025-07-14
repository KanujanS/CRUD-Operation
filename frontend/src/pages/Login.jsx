import React, { useState } from 'react'

const Login = () => {
    const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className='pt-50 bg-gradient-to-b from-sky-300'>
        <form className='flex flex-col w-[90%] sm:max-w-100 m-auto gap-4 p-8 text-teal-800 border border-teal-800 rounded-2xl'>
            <div className='flex items-center justify-center gap-2 mb-2 mt-8'>
                <p className='text-4xl text-teal-800'>{currState}</p>
            </div>
            <input type="text" placeholder='Name' className='w-full px-3 py-2 border border-teal-600 outline-none focus:border-2 rounded-xl' required/>
            <input type="email" placeholder='Email' className='w-full px-3 py-2 border border-teal-600 outline-none focus:border-2 rounded-xl' required/>
            <input type="password" placeholder='Password' className='w-full px-3 py-2 border border-teal-600 outline-none focus:border-2 rounded-xl' required/>
            <button className='px-3 py-2 border border-teal-600 bg-teal-600 rounded-xl text-white hover:bg-teal-800'>Sign In</button>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        </form>
    </div>
  )
}

export default Login