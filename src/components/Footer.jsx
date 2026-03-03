import React from 'react'

export default function Footer() {
  return (
    <div className='w-full bg-[#666d5b] sticky top-0 z-50 
      transition-all duration-300
      bg-[#666d5b]/95 backdrop-blur-md py-3 shadow-lg'>
      <div className='px-6 md:px-16'>
        <p className="text-white text-center">  © {new Date().getFullYear()} OryCare. Powered By ApolTechnologies.</p>
      </div>
    </div>
  )
}
