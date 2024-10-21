'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

const texts = [
  "Currently learning AI, Metaverse, and Web 3.0",
  "Frontend Developer and UI/UX Designer",
  "Specialized in Next.js, TailwindCSS, & TypeScript",
  "Solopreneur (WMD) with Cutting-edge Skills",
  "Building Modern User-centric Web Applications",
]

export default function HomePage() {
  const [textIndex, setTextIndex] = useState(0)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 5000)

    const imageTimeout = setTimeout(() => {
      setShowImage(true)
    }, 2000)

    return () => {
      clearInterval(textInterval)
      clearTimeout(imageTimeout)
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-black via-purple-800 to-gray-900 pt-16 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-left animate-fade-in p-4 lg:pr-8">
          <h1 className="text-white  text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-700 ease-in-out mb-4">
            Hi IM Wahaj Ali
          </h1>
          <p
            className="text-white text-base sm:text-lg lg:text-xl mt-4 transition-opacity duration-700 ease-in-out"
            key={textIndex}
          >
            {texts[textIndex]}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-sm sm:text-base bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition-transform hover:scale-110 duration-300 ease-in-out text-white font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className={`w-full lg:w-1/2 mt-8 lg:mt-0 transition-opacity duration-1000 ${showImage ? "opacity-100" : "opacity-0"}`}>
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/download (1).jfif"
              alt="Wahaj Ali Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg bg-purple-700 p-2 hover:scale-110 transition-transform duration-1000 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 space-x-6 z-10">
        <SocialLink href="https://www.linkedin.com/in/wahaj-ali-b3b7a72b5" icon={<FaLinkedin className="h-6 w-6" />} label="LinkedIn" />
        <SocialLink href="https://github.com/wahaj67" icon={<FaGithub className="h-6 w-6" />} label="GitHub" />
        <SocialLink href="https://" icon={<FaTwitter className="h-6 w-6" />} label="Twitter" />
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </main>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-purple-300 hover:scale-110 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}