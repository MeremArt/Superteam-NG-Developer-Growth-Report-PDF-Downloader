import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperteamNG SW Developer Growth Report – Q1 2025",
  description: "Build tomorrow,today.",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1744027228/1_1_ewkhor.png",
        width: 1200,
        height: 630,
        alt: "Build tomorrow today",
      },
    ],
  },
  twitter: {
    title: "SuperteamNG SW Developer Growth Report – Q1 2025",
    description: "Build tomorrow,today.",
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1744027228/1_1_ewkhor.png",
        alt: "Build tomorrow, today",
      },
    ],
    creator: "Ugo Chinemerem Franklin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
