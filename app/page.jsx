import BookingDemo from "@/components/Home/booking-demo";
import CtaSection from "@/components/Home/CtaSection";
import TrustedBy from "@/components/Home/trusted-by";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  LinkIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];



 export default async  function Home() {  
  return (
    <main className="">
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 py-12 md:py-24 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900">
                Effortless <span className="text-primary">scheduling</span> at
                your fingertips
              </h1>
              <p className="text-xl text-slate-600 max-w-[600px]">
                Join over 30 million professionals who streamline their meetings
                with the world's #1 scheduling platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Link href="/dashboard"> 
                <Button className="gap-2 h-12 px-6 cursor-pointer" size="lg">
                  <Calendar className="h-5 w-5" />
                  Get started for free
                </Button>
                </Link>
                <Button variant="outline" className="gap-2 h-12 px-6" size="lg" asChild>
                <Link href="/how-It-works">
                  <Clock className="h-5 w-5" />
                  See how it works
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">
                    No credit card required
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">Free plan available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="relative lg:ml-auto">
              <div className="relative z-10 bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                <BookingDemo />
              </div>
              <div className="absolute -top-10 -right-10 -z-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 -z-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* key features  */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Powerful features to transform your scheduling
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Everything you need to eliminate the back-and-forth emails and
              streamline your calendar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="h-12 px-8">
              Explore all features <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">How it works</h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Three simple steps to transform your scheduling experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create your schedule</h3>
              <p className="text-slate-600">Set your availability preferences and create bookable event types.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Share your booking link</h3>
              <p className="text-slate-600">
                Send your personalized booking link via email or embed it on your website.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get booked</h3>
              <p className="text-slate-600">Invitees select a time and the event is added to everyone's calendars.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-100 to-slate-150">
        <CtaSection/>
      </section>
    </main>
  );
}
