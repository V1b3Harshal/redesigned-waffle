"use client"

import { motion } from "framer-motion"
import { MessageCircle, Smartphone, Bot, Zap } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Broadcast",
    description:
      "Send automated messages and handle customer inquiries through WhatsApp Business API with intelligent routing and response management.",
    stats: "10M+ messages sent",
  },
  {
    icon: Smartphone,
    title: "Automated Apps",
    description:
      "Deploy AI-powered mobile and web applications that handle customer interactions, bookings, and support without human intervention.",
    stats: "99.9% uptime",
  },
  {
    icon: Bot,
    title: "Voice AI Agents",
    description:
      "Human-like voice agents that understand context, emotions, and intent to provide natural conversational experiences across all channels.",
    stats: "<200ms response",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description:
      "Comprehensive dashboards with live metrics, conversation insights, customer satisfaction scores, and performance analytics.",
    stats: "Real-time insights",
  },
]

export function FeaturesSection() {
  const [activeCards, setActiveCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    const newActive = new Set(activeCards)
    if (newActive.has(index)) {
      newActive.delete(index)
    } else {
      newActive.add(index)
    }
    setActiveCards(newActive)
  }

  return (
    <section id="features" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-2xl shadow-neumorphic-inset bg-zinc-900 text-zinc-400">
            Core Features
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-200">
            Everything you need to
            <span className="block text-orange-500">automate customer service</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Our comprehensive AI platform provides all the tools you need to transform your customer interactions and
            scale your business operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isActive = activeCards.has(index)

            return (
              <motion.div
                key={index}
                onClick={() => toggleCard(index)}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative p-8 rounded-3xl transition-all duration-300 ease-out cursor-pointer
                  ${
                    isActive
                      ? "shadow-neumorphic-inset bg-zinc-900 border-2 border-orange-500/20"
                      : "shadow-neumorphic bg-zinc-900 hover:shadow-neumorphic-hover"
                  }
                  flex flex-col group
                `}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 0.95 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "shadow-neumorphic-inset bg-zinc-900 text-orange-500"
                          : "shadow-neumorphic bg-zinc-900 text-zinc-400 group-hover:text-orange-500"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zinc-400">Performance</div>
                      <div className={`text-lg font-bold ${isActive ? "text-orange-500" : "text-zinc-200"}`}>
                        {feature.stats}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        isActive ? "text-orange-500" : "text-zinc-200 group-hover:text-orange-500"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-zinc-300" : "text-zinc-400 group-hover:text-zinc-300"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-3xl bg-orange-500/5 pointer-events-none"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
