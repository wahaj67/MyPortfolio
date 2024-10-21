'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const technologies = [
  { name: 'HTML', logo: '/htmllogo.png' },
  { name: 'Tailwind CSS', logo: '/tailwindcss.png' },
  { name: 'TypeScript', logo: '/Typescript_logo_2020.svg.png' },
  { name: 'Next.js', logo: '/lg-6623b7522c224-Nextjs.webp' },
  { name: 'Redux Toolkit', logo: '/reduxtoolkit.png' },
  { name: 'React', logo: '/react logo.png' },
  { name: 'JavaScript', logo: '/javascript logo.png' },
  { name: 'Node.js', logo: '/download (5).png' },
]

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-purple-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-8 mt-5 text-center hover:text-purple-300 transition-colors duration-300"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 text-lg text-center"
        >
          <p className="bg-black bg-opacity-50 p-6 rounded-lg hover:scale-105 z-10 shadow-lg">
            I am currently enrolled in the Certified AI, Metaverse, and Web 3.0 Developer & Solopreneur (WMD) course, 
            expanding my knowledge in cutting-edge technologies. Additionally, I work as a frontend developer at a software house, 
            applying my skills to create modern and efficient web applications.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mb-6 text-center hover:text-purple-300 transition-colors duration-300"
        >
          My Skills
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 relative mb-4 bg-gradient-to-b from-white to-gray-200 rounded-xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={80}
                    height={80}
                    objectFit="contain"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <span className="text-sm font-medium mt-2 bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage