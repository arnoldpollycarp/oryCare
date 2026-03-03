import React, { useState } from 'react'
import Individual from '../assets/individual_therapy.jpg'
import Group from '../assets/group_therapy.jpg'
import Couples from '../assets/couples_therapy.jpg'
import Family from '../assets/family_therapy.jpg'
import Teletherapy from '../assets/teletherapy.jpg'

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState(null)

  const services = [
    {
      title: 'Individual Therapy',
      description:
        'Personalized one-on-one counseling sessions to support your mental health journey.',
      image: Individual,
    },
    {
      title: 'Group Therapy',
      description:
        'Facilitated group sessions that foster connection and shared healing experiences.',
      image: Group,
    },
    {
      title: 'Couples Counseling',
      description:
        'Support for couples looking to strengthen their relationship and improve communication.',
      image: Couples,
    },
    {
      title: 'Family Therapy',
      description:
        'Therapeutic support for families navigating challenges and seeking healthier dynamics.',
      image: Family,
    },
    {
      title: 'Teletherapy',
      description:
        'Convenient online therapy sessions accessible from the comfort of your home.',
      image: Teletherapy,
    },
  ]

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <section className="px-6 md:px-16 py-12" id="services">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="perspective cursor-pointer"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative h-72 w-full transition-transform duration-500 transform-style-preserve-3d ${
                flippedIndex === index ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-xl shadow-lg backface-hidden overflow-hidden"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-4">
                  <h3 className="text-xl font-semibold text-white text-center">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-indigo-600 text-white p-6 rotate-y-180 backface-hidden">
                <p className="text-center text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}