import React from 'react'
import { motion } from "framer-motion"


export default function MainHome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      {/* Profile Image Animation */}
      <motion.img
        src="/Picture/pic3.jpg" // Replace with your actual image path
        alt="Hasini Nimasha Gamage"
        className="border-4 border-green-500 rounded-full shadow-lg w-60 h-60"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Profile Text Animation */}
      <motion.h1
        className="mt-4 text-3xl font-bold text-green-600"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hasini Nimasha Gamage
      </motion.h1>

      <motion.p
        className="max-w-lg mt-2 text-center text-black-600"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        I am a passionate Information Systems undergraduate, eager to leverage technology 
        for business innovation. Skilled in software development, data analytics, and IT management.
      </motion.p>

      {/* Contact Buttons with Hover & Slide-in Effect */}
      <motion.div
        className="py-2 mt-4 space-x-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/hasini-gamage-4b89a934a/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white transition bg-green-600 rounded-lg shadow hover:bg-green-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          LinkedIn
        </motion.a>
        <motion.a
      href="Picture/GH Nimasha cv.pdf" // Path to the CV file in the public folder
      download="Picture/GH Nimasha cv.pdf" // Ensures the file is downloaded instead of opened
      className="px-4 py-2 text-white transition bg-green-600 rounded-lg shadow hover:bg-green-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Download CV
    </motion.a>
      </motion.div>
    </div>
  )
}
