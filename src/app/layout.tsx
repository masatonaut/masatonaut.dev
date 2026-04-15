import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masatonaut.dev"),
  title: "Masato Ito — AI Engineer & Indie Maker",
  description:
    "AI Engineer building Kyren, a focused product studio from Tokyo. Shipping tools for everyday life.",
  keywords: [
    "AI Engineer",
    "Indie Maker",
    "Next.js",
    "Kyren",
    "masatonaut",
    "Full Stack",
  ],
  authors: [{ name: "Masato Ito" }],
  openGraph: {
    title: "Masato Ito — AI Engineer & Indie Maker",
    description:
      "Building Kyren, a focused product studio from Tokyo.",
    type: "website",
    locale: "en_US",
    url: "https://masatonaut.dev",
    siteName: "masatonaut",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Masato Ito — AI Engineer & Indie Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masato Ito — AI Engineer & Indie Maker",
    description:
      "Building Kyren, a focused product studio from Tokyo.",
    images: ["/api/og"],
    site: "@masatobuilds",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
