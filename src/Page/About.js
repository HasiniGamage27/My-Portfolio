import React from 'react'
import { motion } from "framer-motion"


export default function About() {
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 md:flex-row md:items-start">
  
  {/* Profile Image - Takes 1/3 of the Screen */}
  <motion.img
    src="/Picture/pic5.jpg" // Replace with your actual image path
    alt="Hasini Nimasha Gamage"
    className="w-full py-0 h-800 md:w-1/3"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  />

  {/* Text Content - Takes 2/3 of the Screen */}
  <motion.div
    className="w-full pt-20 mt-6 text-center md:w-2/3 md:mt-0 md:text-left md:pl-10"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <h1 className="text-3xl font-bold text-green-600">My Story</h1>
    <p className="mt-4 text-lg leading-relaxed text-gray-700">
      Hi, I'm <span className="font-semibold">Hasini Nimasha Gamage</span>,  
      a BSc (Hons) Information Systems student at Rajarata 
      University. Passionate about technology, data analytics, and IT management, I seek to apply 
      my skills in real-world projects. Motivated, adaptable, and a strong team player, I aim to 
      contribute to an organization's growth, profitability, and long-term success. 🚀
    </p>

    {/* Additional Details */}
    <div className="p-4 mt-6 bg-gray-100 border-l-4 border-green-500 rounded-lg shadow-lg">
      <p className="text-lg text-gray-800"><strong>ID:</strong> 200058701439</p>
      <p className="text-lg text-gray-800"><strong>Date of Birth:</strong> March 27, 2000</p>
      <p className="text-lg text-gray-800"><strong>Nationality:</strong> Sri Lankan</p>
      <p className="text-lg text-gray-800"><strong>Status:</strong> Undergraduate Student</p>
    </div>

  </motion.div>

</div>

  )
}

