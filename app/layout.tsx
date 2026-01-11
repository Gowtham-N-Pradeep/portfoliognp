import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gowtham N Pradeep | BCA Student & Cybersecurity Enthusiast",
  description: "Portfolio of Gowtham N Pradeep - Motivated BCA student passionate about computer applications, cybersecurity, and emerging technologies.",
  keywords: ["portfolio", "developer", "cybersecurity", "full-stack", "web development"],
  authors: [{ name: "Gowtham N Pradeep" }],
  openGraph: {
    title: "Portfolio | Full-Stack Developer & Cybersecurity Enthusiast",
    description: "Personal portfolio website showcasing projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
