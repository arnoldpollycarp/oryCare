import React from 'react'

export default function AboutUs() {
  return (
    <section className="px-6 md:px-16 py-12" id="about">
      <div className='flex justify-center gap-4'>
        <div className='h-px bg-gray-300'></div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#21421E] text-center mb-6">
          About Us
        </h2>
        <div className='h-px bg-gray-300'></div>
      </div>
        
        <p className="text-lg text-gray-700 text-center">
            OryCare is a leading healthcare provider dedicated to delivering compassionate, high-quality medical services to our community. Our mission is to improve the health and well-being of every patient we serve. With a team of experienced healthcare professionals, we offer a wide range of medical services, from primary care to specialized treatments. We are committed to providing personalized care that meets the unique needs of each individual, ensuring that our patients receive the best possible outcomes. At OryCare, we believe in fostering a supportive and inclusive environment where patients feel valued and empowered to take charge of their health.
        </p>
    </section>
  )
}
