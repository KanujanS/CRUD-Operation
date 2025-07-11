import React from 'react'

const Login = () => {
  return (
    <div className='pt-50'>
        <form className='flex flex-col w-[90%] sm:max-w-100 m-auto gap-4  border border-gray-500 items-center justify-center'>
            <div>
                <p>Login</p>
            </div>
            <div>
                <input type="email" placeholder='Email'/>
            </div>
            <div>
                <input type="password" placeholder='Password'/>
            </div>
            <div>
                <button>Sign In</button>
            </div>
            <div>
                <p>Create an account</p>
            </div>
        </form>
    </div>
  )
}

export default Login