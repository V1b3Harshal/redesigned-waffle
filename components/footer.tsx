"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const footerLinks = {
    product: ["Demo", "Features", "API Docs", "Integrations"],
    support: ["Contact", "Help Center", "Privacy Policy", "Terms of Service"],
  }

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl shadow-neumorphic bg-zinc-900 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Sampark AI Logo" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-zinc-200">Sampark AI</span>
            </div>
            <p className="text-zinc-400 max-w-md">
              Transform your customer service with intelligent AI voice agents that deliver human-like conversations at
              scale.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-3 rounded-xl shadow-neumorphic bg-zinc-900 text-zinc-400 hover:text-orange-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-zinc-200 mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-orange-500 transition-colors p-2 rounded-lg shadow-neumorphic-inset bg-zinc-900 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-zinc-200 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-orange-500 transition-colors p-2 rounded-lg shadow-neumorphic-inset bg-zinc-900 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 text-sm">© 2024 Sampark AI. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-zinc-400">
            <span className="px-3 py-1 rounded-lg shadow-neumorphic-inset bg-zinc-900">🔒 SOC 2 Certified</span>
            <span className="px-3 py-1 rounded-lg shadow-neumorphic-inset bg-zinc-900">🛡️ GDPR Compliant</span>
            <span className="px-3 py-1 rounded-lg shadow-neumorphic-inset bg-zinc-900">⚡ 99.9% Uptime</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}