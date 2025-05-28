"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Phone, MessageSquare, ShoppingCart, Calendar } from "lucide-react"
import { useState } from "react"

const demoScenarios = [
  {
    title: "Customer Support",
    description: "AI agent handling product inquiries and troubleshooting with empathy",
    duration: "2:34",
    icon: Phone,
    category: "Support",
  },
  {
    title: "E-commerce Assistant",
    description: "Helping customers with product recommendations and order management",
    duration: "1:45",
    icon: ShoppingCart,
    category: "Sales",
  },
  {
    title: "Appointment Booking",
    description: "Scheduling and managing appointments with real-time availability",
    duration: "3:12",
    icon: Calendar,
    category: "Scheduling",
  },
  {
    title: "Lead Qualification",
    description: "Qualifying prospects and gathering information for sales teams",
    duration: "2:58",
    icon: MessageSquare,
    category: "Sales",
  },
]

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const ActiveIcon = demoScenarios[activeDemo].icon

  return (
    <section id="demo" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-2xl shadow-neumorphic-inset bg-zinc-900 text-zinc-400">
            Sample Voice Demos
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-200">
            Listen to AI agents in
            <span className="block text-orange-500">
              real conversations
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Experience how our AI voice agents handle different business scenarios with natural, human-like interactions
            across various industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Audio Player */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-3xl shadow-neumorphic bg-zinc-900">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl shadow-neumorphic bg-zinc-900 flex items-center justify-center">
                      {ActiveIcon && <ActiveIcon className="w-6 h-6 text-orange-500" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-200">{demoScenarios[activeDemo].title}</h3>
                      <p className="text-zinc-400">{demoScenarios[activeDemo].category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-zinc-400">
                    <Volume2 className="w-4 h-4" />
                    <span>{demoScenarios[activeDemo].duration}</span>
                  </div>
                </div>

                <p className="text-zinc-400">{demoScenarios[activeDemo].description}</p>

                {/* Audio Visualizer */}
                <div className="flex items-center justify-center py-8">
                  <div className="flex space-x-2">
                    {[...Array(24)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-orange-500 rounded-full"
                        animate={isPlaying ? {
                          height: [10, Math.random() * 60 + 20, 10],
                        } : { height: 10 }}
                        transition={{
                          duration: 0.5,
                          repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                          delay: i * 0.05,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center space-x-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-zinc-900 text-orange-500 shadow-neumorphic hover:shadow-neumorphic-hover border-0 rounded-full w-16 h-16"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </Button>
                  </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full h-2 rounded-full shadow-neumorphic-inset bg-zinc-900">
                    <motion.div
                      className="h-2 rounded-full bg-orange-500"
                      animate={{ width: isPlaying ? "45%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>0:00</span>
                    <span>{demoScenarios[activeDemo].duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Demo Scenarios */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {demoScenarios.map((scenario, index) => {
              const Icon = scenario.icon
              const isActive = activeDemo === index
              return (
                <motion.div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 p-6 rounded-3xl ${
                    isActive
                      ? "shadow-neumorphic-inset bg-zinc-900 border-2 border-orange-500/20"
                      : "shadow-neumorphic bg-zinc-900 hover:shadow-neumorphic-hover"
                  }`}
                  onClick={() => setActiveDemo(index)}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isActive ? "shadow-neumorphic-inset bg-zinc-900" : "shadow-neumorphic bg-zinc-900"
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? "text-orange-500" : "text-zinc-400"}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`text-lg font-semibold ${isActive ? "text-orange-500" : "text-zinc-200"}`}>
                          {scenario.title}
                        </h3>
                        <span className="px-3 py-1 rounded-xl shadow-neumorphic-inset bg-zinc-900 text-zinc-400 text-xs">
                          {scenario.category}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm">{scenario.description}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-zinc-400">
                      <Play className="w-4 h-4" />
                      <span>{scenario.duration}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}