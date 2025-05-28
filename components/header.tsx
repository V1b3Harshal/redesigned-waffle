"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="w-10 h-10 rounded-xl shadow-neumorphic bg-zinc-900 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Sampark AI Logo" 
                width={24} 
                height={24} 
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-zinc-200">Sampark AI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Demo", "Features", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-400 hover:text-orange-500 transition-colors px-4 py-2 rounded-xl shadow-neumorphic-inset bg-zinc-900"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-zinc-900 text-orange-500 shadow-neumorphic hover:shadow-neumorphic-hover border-0 rounded-xl px-6">
                <Phone className="w-4 h-4 mr-2" />
                Try Live Demo
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-zinc-400 p-2 rounded-xl shadow-neumorphic bg-zinc-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-zinc-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col space-y-4">
              {["Demo", "Features", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-400 hover:text-orange-500 p-3 rounded-xl shadow-neumorphic-inset bg-zinc-900"
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-zinc-900 text-orange-500 shadow-neumorphic border-0 rounded-xl mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Try Live Demo
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}