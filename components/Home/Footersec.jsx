import Link from 'next/link'
import React from 'react'

const Footersec = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="text-2xl font-bold mb-4">SlotSphere</div>
              <p className="text-slate-400 mb-4">The modern way to schedule meetings.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-slate-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Developers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-slate-400 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>© {new Date().getFullYear()} SlotSphere. All rights reserved.</div>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
                <Link href="#" className="hover:text-white">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-white">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Footersec