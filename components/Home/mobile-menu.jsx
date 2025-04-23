"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PenBox, Menu, X } from "lucide-react"
import { SignedOut, SignInButton } from "@clerk/nextjs"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden relative z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
      </button>

      {/* Overlay (optional for dark background) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`
        bg-white border border-gray-200 shadow-lg rounded-lg py-6  fixed top-[61px] left-0 right-0 px-4 transition-all duration-300 ease-in-out z-50
          ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"}
        `}
      >
        <div className=" ">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 hover:bg-slate-50 py-2 text-center font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 py-2 text-center font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 py-2 text-center font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-gray-900 py-2 text-center font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>

            <div className="pt-2 flex justify-center">
              <Link href="/events?create=true" onClick={() => setIsOpen(false)}>
                <Button className="w-auto bg-gray-900 text-white flex items-center justify-center space-x-2 py-6 p-4">
                  <PenBox size={18} />
                  <span>Create Event</span>
                </Button>
              </Link>
            </div>

            <div className="flex justify-center pt-2">
              <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard">
                  <Button variant="outline" className="w-full py-6">
                    Log in
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
