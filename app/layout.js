import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import Footersec from "@/components/Home/Footersec";
import CreateEventDrawer from "@/components/create-event";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SlotSphere",
  description: "Evokes a global, all-encompassing scheduling solution.",
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen ">
            {children}
          </main>
          <footer className="bg-slate-900 text-slate-200 py-12">
         <Footersec/>
        </footer>
        <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}

