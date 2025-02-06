import RootLayout from "@/layouts/df-layout/Layout";
import BestSeller from "@/layouts/baner/banner-best-seller";
import ProductPage from "@/layouts/productpage-layout/productpage";

export default function Homepage() {
    return (
      <div lang="en">
        <RootLayout >
        <BestSeller />
        <ProductPage />
        </RootLayout>
      </div>
    );
  }