import { SiteHeader } from "@/layouts/header/site-header";
import BannerSection from "@/layouts/baner/banner";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import type React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en">{/* Bao bọc với BrowserRouter */}
          <SiteHeader />
          <BannerSection />
          {children}
    </div>
  );
}
