import RootLayout from "@/layouts/df-layout/Layout";
import NewArrival from "@/layouts/df-layout/banner-newarrival";
import ProductPage from "@/layouts/new-arrivals/productpage-layout/productpage";

export default function Homepage() {
    return (
      <div lang="en">
        <RootLayout >
        <NewArrival />
        <ProductPage />
        </RootLayout>
      </div>
    );
  }