import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew Wagner - Front End Engineer",
  description: "Portfolio website for Matthew Wagner, a Front End Engineer specializing in JavaScript, React, and modern web technologies.",
  keywords: ["Matthew Wagner", "Front End Engineer", "Web Developer", "JavaScript", "React", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Patua+One&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-white text-dark-gray">
        {children}
      </body>
    </html>
  );
}
