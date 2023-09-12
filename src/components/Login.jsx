import React from 'react'
import { facebook } from '../constants'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <section className='min-w-full h-screen flex flex-col items-center justify-center p-5 gap-5'>
            <div className='min-w-full flex flex-col items-center justify-center gap-5 p-4'>
                <img src={facebook} 
                    className='w-[14rem]'
                />
                <h1 className='font-serif font-medium text-lg'>Facebook helps you connect and <br/> share with the people in your life.</h1>
            </div>
            <LoginForm />
        </section>
    )
}

export default Login