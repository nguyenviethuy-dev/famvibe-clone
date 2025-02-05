import { SiteHeader } from "@/layouts/header/site-header";
import BannerSection from "@/layouts/baner/banner";
import ProductsPage from "@/layouts/product/product-layout";
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
          <ProductsPage />
          {children}
    </div>
  );
}
