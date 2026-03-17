import React from 'react'

export default function AboutUs() {
  return (
    <section className="px-6 md:px-16 py-12" id="about">
      {/* 🌊 Top Sine Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 
              C180,120 360,0 540,60 
              C720,120 900,0 1080,60 
              C1260,120 1440,0 1440,60 
              L1440,0 L0,0 Z"
            className="fill-white"
          />
        </svg>
      </div>
        <h1 className="text-4xl font-bold mb-10 text-center">About Us</h1>
        
        <p className="text-lg text-gray-700 text-center">
            OryCare is a leading healthcare provider dedicated to delivering compassionate, high-quality medical services to our community. Our mission is to improve the health and well-being of every patient we serve. With a team of experienced healthcare professionals, we offer a wide range of medical services, from primary care to specialized treatments. We are committed to providing personalized care that meets the unique needs of each individual, ensuring that our patients receive the best possible outcomes. At OryCare, we believe in fostering a supportive and inclusive environment where patients feel valued and empowered to take charge of their health.
        </p>
    </section>
  )
}
