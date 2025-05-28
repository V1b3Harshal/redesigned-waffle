"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    company: "TechFlow Solutions",
    industry: "SaaS",
    logo: "/placeholder.svg?height=40&width=120",
    challenge: "Overwhelmed support team handling 500+ daily inquiries",
    solution: "Deployed AI agents for tier-1 support and appointment scheduling",
    results: [
      { metric: "75%", label: "Reduction in response time" },
      { metric: "60%", label: "Decrease in support costs" },
      { metric: "94%", label: "Customer satisfaction score" },
    ],
    quote: "Sampark AI transformed our customer service. We now handle 3x more inquiries with the same team size.",
    author: "Sarah Chen, Head of Customer Success",
  },
  {
    company: "MedCare Clinics",
    industry: "Healthcare",
    logo: "/placeholder.svg?height=40&width=120",
    challenge: "Manual appointment booking causing long wait times",
    solution: "Implemented AI-powered appointment scheduling and patient support",
    results: [
      { metric: "85%", label: "Reduction in booking time" },
      { metric: "40%", label: "Increase in appointment bookings" },
      { metric: "98%", label: "Booking accuracy rate" },
    ],
    quote: "Our patients love the 24/7 booking system. No more phone tag or missed appointments.",
    author: "Dr. Michael Rodriguez, Practice Manager",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Real businesses,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              real results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies across industries are using Sampark AI to transform their customer service and drive
            business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <img src={study.logo || "/placeholder.svg"} alt={study.company} className="h-8 object-contain" />
                    <div className="text-sm text-gray-500">{study.industry}</div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">Success Story</div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-emerald-500">
                  <p className="text-gray-700 italic mb-2">"{study.quote}"</p>
                  <div className="text-sm text-gray-600">— {study.author}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
            View More Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
