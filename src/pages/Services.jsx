import React from 'react'
import Individual from '../assets/individual_therapy.jpg'
import Group from '../assets/group_therapy.jpg'
import Couples from '../assets/couples_therapy.jpg'
import Family from '../assets/family_therapy.jpg'
import Teletherapy from '../assets/teletherapy.jpg'
import Title from '../components/Title'

export default function Services() {
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

  return (
    <section className="px-6 md:px-16 py-12" id="services">
      <Title>Our Services</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <div
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            />

            <div className="space-y-4 bg-white p-6">
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}