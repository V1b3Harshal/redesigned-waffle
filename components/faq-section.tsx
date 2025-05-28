"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I set up Sampark AI for my business?",
    answer:
      "Most businesses can get started within 24 hours. Our setup process includes voice training, integration configuration, and testing. Our team provides white-glove onboarding to ensure everything works perfectly from day one.",
  },
  {
    question: "What languages does Sampark AI support?",
    answer:
      "We support over 50 languages with native-level fluency, including English, Spanish, French, German, Mandarin, Hindi, Arabic, and many more. Our AI can also detect the caller's language automatically and switch accordingly.",
  },
  {
    question: "How does the AI handle complex customer queries?",
    answer:
      "Our AI is trained to recognize when a query requires human intervention. It can seamlessly transfer calls to human agents while providing them with full context and conversation history. You can also set custom escalation rules based on your business needs.",
  },
  {
    question: "Is my customer data secure with Sampark AI?",
    answer:
      "Absolutely. We use bank-level encryption, are SOC 2 certified, and comply with GDPR, CCPA, and other privacy regulations. All data is encrypted in transit and at rest, and we never store sensitive information like payment details.",
  },
  {
    question: "Can I customize the AI voice to match my brand?",
    answer:
      "Yes! We offer advanced voice cloning technology that can create custom voices that match your brand personality. You can choose from our voice library or create a completely custom voice that sounds like your ideal brand representative.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with 100+ popular business tools including Salesforce, HubSpot, Zendesk, Slack, Microsoft Teams, Shopify, and many more. We also provide robust APIs for custom integrations and can build specific connectors for your unique needs.",
  },
  {
    question: "How accurate is the speech recognition?",
    answer:
      "Our speech recognition accuracy is over 98% in optimal conditions and remains above 95% even in noisy environments. We use advanced noise cancellation and context-aware processing to ensure accurate understanding of customer requests.",
  },
  {
    question: "What happens if the AI can't understand a customer?",
    answer:
      "If the AI encounters difficulty understanding a customer, it will politely ask for clarification or offer alternative ways to help. If the issue persists, it can seamlessly transfer the call to a human agent with full context of the conversation.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, our support team is always here
            to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@samparkai.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Email us at support@samparkai.com
            </a>
            <span className="hidden sm:block text-gray-400">•</span>
            <a href="tel:+1-555-0123" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Call us at +1 (555) 012-3456
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
