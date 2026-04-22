import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PageTransition } from "@/components/motion";

export const metadata: Metadata = {
  title: "ZAHABU | Solutions Ltd",
  description: "The Trusted Source For Independent Auto Appraisal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="relative min-h-full flex flex-col"
        style={{ fontFamily: "'Chillax', sans-serif" }}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}