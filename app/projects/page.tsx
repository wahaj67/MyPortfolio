'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Project {
  title: string
  image: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "Calculator",
    image: "/calculator ki .png",
    description: "A simple calculator built with Next.js, Tailwind CSS, TypeScript, and shadcn/ui. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division.",
    link: "https://nextjs-calculator-eight.vercel.app/"
  },
  {
    title: "HR Xpert",
    image: "/hrecpeett.png",
    description: "HR Xpert is a smart HR management platform built with Next.js, Tailwind CSS, and TypeScript. It streamlines recruitment, automates HR tasks, and provides tools for employee management, real-time analytics, and self-service.",
    link: "https://hr-xpert-zeta.vercel.app/"
  },
  {
    title: "Weather Widget",
    image: "/weather-widget.png",
    description: "A weather widget built using Next.js and Tailwind CSS, which displays current weather conditions, including temperature, humidity, and wind speed.",
    link: "https://weather-widget-tawny.vercel.app/"
  },
  {
    title: "BMI Calculator",
    image: "/bmi calculator.png",
    description: "A BMI calculator built using Next.js, Tailwind CSS, and TypeScript, which allows users to calculate their BMI and monitor their progress over time.",
    link: "https://wahajali-bmi-calculator.vercel.app/"
  },
  {
    title: "Countdown Timer",
    image: "/countdown timer .png",
    description: "A countdown timer built using Next.js, Tailwind CSS, and TypeScript, which displays the remaining time until a specified time set.",
    link: "https://count-down-timer-nu.vercel.app/"
  },
  {
    title: "Digital Clock",
    image: "/digital clock ki .png",
    description: "A digital clock built using Next.js, Tailwind CSS, and TypeScript, which displays the current time.",
    link: "https://nextjs-digital-clock.vercel.app/"
  },
  {
    title: "Random Joke Generator",
    image: "/random joke.png",
    description: "A random joke generator built using Next.js, Tailwind CSS, and TypeScript, which generates and displays random jokes.",
    link: "https://nextjs-random-joke-generate.vercel.app/"
  },
  {
    title: "Number Guessing Game",
    image: "/number guessing game.png",
    description: "A number guessing game built using Next.js, Tailwind CSS, and TypeScript, which allows players to guess a random number.",
    link: "https://number-guseing-game.vercel.app/"
  },
  {
    title: "Password Generator",
    image: "/pasword generator.png",
    description: "A password generator built using Next.js, Tailwind CSS, and TypeScript, which generates and displays random passwords.",
    link: "https://nextjs-password-generator-five.vercel.app/"
  },
  {
    title: "Color Picker",
    image: "/colorpicker.png",
    description: "A color picker built using Next.js, Tailwind CSS, and TypeScript, which allows users to pick colors.",
    link: "https://nextjs-color-picker.vercel.app/"
  },
  {
    title: "Pomodoro Timer",
    image: "/pomodoro timer.png",
    description: "A pomodoro timer built using Next.js, Tailwind CSS, and TypeScript, which allows users to focus on tasks for 25 minutes and take breaks for 5 minutes.",
    link: "https://builtwahajali-pomodoro-timer.vercel.app/"
  },
  {
    title: "Expense Tracker",
    image: "/expense.png",
    description: "An expense tracker built using Next.js, Tailwind CSS, and TypeScript, which allows users to track their expenses.",
    link: "https://build-bywahajali-expense-tracker-alpha.vercel.app/"
  },
  {
    title: "Unit Converter",
    image: "/unit convertor.png",
    description: "A unit converter built using Next.js, Tailwind CSS, and TypeScript, which allows users to convert between different units of measurement.",
    link: "https://nextjs-unit-convertor.vercel.app/"
  },
  {
    title: "Tip Calculator",
    image: "/tip calculator.png",
    description: "A tip calculator built using Next.js, Tailwind CSS, and TypeScript, which allows users to calculate their tips.",
    link: "https://nextjs-tip-calculator-tau.vercel.app/"
  }
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gradient-to-b from-violet-700 to-green-500 hover:bg-black hover:text-white border-2 border-black rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
  >
    <div className="p-4 flex flex-col h-full">
      <div className="w-full h-40 relative mb-4">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 flex justify-between items-center">
        {project.title}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors duration-300"
        >
          <ExternalLink size={20} />
        </a>
      </h3>
      <p className="text-sm flex-grow">{project.description}</p>
    </div>
  </motion.div>
)

const ProjectPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-r from-black via-purple-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mt-10 text-white mb-12">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage