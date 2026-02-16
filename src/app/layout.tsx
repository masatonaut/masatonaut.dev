import type { Metadata, Viewport } from "next";
import { Zen_Kaku_Gothic_New, DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  title: "masatonaut — AI Engineer & Indie Maker",
  description: "Building micro tools for daily friction. choimo series.",
  keywords: ["AI Engineer", "Indie Maker", "Next.js", "choimo", "masatonaut"],
  authors: [{ name: "masatonaut" }],
  openGraph: {
    title: "masatonaut — AI Engineer & Indie Maker",
    description: "Building micro tools for daily friction. choimo series.",
    type: "website",
    locale: "en_US",
    url: "https://masatonaut.dev",
    siteName: "masatonaut",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "masatonaut — AI Engineer & Indie Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "masatonaut — AI Engineer & Indie Maker",
    description: "Building micro tools for daily friction. choimo series.",
    images: ["/api/og"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
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
        className={`${zenKaku.variable} ${dmSans.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
