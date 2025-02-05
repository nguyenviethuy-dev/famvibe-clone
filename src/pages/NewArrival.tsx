import RootLayout from "@/layouts/df-layout/Layout";
// import BannerSection2 from "@/layouts/baner/banner2";
import ProductPage from "@/layouts/productpage-layout/productpage";

export default function Homepage() {
    return (
      <div lang="en">
        <RootLayout >
        <ProductPage />
        </RootLayout>
      </div>
    );
  }