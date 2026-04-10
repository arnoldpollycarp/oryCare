import React from 'react'
import HeroImg from '../assets/HeroBg.png'
import HeroAnime from '../assets/hero_left_img.png'
import BulbImg from '../assets/bulb_heroImg.png'
import FruitImg from "../assets/fruit.png"
import SunImg from "../assets/sun.png"
import Bulb from '../assets/bulb_logo.png'
import HeroMinor from '../assets/heroPageMinor.png'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col" id="home">

      {/* HERO SECTION (IMPORTANT: relative + min height) */}
      <div
        className="relative bg-cover bg-center min-h-[90vh] flex flex-col justify-between"
        style={{ backgroundImage: `url(${HeroImg})`, backgroundAttachment: "fixed"}}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50 z-0"></div>

        {/* CONTENT */}
        <div className="relative px-6 md:px-16 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">

            {/* LEFT */}
            <div className="flex flex-col justify-center z-30 gap-2 text-center md:text-left max-w-3xl">

              {/* Image */}
              <img
                src={HeroMinor}
                alt="Hero Minor"
                className="w-48 md:w-52 lg:w-60 mx-auto md:mx-0 scale-150"
              />

              {/* Heading */}
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#666d5b] leading-tight">
                Bring Light <span className="text-[#21421E]">To Mental Wellness.</span>
              </h1>

              {/* Paragraph */}
              <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
                Professional care to renew the mind and enrich life.
              </p>

              {/* Button */}
              <div className='flex flex-row gap-2 text-sm md:text-base justify-center md:justify-start mt-4'>
                <button className="bg-[#D9CA77] text-[#21421E] px-8 py-3 rounded-lg font-semibold 
                  shadow-md hover:scale-105 hover:shadow-lg 
                  transition-all duration-300">
                  Book A Session
                </button>

                <button className="bg-gradient-to-r from-[#21421E] to-[#B2AC88] 
                  text-white px-8 py-3 rounded-lg font-semibold 
                  shadow-md hover:scale-105 hover:shadow-lg 
                  transition-all duration-300">
                  Our Services
                </button>
              </div>

            </div>

            {/* RIGHT */}
            <div className="flex justify-center items-center relative">
              <div className="relative">

                {/* Glow */}
                <div className="absolute w-[280px] h-[280px] bg-yellow-200/30 rounded-full blur-2xl z-0"></div>

                {/* Hero Image */}
                <img
                  src={HeroAnime}
                  alt="Hero"
                  className="relative z-10 w-[280px] md:w-[350px]"
                />

              </div>
            </div>

          </div>
        </div>

        {/* WAVES (NOW WORKING) */}
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">

          {/* BACK WAVE */}
          <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-[120px]" preserveAspectRatio="none">
            <path
              d="M0,60 C300,-10 600,130 900,60 C1100,10 1300,80 1440,40 L1440,120 L0,120 Z"
              fill="#d1d5db"
              opacity="0.5"
            />
          </svg>

          {/* MIDDLE WAVE */}
          <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-[100px]" preserveAspectRatio="none">
            <path
              d="M0,70 C200,20 400,120 600,70 C800,20 1000,120 1200,70 C1300,50 1440,80 1440,80 L1440,120 L0,120 Z"
              fill="#e5e7eb"
              opacity="0.7"
            />
          </svg>

          {/* WHITE WAVE (TOP) */}
          <svg viewBox="0 0 1440 140" className="absolute bottom-0 w-full h-[100px] z-30" preserveAspectRatio="none">
            <path
              d="M0,40 Q720,130 1440,40 L1440,140 L0,140 Z"
              fill="#ffffff"
            />
          </svg>

        </div>

      </div>

      {/* SECTION BELOW */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-10 bg-white md:divide-x-2 md:divide-gray-300 md:divide-y-0 divide-y-2 divide-gray-300">

        <div className="flex items-center">
          <img src={Bulb} className="w-32 h-32 md:w-44 md:h-44" />
          <p className="text-2xl md:text-4xl font-semibold text-gray-700 ml-3">
            Mental Health Support
          </p>
        </div>

        <div className="flex items-center">
          <img src={FruitImg} className="w-32 h-32 md:w-44 md:h-44" />
          <p className="text-2xl md:text-4xl font-semibold text-gray-700 ml-3">
            Wellness Programs
          </p>
        </div>

        <div className="flex items-center">
          <img src={SunImg} className="w-32 h-32 md:w-44 md:h-44" />
          <p className="text-2xl md:text-4xl font-semibold text-gray-700 ml-3">
            Lifestyle Coaching
          </p>
        </div>

      </div>
    </div>
  )
}
