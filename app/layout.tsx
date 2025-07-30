import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Rethink_Sans, Lato } from "next/font/google";
import { RootLayoutProps } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  display: "swap"
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arpan-saha.com"),
  title: "Arpan Saha | Fullstack Developer",
  description: "Arpan Saha&#39;s personal portfolio website."
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head> 
        <meta name="keywords" content="Arpan Saha, Arpan, arpan, arpan saha, portfolio, web developer, Machine learning Engineer, ElevateTech, elevatetech" />
        <meta name="author" content="Arpan Saha" />
      </head>

      <body className={`${rethinkSans.variable} ${lato.variable} antialiased min-h-screen flex flex-col`}> {/* Using flexbox to ensure the footer stays at the bottom */}
        <Navbar />
        {children}
        <Footer />
        <Analytics /> {/* Vercel Analytics for tracking user interactions */}
        <SpeedInsights/> {/* Vercel Speed Insights for performance monitoring */}
      </body>
    </html>
  );
}
