import React from 'react'
import Title from '../components/Title'

export default function AboutUs() {
  return (
    <section className="px-6 md:px-16 py-12" id="about">
      <div className='flex justify-center gap-4'>
        <div className='h-px bg-gray-300'></div>
        <Title>About Us</Title>
        <div className='h-px bg-gray-300'></div>
      </div>

      <div className="mt-10 space-y-8 text-gray-700">
        <p className="text-lg leading-8 text-justify">
          OryCare is a leading healthcare provider dedicated to delivering compassionate, high-quality medical services to our community. Our mission is to improve the health and well-being of every patient we serve, and we take pride in building long-term relationships founded on trust, respect, and open communication.
        </p>

        <p className="text-lg leading-8 text-justify">
          Our team of experienced healthcare professionals works together to provide coordinated care across multiple specialties. From preventive exams and chronic disease management to urgent care and wellness support, we create personalized treatment plans designed around each patient’s unique needs and lifestyle.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">What sets OryCare apart</h3>
          <p className="text-lg leading-8 text-justify">
            We believe in creating a healing environment where every patient is treated with dignity and compassion. Our clinic combines modern clinical expertise with thoughtful patient support, making every visit both comfortable and efficient.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Patient-Centered Care</h4>
            <p className="mt-3 text-base leading-7 text-gray-700">
              We listen carefully to your concerns and partner with you to make informed decisions. Our staff is available to answer questions, coordinate follow-up care, and support you at every step of your health journey.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Comprehensive Services</h4>
            <p className="mt-3 text-base leading-7 text-gray-700">
              From routine screenings to specialist referrals, OryCare provides a broad spectrum of services to help you stay healthy, recover faster, and manage chronic conditions with confidence.
            </p>
          </div>
        </div>

        <p className="text-lg leading-8 text-justify">
          At OryCare, we are committed to making healthcare more accessible and welcoming for everyone. Whether you are visiting us for the first time or continuing an existing care plan, our goal is to support your health and empower you to live your best life.
        </p>
      </div>
    </section>
  )
}
