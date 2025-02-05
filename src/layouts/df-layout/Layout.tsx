import { SiteHeader } from "@/layouts/header/site-header";
import  Footter  from "@/layouts/footter/footter";
import type React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en">{/* Bao bọc với BrowserRouter */}
          <SiteHeader />
          {children}
          <Footter />
    </div>
  );
}
