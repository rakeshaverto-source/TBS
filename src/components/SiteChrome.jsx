"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// The admin panel renders without the public site's navbar and footer.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return children;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
