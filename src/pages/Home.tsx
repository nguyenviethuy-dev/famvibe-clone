import RootLayout from "@/layouts/df-layout/Layout";
import BannerSection from "@/layouts/baner/banner-home";
import ProductsPage from "@/layouts/layout-home/product/product-layout";
import ProductsTrendingPage from "@/layouts/layout-home/product-trending/product-layout";
import ProductsNewArrivalsPage from "@/layouts/layout-home/new-arrivals/product-layout";
import VideoTutorial from "@/layouts/layout-home/cap-video/capvideo";
import CustomerReviews from "@/layouts/layout-home/review/rating-review";
import GiftForReceptions from "@/layouts/layout-home/Gift For Receptions/Gift For Receptions";

export default function Homepage() {
  return (
    <div lang="en">
      <RootLayout >
      <BannerSection />
      <ProductsPage />
      <ProductsTrendingPage />
      <ProductsNewArrivalsPage /> 
      <GiftForReceptions />
      <VideoTutorial />
      <CustomerReviews />
      </RootLayout>
    </div>
  );
}