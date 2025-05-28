"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const integrations = [
  { name: "Salesforce", logo: "/placeholder.svg?height=40&width=120" },
  { name: "HubSpot", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Zendesk", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Slack", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Microsoft Teams", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Zoom", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Shopify", logo: "/placeholder.svg?height=40&width=120" },
  { name: "WordPress", logo: "/placeholder.svg?height=40&width=120" },
]

const benefits = [
  "Sync customer data across all platforms",
  "Automated workflow triggers",
  "Real-time data synchronization",
  "Custom API endpoints available",
]

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                Integrations
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Seamlessly integrate with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  your existing tools
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Connect Sampark AI with your favorite business tools and platforms. Our robust API ecosystem ensures
                smooth data flow and enhanced productivity.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
              View All Integrations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Content - Integration Grid */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Integrations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <img
                        src={integration.logo || "/placeholder.svg"}
                        alt={integration.name}
                        className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Custom Integration Needed?</h3>
                <p className="text-emerald-100 mb-4">
                  Our team can build custom integrations for your specific business needs.
                </p>
                <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contact Our Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
