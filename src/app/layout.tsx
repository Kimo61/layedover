import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layedover | The Real Bali, Between Flights",
  description: "Tailored layovers, multi-day journeys, and reality-checked assistance in Bali.",
};

// 👇 This forces mobile browsers to render the site at desktop width
export const viewport: Viewport = {
  width: 1200, 
  initialScale: 0.3, 
  maximumScale: 3, 
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#171527] overflow-x-auto">
        {/* We wrap the entire site in a 1200px minimum width so it physically cannot stack for mobile */}
        <div className="min-w-[1200px] w-full flex flex-col flex-grow">
          <Navbar />
          
          <div className="pt-24 flex-grow"> 
            {children}
          </div>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}