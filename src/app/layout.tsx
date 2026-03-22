import Script from 'next/script';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WalkingPadPicks - Best Walking Pad Reviews & Buyer's Guides",
    template: "%s | WalkingPadPicks",
  },
  description:
    "Find the best walking pad for your home office. Independent reviews, comparisons, and buyer's guides for under-desk treadmills and walking pads.",
  metadataBase: new URL("https://www.walkingpadpicks.com"),
  openGraph: {
    siteName: "WalkingPadPicks",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://www.walkingpadpicks.com/og-image.jpg", width: 1200, height: 630, alt: "WalkingPadPicks — Best Walking Pad Reviews" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NELF06STQW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NELF06STQW');
          `}
        </Script>
      </body>
    </html>
  );
}
