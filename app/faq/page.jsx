"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Get started for free' button on our homepage. You can sign up using your Google account, Microsoft account, or email address. Follow the prompts to complete your profile setup.",
        },
        {
          question: "Is there a free plan available?",
          answer:
            "Yes, we offer a Basic plan that is completely free and includes essential scheduling features. You can use this plan for as long as you want with no time limit.",
        },
        {
          question: "How do I set up my first event type?",
          answer:
            "After signing in, go to the 'Event Types' section and click 'Create New Event Type'. You'll be able to set the event name, duration, location (virtual or physical), and availability. You can also customize the booking form and add buffer times.",
        },
        {
          question: "Can I import my existing calendar?",
          answer:
            "Yes, Schedulr integrates with Google Calendar, Microsoft Outlook, Apple Calendar, and other popular calendar services. During setup, you'll be prompted to connect your calendars to avoid double-bookings.",
        },
      ],
    },
    {
      title: "Account & Settings",
      questions: [
        {
          question: "How do I change my time zone?",
          answer:
            "Go to 'Settings' > 'General' and select your time zone from the dropdown menu. Schedulr will automatically adjust all your event times to match your selected time zone.",
        },
        {
          question: "Can I customize my booking page?",
          answer:
            "Yes, on the Professional and Teams plans, you can customize your booking page with your logo, brand colors, and custom text. Go to 'Settings' > 'Branding' to make these changes.",
        },
        {
          question: "How do I add team members?",
          answer:
            "On the Teams plan, go to 'Settings' > 'Team' and click 'Invite Team Member'. Enter their email address and select their role. They'll receive an invitation to join your team.",
        },
        {
          question: "How do I cancel my subscription?",
          answer:
            "Go to 'Settings' > 'Billing' and click 'Cancel Subscription'. You can continue using your current plan until the end of your billing period. After that, your account will be downgraded to the Basic plan.",
        },
      ],
    },
    {
      title: "Features & Functionality",
      questions: [
        {
          question: "What is round-robin scheduling?",
          answer:
            "Round-robin scheduling automatically distributes meetings among team members based on availability and workload. This feature is available on the Teams plan and helps ensure balanced distribution of meetings.",
        },
        {
          question: "Can I set buffer times between meetings?",
          answer:
            "Yes, you can set buffer times before and/or after your meetings. Go to your event type settings and adjust the 'Buffer Time' options to add breathing room between appointments.",
        },
        {
          question: "How do I set up recurring meetings?",
          answer:
            "When creating or editing an event type, enable the 'Recurring Meeting' option. You can then set the frequency (daily, weekly, monthly) and other parameters for your recurring meetings.",
        },
        {
          question: "Can invitees reschedule or cancel meetings?",
          answer:
            "Yes, invitees receive confirmation emails with links to reschedule or cancel. You can customize these options in your event type settings under 'Cancellation Policy'.",
        },
      ],
    },
    {
      title: "Billing & Pricing",
      questions: [
        {
          question: "How does billing work?",
          answer:
            "We offer monthly and annual billing options. Annual billing comes with a 20% discount. You can choose your preferred billing cycle when signing up or change it later in your billing settings.",
        },
        {
          question: "Can I change plans at any time?",
          answer:
            "Yes, you can upgrade, downgrade, or cancel your plan at any time from 'Settings' > 'Billing'. When upgrading, you'll be charged the prorated difference. When downgrading, your new plan will take effect at the end of your current billing cycle.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for annual subscriptions. Monthly subscriptions can be canceled at any time, but we don't provide partial refunds for unused time.",
        },
        {
          question: "Is there special pricing for nonprofits or educational institutions?",
          answer:
            "Yes, we offer discounted rates for verified nonprofit organizations and educational institutions. Please contact our sales team for more information about our discount programs.",
        },
      ],
    },
  ]

  // Filter questions based on search query
  const filteredCategories = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-white to-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mb-8">
                Find answers to common questions about Schedulr. Can't find what you're looking for?
              </p>
              <Button asChild className="mb-8">
                <Link href="/contact">Contact Support</Link>
              </Button>

              <div className="relative w-full max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search for answers..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div key={index} className="mb-12 last:mb-0 max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`} className="border rounded-lg px-6">
                        <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-slate-600 pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-slate-600 mb-6">
                  We couldn't find any FAQs matching your search. Try different keywords or browse all categories.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Our support team is ready to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#">Browse Help Center</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}
