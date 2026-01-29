import React from 'react'

const Welcome = () => {
  return (
    <section className='flex flex-col h-screen'>
        <div className='bg-yellow-300 flex-2 rounded-b-3xl items-center justify-center flex'>
            <img src="/HYG.png" alt="logo" className='h-[100px]' />
        </div>
        <div className='bg-gray-100 flex-1 space-y-7 flex items-center flex-col justify-center'>
            <h1 className='text-3xl font-minibold'>Welcome</h1>
            <button className='shadow tracking-wide p-2 w-[320px] font-bold bg-white rounded-2xl '>Get Started</button>
            <button className='p-2 shadow bg-yellow-300 w-[320px] tracking-wide rounded-3xl font-bold text-white'>Login</button>
        </div>
    </section>
  )
}

export default Welcome