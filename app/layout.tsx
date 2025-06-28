import type { Metadata } from "next";
import { Secular_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const SecularOne = Secular_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zewd-Solutions",
  description: "Zewd-Solutions, software and AI solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${SecularOne.className}`}
      >
         <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
