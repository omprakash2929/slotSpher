
import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/button";
import { PenBox } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { Usermenu } from "../components/user-menu";
import { checkUser } from "@/lib/checkUser";
import { MobileMenu } from "./Home/mobile-menu";

async function Header() {
  await checkUser();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        {/* Toggle & Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">
            SlotSphere
          </Link>
          <div className="lg:hidden flex items-center gap-3">
          
          <SignedIn>
              <div className="pt-2">
                <Usermenu  />
              </div>
            </SignedIn>
            <MobileMenu />
          </div>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/events?create=true">
              <Button className="bg-gray-900 text-white flex items-center space-x-1">
                <PenBox size={18} />
                <span>Create Event</span>
              </Button>
            </Link>
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline">Log in</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Usermenu />
            </SignedIn>
          </div>
        </div>
          
        {/* Mobile Nav: Peer sibling of checkbox */}
        <div className="peer-checked:block hidden lg:hidden pt-4">
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </Link>

            <Link href="/events?create=true">
              <Button className="w-full bg-gray-900 text-white flex items-center justify-center space-x-1">
                <PenBox size={18} />
                <span>Create Event</span>
              </Button>
            </Link>

            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="pt-2">
                <Usermenu  />
              </div>
            </SignedIn>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
