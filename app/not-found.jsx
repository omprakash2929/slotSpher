"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, CloudOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4 text-center">
      <div
        className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-primary/10 animate-pulse-slow" />
          </div>
          <CloudOff className="relative z-10 h-24 w-24 mx-auto text-primary animate-float" />
        </div>

        <h1 className="mb-2 text-9xl font-extrabold tracking-tight text-primary animate-float">
          <span className="inline-block animate-float-delay-1">4</span>
          <span className="inline-block animate-float-delay-2">0</span>
          <span className="inline-block animate-float-delay-3">4</span>
        </h1>

        <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl animate-fade-in">Page not found</h2>

        <p className="mb-8 max-w-md mx-auto text-muted-foreground animate-fade-in-delay">
          Oops! The page you&apos;re looking for seems to have wandered off into the digital wilderness.
        </p>

        <Button asChild className="animate-pulse-slow">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-primary/5 animate-float-slow" />
        <div className="absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-primary/5 animate-float-delay-2" />
        <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-primary/5 animate-float-delay-3" />
      </div>
    </div>
  )
}
