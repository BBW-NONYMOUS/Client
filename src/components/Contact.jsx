import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-20 px-6 sm:px-12 lg:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Contact <span className="text-indigo-600">ME</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          If You need assistance, please don't hesitate to reach out. I'm here to help! As Co Student
        </p>
      </div>

      {/* Contact Form Label*/}
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <form className="grid grid-cols-1 gap-6">
          {/* Name Label*/}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* Email label*/}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* Message Label*/}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
            ></textarea>
          </div>

          {/* Button Label*/}
          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition"
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact