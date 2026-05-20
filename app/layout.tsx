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
  title: "Pritam Nagar | Data Analyst & Business Analyst Portfolio",

  description:
    "Portfolio of Pritam Nagar showcasing Data Analysis, Business Analysis, SQL, Python, Power BI, Excel Dashboards and Web Development Projects.",

  keywords: [
    "Pritam Nagar",
    "Pritam9952",
    "Pritam Nagar Manit Bhopal",
    "Data Analyst",
    "Business Analyst",
    "Portfolio",
    "Data Analyst Portfolio",
    "Business Analyst Portfolio",
    "Python Developer",
    "SQL Developer",
    "Power BI",
    "Excel Dashboard",
    "React Portfolio",
    "Next.js Portfolio",
    "Machine Learning Projects",
    "Data Visualization",
    "GitHub Portfolio",
    "Web Developer",
  ],

  authors: [{ name: "Pritam Nagar" }],

  creator: "Pritam Nagar",

  openGraph: {
    title: "Pritam Nagar Portfolio",
    description:
      "Portfolio showcasing Data Analysis, SQL, Python, Power BI and Business Analyst Projects.",
    url: "https://pritam-portfolio-theta.vercel.app",
    siteName: "Pritam Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}