import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [currState, setCurrState] = useState("Login");
    const navigate = useNavigate();
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    });
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onLogin = async (event)=> {
        event.preventDefault();
        const { email, password } = data;
        try {
            if (email==='admin@demo.com' && password=== '12345678') {
                navigate('crud-operation');
            }
            else {
                alert('Invalid Credentials');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
  return (
    <div className='pt-50 bg-gradient-to-b from-sky-300'>
        <form onSubmit={onLogin} className='flex flex-col w-[90%] sm:max-w-100 m-auto gap-4 p-8 text-sky-800 border border-sky-800 rounded-2xl'>
            <div className='flex items-center justify-center gap-2 mb-2 mt-8'>
                <p className='text-4xl text-sky-800'>{currState}</p>
            </div>
            {currState === 'Login' ? <></> : <input type="text" placeholder='Name' name='name' onChange={onChangeHandler} value={data.name} className='w-full px-3 py-2 border border-sky-600 outline-none focus:border-2 rounded-xl' required/>}
            <input type="email" placeholder='Email' name='email' onChange={onChangeHandler} value={data.email} className='w-full px-3 py-2 border border-sky-600 outline-none focus:border-2 rounded-xl' required/>
            <input type="password" placeholder='Password' name='password' onChange={onChangeHandler} value={data.password} className='w-full px-3 py-2 border border-sky-600 outline-none focus:border-2 rounded-xl' required/>
            <button type='submit' className='px-3 py-2 border border-sky-600 bg-sky-600 rounded-xl text-white hover:bg-sky-800'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            {currState==='Login'? 
            <p className='flex justify-center gap-1'>Create a new account ? <span onClick={()=>setCurrState("Sign Up")} className='cursor-pointer text-blue-700'>Click Here</span></p> : <p className='flex justify-center gap-1'>Already have an account ?  <span onClick={()=>setCurrState("Login")} className='cursor-pointer text-blue-700'>Click Here</span></p>}
        </form>
    </div>
  )
}

export default Login