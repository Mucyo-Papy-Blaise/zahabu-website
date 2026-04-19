import type { Metadata } from "next";
import "./globals.css";

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
        className="min-h-full flex flex-col"
        style={{ fontFamily: "'Chillax', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}