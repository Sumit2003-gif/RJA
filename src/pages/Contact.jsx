import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import ContactDiv from "../components/ContactDiv";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import BranchesAffiliates from "../components/BranchesAffilates";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://carajput.com/common-assets/images/slider-images/3.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Contact Us</h1>
          <p className="mt-3 text-white/70 text-lg">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>{" "}
            / <span className="text-white">Contact</span>
          </p>
        </div>
      </div>

      {/* Quick Contact Options */}
      <section>
        <ContactSection />
      </section>

      {/* Branches Info */}
      <section>
        <BranchesAffiliates />
      </section>

      {/* Contact Form & Info */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Your Address"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Details</h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-md text-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>132 New York Street, NY</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-md text-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>01546 875 656, 01546 985 989</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-md text-lg">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-md text-lg">
                <FaClock />
              </div>
              <div>
                <p className="font-semibold">Working Hours:</p>
                <p>Mon to Sat – 9:00am to 6:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <Map />

      {/* Call to Action / Contact Div */}
      <ContactDiv />
    </div>
  );
};

export default Contact;
