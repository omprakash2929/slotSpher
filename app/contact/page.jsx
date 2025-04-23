"use client"


import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = () => {
    e.preventDefault()
    // In a real app, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-white to-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
                Get in <span className="text-primary">touch</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl">
  Have questions about our product, pricing, or need help? We&apos;re here to assist you.
</p>


            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <Card className="border-slate-200">
                {formSubmitted ? (
                  <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px] text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>Send another message</Button>
                  </CardContent>
                ) : (
                  <>
                    <CardHeader>
                      <CardTitle>Send us a message</CardTitle>
                      <CardDescription>
  Fill out the form below and we&apos;ll get back to you within 24 hours.
</CardDescription>

                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium">
                              First name
                            </label>
                            <Input id="first-name" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium">
                              Last name
                            </label>
                            <Input id="last-name" placeholder="Doe" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Select defaultValue="general">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="billing">Billing Question</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="How can we help you?"
                            className="min-h-[120px]"
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Send message
                        </Button>
                      </form>
                    </CardContent>
                  </>
                )}
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact  Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:support@schedulr.com" className="text-slate-600 hover:text-primary">
                          om.prakashchauhan2929@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+1-800-123-4567" className="text-slate-600 hover:text-primary">
                          +91 95102872**
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-slate-600">
                          Ahmedabad,Gujrata
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-slate-600">
                          Monday - Friday: 9am - 5pm PST
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                  <p className="text-slate-600 mb-4">Find quick answers to common questions in our FAQ section.</p>


                  <Button variant="outline" asChild>
                    <Link href="/faq">View FAQ</Link>
                  </Button>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="text-xl font-semibold mb-3">Enterprise Support</h3>
                  <p className="text-slate-600 mb-4">
                    For enterprise-level support and custom solutions, please contact our dedicated enterprise team.
                  </p>
                  <Button variant="secondary">Contact Enterprise Team</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}
