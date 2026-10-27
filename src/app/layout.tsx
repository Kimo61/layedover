import type { Metadata } from "next";
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
      <body className="min-h-full flex flex-col bg-[#171527]">
        
        <Navbar />
        
        {/* We removed the rigid 1200px width so the grid can smoothly adapt to mobile screens */}
        <div className="pt-24 flex-grow w-full flex flex-col"> 
          {children}
        </div>
        
        <Footer />
        
      </body>
    </html>
  );
}