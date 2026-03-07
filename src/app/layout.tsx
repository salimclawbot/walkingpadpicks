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
  metadataBase: new URL("https://walking-pad-site.vercel.app"),
  openGraph: {
    siteName: "WalkingPadPicks",
    type: "website",
    locale: "en_US",
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
      </body>
    </html>
  );
}
