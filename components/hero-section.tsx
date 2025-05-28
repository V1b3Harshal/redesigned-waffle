"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Phone, ArrowRight, Users, Clock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const AI_MODELS = [
  {
    name: "Lilly",
    role: "Business Development",
    description: "Screens candidates for Inside Sales Intern roles via eligibility...",
    phone: "+18722412481",
    language: "EN",
  },
  {
    name: "Manesh",
    role: "Deep Tech Interviewer",
    description: "Screens React Native developers for remote roles by assessing...",
    phone: "+918035738176",
    language: "EN",
  },
  {
    name: "Monica",
    role: "Exam Invigilator",
    description: "Screens candidates for exam invigilator roles using Hinglish,...",
    phone: "+918035738343",
    language: "HI",
  },
  {
    name: "Priya",
    role: "Fluency Test",
    description: "Screens candidates for telecalling roles using experience-based...",
    phone: "+918035738175",
    language: "EN",
  },
  {
    name: "Radhika",
    role: "Health Care Nurse",
    description: "Screens travel nurses by collecting key details on location,...",
    phone: "+918035737873",
    language: "EN",
  },
  {
    name: "Rahul",
    role: "Lead Qualification",
    description: "Qualifies HR-tech leads by adapting to English or Hindi,...",
    phone: "+918035738344",
    language: "EN",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % (AI_MODELS.length - 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + AI_MODELS.length) % (AI_MODELS.length - 1))
  }

  const handleCallClick = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`)
  }

  return (
    <section className="pt-24 pb-20 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center px-6 py-3 rounded-2xl shadow-neumorphic-inset bg-zinc-900 text-zinc-400"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
                Next-Generation AI Voice Technology
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-200 leading-tight">
                Transform Your
                <span className="block text-orange-500">Customer Service</span>
                with AI Agents
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                Replace traditional call centers with intelligent AI voice agents that handle customer inquiries,
                bookings, and support with human-like conversations 24/7.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "<200ms", label: "Response Time" },
                { value: "50+", label: "Languages" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-2xl shadow-neumorphic bg-zinc-900"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-zinc-200">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-zinc-900 text-orange-500 shadow-neumorphic hover:shadow-neumorphic-hover border-0 px-8 py-4 rounded-2xl text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Signup
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-zinc-900 text-zinc-400 shadow-neumorphic-inset border-0 px-8 py-4 rounded-2xl text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-zinc-400">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                10,000+ businesses
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Setup in 5 minutes
              </div>
            </div>
          </motion.div>

          {/* Right Content - AI Models Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 rounded-3xl shadow-neumorphic bg-zinc-900">
              <div className="space-y-6">
                {/* Demo Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl shadow-neumorphic bg-zinc-900 flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-200">Available AI Agents</div>
                      <div className="text-sm text-zinc-400">Try Demo Calls with these AI Agents</div>
                    </div>
                  </div>
                </div>

                {/* Models Display */}
                <div className="relative overflow-hidden min-h-[400px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-transform duration-300">
                    {AI_MODELS.slice(currentSlide, currentSlide + 2).map((model, index) => (
                      <motion.div
                        key={model.name}
                        className="p-6 rounded-2xl shadow-neumorphic-inset bg-zinc-900 border border-zinc-800 space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 rounded-xl shadow-neumorphic bg-zinc-900 flex items-center justify-center text-orange-500 font-bold text-xl">
                            {model.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-zinc-200">{model.name}</h3>
                            <div className="text-sm text-orange-500">{model.role}</div>
                          </div>
                        </div>
                        <p className="text-zinc-400 text-sm">{model.description}</p>
                        <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-zinc-400" />
                            <span className="text-sm text-zinc-300">{model.phone}</span>
                          </div>
                          <div className="px-3 py-1 rounded-full text-xs shadow-neumorphic-inset bg-zinc-900 text-zinc-300">
                            {model.language}
                          </div>
                        </div>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                          <Button
                            onClick={() => handleCallClick(model.phone)}
                            className="w-full mt-4 bg-zinc-900 text-orange-500 shadow-neumorphic hover:shadow-neumorphic-hover border-0 py-3 rounded-xl"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call {model.name}
                          </Button>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Slider Controls */}
                  {AI_MODELS.length > 2 && (
                    <div className="flex justify-center mt-6 space-x-4">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-xl shadow-neumorphic bg-zinc-900 text-zinc-400 hover:text-orange-500"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: Math.ceil(AI_MODELS.length / 2) }).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentSlide(i * 2)}
                            className={`w-2 h-2 rounded-full ${currentSlide / 2 === i ? 'bg-orange-500' : 'bg-zinc-600'}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={nextSlide}
                        className="p-2 rounded-xl shadow-neumorphic bg-zinc-900 text-zinc-400 hover:text-orange-500"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 p-3 rounded-2xl shadow-neumorphic bg-zinc-900"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="text-xs text-zinc-400">Active Agents</div>
              <div className="text-lg font-bold text-green-400">{AI_MODELS.length}</div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 p-3 rounded-2xl shadow-neumorphic bg-zinc-900"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            >
              <div className="text-xs text-zinc-400">Languages</div>
              <div className="text-lg font-bold text-orange-500">5+</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}