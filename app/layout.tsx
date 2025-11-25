import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

// <CHANGE> Updated font to Inter for professional look
const inter = Inter({ subsets: ["latin"] });

// <CHANGE> Updated metadata for AUGU company
export const metadata: Metadata = {
  title:
    "AUGU Smart Electronic Service Ltd - Professional Tech Solutions in Kigali",
  description:
    "Reliable, Fast, and Professional Tech Solutions. Computer repair, CCTV installation, networking, printer repair, and training in Kigali, Rwanda.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title:
      "AUGU Smart Electronic Service Ltd - Professional Tech Solutions in Kigali",
    description:
      "Reliable, Fast, and Professional Tech Solutions. Computer repair, CCTV installation, networking, printer repair, and training in Kigali, Rwanda.",
    url: 'https://augu-smart-electronics.vercel.app/', // Replace with actual domain
    type: "website",
    images: [
      {
        url: "/professional-technology-repair-team-working-in-mod.jpg", // Use existing high-quality public image
        width: 1200,
        height: 630,
        alt: "AUGU's professional tech repair team working",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <main className="flex items-center flex-col w-full h-full">
          {/* <Header /> */}
          <Navbar />

          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
