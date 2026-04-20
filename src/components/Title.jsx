import React from 'react'

export default function Title({ children }) {
  return (
    <div className='flex items-center gap-4 w-full mb-14'>
        {/* left line  */}
        <div className='flex-1 h-1 bg-gray-300 rounded-full'></div>
        {/* title  */}
        <h1 className='text-3xl font-bold font-serif text-[#21421E]'>{children}</h1>
        {/* right line  */}
        <div className='flex-1 h-1 bg-gray-300 rounded-full'></div>
    </div>
  )
}
