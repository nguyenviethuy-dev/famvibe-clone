// import { SiteHeader } from "@/layouts/df-layout/header/site-header";
// import  Footter  from "@/layouts/df-layout/footter/footter";
// import type React from "react";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div lang="en">{/* Bao bọc với BrowserRouter */}
//           <SiteHeader />
//           {children}
//           <Footter />
//     </div>
//   );
// }
import { SiteHeader } from "@/layouts/df-layout/header/site-header"
import Footter from "@/layouts/df-layout/footter/footter"
import type React from "react"
import { AuthProvider } from "@/layouts/df-layout/header/auth-context"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <div lang="en">
        <SiteHeader />
        {children}
        <Footter />
      </div>
    </AuthProvider>
  )
}

