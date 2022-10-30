import React from 'react'

export const Navbar = () => {
  return (
    <div className='fixed w-full mx-auto h-auto z-10 bg-slate-800 text-gray-300'>

        <div className='max-w-[1366px] w-full h-full flex justify-between items-center p-5 mx-auto'>
            <div className='flex-col'>
                <h1 className='text-5xl font-bold'>LV</h1>
                <p className='text-xl font-semibold'>Upholstery Services</p>
            </div>           
            <ul className='flex justify-end'>
                <li className='mr-[20px] text-2xl'>Home</li>
                <li className='mr-[20px] text-2xl'>About</li>
                <li className='mr-[20px] text-2xl'>Portfolio</li>
                <li className='mr-[20px] text-2xl'>Services</li>
                <li className='mr-[20px] text-2xl'>Contact</li>
            </ul>
        </div>

    </div>
  )
}
