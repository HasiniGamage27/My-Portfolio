import React from 'react'
import { motion } from "framer-motion"

export default function Education() {
  return (
    <div className="container p-6 mx-auto">
    <motion.h1
      className="mb-6 text-4xl font-bold text-center text-green-600"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      My Education
    </motion.h1>

    {/* Secondary Education */}
    <motion.div
      className="p-6 mb-6 bg-white border-l-4 border-green-500 rounded-lg shadow-md"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">Secondary Education</h2>
      <p className="text-gray-600">
        Completed secondary education at Katuwana National School with a strong focus on commerce stream.
      </p>
    </motion.div>

    {/* Undergraduate Education */}
    <motion.div
      className="p-6 mb-6 bg-white border-l-4 border-green-500 rounded-lg shadow-md"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">Undergraduate Education</h2>
      <p className="text-gray-600">
        Pursuing a BSc (Hons) in Information Systems at Rajarata University of Sri Lanka.
      </p>
    </motion.div>

    {/* Other Activities */}
    <motion.div
      className="p-6 mb-6 bg-white border-l-4 border-green-500 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">School Activities</h2>
      <p className="text-gray-600">
               
       Participated in and won elocution and debate competitions  
       
      </p>
    </motion.div>

    <motion.div
      className="p-6 mb-6 bg-white border-l-4 border-green-500 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">Memberships</h2>
      <p className="text-gray-600">
      served as a member of the media association and as a prefect in 
      school
      </p>
    </motion.div>

    
  </div>
  )
}
