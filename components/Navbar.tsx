'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Me", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-gradient-to-r from-black via-purple-800 to-gray-900 shadow-md w-full fixed top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png1.png"
              alt="Portfolio logo"
              width={50}
              height={30}
              className="rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h1 className="font-extrabold hover:scale-105 hover:text-purple-300 transition-all duration-300 text-white ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              My Portfolio
            </h1>
          </div>

          <div className="hidden md:flex ml-4 sm:ml-6 md:ml-8 lg:ml-10 items-baseline space-x-2 sm:space-x-3 md:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-md text-sm sm:text-base md:text-lg font-medium ${
                  pathname === item.link
                    ? "text-purple-300 font-extrabold"
                    : "text-white hover:text-purple-300 transition-colors duration-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.link
                  ? "text-purple-300 font-extrabold"
                  : "text-white hover:text-purple-300 transition-colors duration-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}