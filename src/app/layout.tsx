import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masatonaut.dev"),
  title: "Masato Ito — AI Engineer & Indie Maker",
  description:
    "AI engineer and indie maker building Kyren from Tokyo. Heading to USC for MSCS.",
  keywords: [
    "AI Engineer",
    "Indie Maker",
    "Next.js",
    "Kyren",
    "masatonaut",
    "Masato Ito",
  ],
  authors: [{ name: "Masato Ito" }],
  openGraph: {
    title: "Masato Ito — AI Engineer & Indie Maker",
    description: "AI engineer and indie maker building Kyren from Tokyo.",
    type: "website",
    locale: "en_US",
    url: "https://masatonaut.dev",
    siteName: "masatonaut",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Masato Ito — masatonaut.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masato Ito — AI Engineer & Indie Maker",
    description: "Building Kyren from Tokyo.",
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
  themeColor: "#EDE4D0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${notoJp.variable} ${jbMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
