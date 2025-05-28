"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Ready to transform your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  customer service?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of businesses already using Sampark AI to deliver exceptional customer experiences. Start
                your free trial today and see the difference AI can make.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                White-glove onboarding
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 flex-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 hover:border-emerald-500 hover:text-emerald-600 px-8 py-3 flex-1"
              >
                Schedule Demo
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ businesses worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <img src="/placeholder.svg?height=30&width=100" alt="Company 1" className="h-6" />
                <img src="/placeholder.svg?height=30&width=100" alt="Company 2" className="h-6" />
                <img src="/placeholder.svg?height=30&width=100" alt="Company 3" className="h-6" />
                <img src="/placeholder.svg?height=30&width=100" alt="Company 4" className="h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
