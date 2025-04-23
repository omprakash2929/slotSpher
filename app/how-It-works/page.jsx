import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import VideoPlayer from "@/components/video-player"


export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-white to-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Link href="/" className="flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
                See how <span className="text-blue-500">Schedulr</span> works
              </h1>

              <p className="text-xl text-slate-600 mb-10 max-w-2xl">
                Watch our quick video guide to learn how Schedulr can transform your scheduling experience in just a few
                minutes.
              </p>

              <div className="w-full max-w-4xl mx-auto mb-12">
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden aspect-video">
                  <VideoPlayer />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Key benefits explained in the video
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Our video walkthrough covers these essential features and more
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
                    <p className="text-slate-600">
                      Learn how to set up your account and create your first scheduling page in under 2 minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Calendar Integration</h3>
                    <p className="text-slate-600">
                      See how Schedulr seamlessly connects with Google Calendar, Outlook, and other popular calendar
                      apps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customization</h3>
                    <p className="text-slate-600">
                      Discover how to personalize your booking page with your brand colors, logo, and custom questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Team Scheduling</h3>
                    <p className="text-slate-600">
                      Learn how to coordinate meetings across multiple team members with round-robin assignment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automated Reminders</h3>
                    <p className="text-slate-600">
                      See how to set up email and SMS notifications to reduce no-shows and keep everyone informed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                    <p className="text-slate-600">
                      Understand how to track your scheduling performance and optimize your availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Ready to get started?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Join thousands of professionals who are already saving time with Schedulr.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white">
                  Sign up for free
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8">
                  View pricing
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
