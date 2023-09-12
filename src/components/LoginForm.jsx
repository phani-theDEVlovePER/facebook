import React from 'react'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const LoginForm = () => {

  const [state, dispatch] = useStateValue()

  const signIn = () => {
    // sign in...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        // console.log(result)
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section className='bg-white shadow-md rounded-xl w-[26rem] h-[22rem] flex items-center justify-center flex-col ' >
      <div className='flex flex-col items-center justify-center gap-4  p-4 min-w-[90%] border-b-2'>

        <input type='email' placeholder='Email address'
          className='w-[90%] h-10 rounded-[7px] flex items-center justify-center px-3 border-2 outline-blue-500 caret-blue-600'
        />

        <input type='password' placeholder='Password'
          className='w-[90%] h-10 rounded-[7px] flex items-center justify-center px-3 border-2 outline-blue-500 caret-blue-600'
        />

        <button
          className='w-[90%] h-10 rounded-[7px] flex items-center justify-center px-3 bg-blue-500 text-white font-bold text-xl'
          onClick={signIn}
        >
          Log in
        </button>

        <a href='#'
          className='text-blue-500 hover:underline'
        >
          Forgotten password?
        </a>

      </div>
      <div className='min-w-full flex items-center justify-center mt-8'>
        <button
          className='w-[60%] h-12 rounded-[7px] flex items-center justify-center px-3 bg-green-500 text-white font-semibold text-lg'
          onClick={signIn}
        >
          Create new account
        </button>
      </div>
    </section >
  )
}

export default LoginForm