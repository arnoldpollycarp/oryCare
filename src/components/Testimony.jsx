import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Test_1 from "../assets/test_1.jpg";
import Test_2 from "../assets/test_2.jpg";
import Test_3 from "../assets/test_3.jpg";
import Test_4 from "../assets/test_4.jpg";
import Test_5 from "../assets/test_5.jpg";
import Test_6 from "../assets/test_6.jpg";

export default function Testimony() {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Company A",
      image: Test_1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      name: "Jane Smith",
      title: "CTO, Company B",
      image: Test_2,
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      name: "Alice Johnson",
      title: "Marketing Manager, Company C",
      image: Test_3,
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
    {
      name: "Bob Brown",
      title: "Product Manager, Company D",
      image: Test_4,
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    },
    {
      name: "Charlie Davis",
      title: "Designer, Company E",
      image: Test_5,
      quote:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      name: "Eve Wilson",
      title: "Developer, Company F",
      image: Test_6,
      quote:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const itemsPerView = () => {
    if (window.innerWidth >= 1024) return 3; // desktop
    if (window.innerWidth >= 768) return 2; // tablet
    return 1; // mobile
  };

  const [visible, setVisible] = useState(itemsPerView());

  useEffect(() => {
    const handleResize = () => setVisible(itemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) =>
      prev + visible >= testimonials.length ? 0 : prev + visible
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev - visible < 0
        ? testimonials.length - visible
        : prev - visible
    );
  };

  const visibleTestimonials = testimonials.slice(
    index,
    index + visible
  );

  return (
    <section
      className="px-6 md:px-16 py-20 bg-gray-50 overflow-hidden"
      id="testimony"
    >
      <h1 className="text-4xl font-bold text-center mb-14">
        Client Testimonials
      </h1>

      <div className="relative max-w-7xl mx-auto">

        {/* Slider */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleTestimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <h2 className="font-bold text-lg">
                    {testimonial.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {testimonial.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="px-5 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="px-5 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}