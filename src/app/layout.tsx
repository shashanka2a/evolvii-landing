import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "evolvii - Transform Climate Anxiety into Action",
  description: "evolvii transforms awareness into impact, connecting passionate individuals with real-world climate solutions. Join the movement that turns eco-anxiety into unstoppable action.",
  keywords: ["climate action", "environmental activism", "eco-anxiety", "sustainability", "climate change", "environmental movement"],
  authors: [{ name: "evolvii team" }],
  creator: "evolvii",
  publisher: "evolvii",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://evolvii.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "evolvii - Transform Climate Anxiety into Action",
    description: "evolvii transforms awareness into impact, connecting passionate individuals with real-world climate solutions. Join the movement that turns eco-anxiety into unstoppable action.",
    url: "https://evolvii.com",
    siteName: "evolvii",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "evolvii - Transform Climate Anxiety into Action",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "evolvii - Transform Climate Anxiety into Action",
    description: "evolvii transforms awareness into impact, connecting passionate individuals with real-world climate solutions.",
    images: ["/og-image.jpg"],
    creator: "@evolvii",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#121212" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
