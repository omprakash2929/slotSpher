"use client";
import { useUser } from "@clerk/nextjs";
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BarLoader } from "react-spinners";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/meetings", label: "Meetings", icon: Users },
  { href: "/availability", label: "Availability", icon: Clock },
];
const AppLayout = ({ children }) => {
  const { isLoaded } = useUser();
  const pathname= usePathname();
  return (
    <>
      {!isLoaded && <BarLoader width={"100%"} color="#36d7b7" />}
      <div className="flex flex-col h-auto md:flex-row">
        <aside className="hidden md:block w-64 bg-white">
          <div className="h-screen mt-8">
            <div className="my-4 flex h-5/6 w-72 flex-col rounded-tr-2xl rounded-br-2xl bg-gray-200">
              <ul className="mt-12 flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href} className="relative transition">
                    <Link href={item.href} className={`relative m-2 flex cursor-pointer items-center rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-gray-50 
                      ${pathname === item.href ? "bg-blue-100" : ""}
                      `}>
                      
                        <span className="mr-5 flex w-5 text-gray-500">
                          
                       <item.icon  />
                        </span>
                        {item.label}
                    
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto p-4 md:p-12">  
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-5xl Heading-title   md:text-6xl pt-2 md:pt-0 text-center md:text-left w-full"> 
            {navItems.find((item) => item.href === pathname).label || "Dashboard"}
          </h2>
        </header>
        {children}
      </main>
      
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md border-y-2">
      <ul className="flex justify-around">
                {navItems.map((item) => (
                  <li key={item.href} className="relative transition">
                    <Link href={item.href} className={`flex flex-col items-center py-2 px-4${pathname === item.href ? "text-blue-600" : "text-gray-500"}
                      `}>
                      
                        <span className="mr-5 flex w-5 text-gray-500">
                          
                       <item.icon  />
                        </span>
                        {item.label}
                    
                    </Link>
                  </li>
                ))}
              </ul>
      </nav>
      </div>
      
    </>
  );
};

export default AppLayout;
