import type { Metadata } from "next";
import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MockCrack",
  description: "Help you ace your competetive exams by levraging your time and help you improve ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
