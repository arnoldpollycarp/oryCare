import React from "react";
import ContactImage from "../assets/Dr-Comm-removebg-preview.png";

export default function Contact() {
  return (
    <section className="px-6 md:px-16 pt-8 pb-16" id="contact">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <p className="text-gray-600 leading-relaxed">
              Have questions or need assistance? Reach out to us using the
              following contact information. Our team is ready to help you
              with any inquiries.
            </p>
          </div>

          <img
            src={ContactImage}
            alt="Doctor communication"
            className="w-full max-w-md mx-auto object-contain"
          />
        </div>

        {/* Right Side - Contact Card */}
        <div className="md:w-1/2 w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold">
              Contact Information
            </h2>

            <ul className="text-gray-600 space-y-4">
              <li>
                <span className="font-semibold text-gray-800">
                  Phone:
                </span>{" "}
                +254 (768) 867-017
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Email:
                </span>{" "}
                info@orycare.com
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Address:
                </span>{" "}
                123 Moi Avenue, Medical Center, MC 12345
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}