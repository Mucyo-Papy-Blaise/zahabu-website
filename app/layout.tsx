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
    <html lang="en" className="h-full min-w-0 max-w-full overflow-x-clip antialiased">
      <body
        className="relative flex min-h-full min-w-0 max-w-full flex-col overflow-x-clip"
        style={{ fontFamily: "'Chillax', sans-serif" }}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}