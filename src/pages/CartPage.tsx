import RootLayout from "@/layouts/df-layout/Layout";
import ProductsPage from "@/layouts/layout-home/product/product-layout";
import ProductsTrendingPage from "@/layouts/layout-home/product-trending/product-layout";
import ProductsNewArrivalsPage from "@/layouts/layout-home/new-arrivals/product-layout";
import CartPage from "@/layouts/cart-product/page/cart";

export default function Homepage() {
  return (
    <div lang="en">
      <RootLayout >
      <CartPage />
      <ProductsPage />
      <ProductsTrendingPage />
      <ProductsNewArrivalsPage /> 
      </RootLayout>
    </div>
  );
}