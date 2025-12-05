import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Load Your Local Brown Sugar Font
// Ensure the filename matches EXACTLY what you pasted in the folder
const brownSugar = localFont({
  src: "./fonts/BrownSugar.ttf",
  variable: "--font-brown-sugar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rokunda Mboyi | Architecture Portfolio",
  description: "Architecture portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // 3. Add the font variables here so Tailwind can see them
        className={`${geistSans.variable} ${geistMono.variable} ${brownSugar.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
