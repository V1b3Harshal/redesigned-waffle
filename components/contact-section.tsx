"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: Mail, label: "Email", value: "hello@samparkai.com" },
    { icon: MapPin, label: "Address", value: "123 AI Street, Tech City, TC 12345" },
    { icon: Clock, label: "Business Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM PST" },
  ]

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-2xl shadow-neumorphic-inset bg-zinc-900 text-zinc-400">
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-200">
            Ready to get
            <span className="block text-orange-500">started?</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Contact our team to learn how Sampark AI can transform your customer service operations. We're here to help
            you get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-3xl shadow-neumorphic bg-zinc-900">
              <h3 className="text-2xl font-bold text-zinc-200 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zinc-900 border-0 shadow-neumorphic-inset text-zinc-200 placeholder-zinc-500 rounded-xl"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zinc-900 border-0 shadow-neumorphic-inset text-zinc-200 placeholder-zinc-500 rounded-xl"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-zinc-900 border-0 shadow-neumorphic-inset text-zinc-200 placeholder-zinc-500 rounded-xl"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zinc-900 border-0 shadow-neumorphic-inset text-zinc-200 placeholder-zinc-500 rounded-xl min-h-[120px]"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-zinc-900 text-orange-500 shadow-neumorphic hover:shadow-neumorphic-hover border-0 rounded-xl py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="p-8 rounded-3xl shadow-neumorphic bg-zinc-900">
              <h3 className="text-2xl font-bold text-zinc-200 mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 rounded-2xl shadow-neumorphic bg-zinc-900 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <div className="text-zinc-200 font-medium">{info.label}</div>
                        <div className="text-zinc-400">{info.value}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-8 rounded-3xl shadow-neumorphic bg-zinc-900 border border-orange-500/20">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-zinc-200">Need immediate assistance?</h3>
                <p className="text-zinc-400">Schedule a live demo or speak with our team right now.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button className="w-full bg-zinc-900 text-orange-500 shadow-neumorphic hover:shadow-neumorphic-hover border-0 rounded-xl">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Demo
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full bg-zinc-900 text-zinc-400 shadow-neumorphic-inset border-0 rounded-xl"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Sales
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
