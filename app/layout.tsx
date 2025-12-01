/* eslint-disable @stylistic/js/object-curly-newline */

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

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "LOFI MUSIC",
  description: "a music app",
  icons: {
    icon: ["/favicon.ico?v=1", "/images/favicon.svg?v=1"],
    shortcut: ["/favicon.ico?v=1", "/images/favicon.svg?v=1"],
    apple: ["/images/icons-64.png?v=1", "/images/icons-180.png?v=1"],
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
