import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currState, setCurrState] = useState('Login');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      if (currState === 'Login') {
        const res = await axios.post('http://localhost:5005/api/users/login', {
          email: data.email,
          password: data.password,
        });

        if (res.data.success) {
          toast.success('Login Successful')
          login();
          navigate('/crud-operation');
        } else {
          toast.error(res.data.message || 'Login failed');
        }
      } else {
        const res = await axios.post('http://localhost:5005/api/users/register', {
          name: data.name,
          email: data.email,
          password: data.password,
        });

        if (res.data.success) {
          toast.success('Account created! Please log in.');
          setCurrState('Login');
        } else {
          toast.error(res.data.message || 'Registration failed');
        }
      }
    } catch (error) {
      console.error(`${currState} error:`, error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className='pt-50 bg-gradient-to-b from-sky-300'>
      <form
        onSubmit={onSubmit}
        className='flex flex-col w-[90%] sm:max-w-100 m-auto gap-4 p-8 text-sky-800 border border-sky-800 rounded-2xl'
      >
        <div className='flex items-center justify-center gap-2 mb-2 mt-8'>
          <p className='text-4xl text-sky-800'>{currState}</p>
        </div>

        {currState === 'Sign Up' && (
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={data.name}
            onChange={onChangeHandler}
            className='w-full px-3 py-2 border border-sky-600 outline-none focus:border-2 rounded-xl'
            required
          />
        )}

        <input
          type='email'
          name='email'
          placeholder='Email'
          value={data.email}
          onChange={onChangeHandler}
          className='w-full px-3 py-2 border border-sky-600 outline-none focus:border-2 rounded-xl'
          required
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={data.password}
          onChange={onChangeHandler}
          className='w-full px-3 py-2 border border-sky-600 outline-none focus:border-2 rounded-xl'
          required
        />

        <button
          type='submit'
          className='px-3 py-2 border border-sky-600 bg-sky-600 rounded-xl text-white hover:bg-sky-800'
        >
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {currState === 'Login' ? (
          <p className='flex justify-center gap-1'>
            Create a new account?
            <span
              onClick={() => setCurrState('Sign Up')}
              className='cursor-pointer text-blue-700'
            >
              Click Here
            </span>
          </p>
        ) : (
          <p className='flex justify-center gap-1'>
            Already have an account?
            <span
              onClick={() => setCurrState('Login')}
              className='cursor-pointer text-blue-700'
            >
              Click Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;