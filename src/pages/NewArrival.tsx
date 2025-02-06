import RootLayout from "@/layouts/df-layout/Layout";
import NewArrival from "@/layouts/baner/banner-newarrival";
import ProductPage from "@/layouts/productpage-layout/newarrival/productpage-na";

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