// src/app/layout.tsx

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

// UPDATED: AEO-optimized metadata with "spoiled" answer in description
export const metadata: Metadata = {
  title: "Alp Efe Karalar - Software Engineer & AI/ML Specialist",
  description: "Alp Efe Karalar is a Computer Engineering graduate from Penn State University (December 2024) specializing in AI/ML systems, data pipelines, and full-stack development. Currently building ML platforms and processing 1+ billion job postings as a Research Assistant.",
  keywords: [
    "Alp Efe Karalar",
    "Software Engineer",
    "Machine Learning",
    "AI/ML Specialist",
    "Data Pipelines",
    "Penn State Computer Engineering",
    "Python Developer",
    "React Developer",
    "Full-Stack Developer"
  ],
  authors: [{ name: "Alp Efe Karalar" }],
  creator: "Alp Efe Karalar",
  openGraph: {
    title: "Alp Efe Karalar - Software Engineer & AI/ML Specialist",
    description: "Computer Engineering graduate from Penn State specializing in AI/ML systems, data pipelines, and full-stack development.",
    url: "https://alpkaralar.com",
    siteName: "Alp Karalar Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alp Efe Karalar - Software Engineer & AI/ML Specialist",
    description: "Specializing in AI/ML systems, data pipelines, and full-stack development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ADDED: Schema.org Person markup for AI discoverability */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alp Efe Karalar",
              "alternateName": "Alp Karalar",
              "jobTitle": "Software Engineer and AI/ML Specialist",
              "description": "Computer Engineering graduate from Penn State University specializing in AI/ML systems, large-scale data pipelines, and full-stack development.",
              "url": "https://alpkaralar.com",
              "email": "karalar.alpefe@gmail.com",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Pennsylvania State University",
                "sameAs": "https://www.psu.edu/"
              },
              "knowsAbout": [
                "Machine Learning",
                "Artificial Intelligence",
                "Data Pipelines",
                "Python Programming",
                "React Development",
                "PyTorch",
                "TensorFlow",
                "Full-Stack Development",
                "DevOps",
                "Cloud Computing",
                "Neural Networks"
              ],
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "Research Assistant",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "Pennsylvania State University"
                  },
                  "skills": "Python, Data Pipelines, Entity Resolution, Large-Scale Data Processing, Pattern Extraction"
                },
                {
                  "@type": "Occupation",
                  "name": "Software Engineer",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "DementiAnalytics"
                  },
                  "skills": "React, Expo, Flask, Machine Learning, Healthcare Technology, Mobile Development"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/in/alp-efe-karalar/",
                "https://github.com/efekaralar"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}