import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Rounded face matching the lettering on the school crest
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "800", "900"],
});

export const metadata = {
  // base for canonical / Open Graph URLs (set NEXT_PUBLIC_SITE_URL if the domain changes)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thebharatschool.com"),
  title: "The Bharat School",
  description: "Tinkerbelle - Path forward to TBS",
};

import SiteChrome from "@/components/SiteChrome";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${nunito.variable} h-full antialiased font-sans`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-slate-50">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
