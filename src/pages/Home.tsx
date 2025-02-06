import RootLayout from "@/layouts/df-layout/Layout";
import BannerSection from "@/layouts/baner/banner-home";
import ProductsPage from "@/layouts/product/product-layout";
import ProductsTrendingPage from "@/layouts/product-trending/product-layout";
import ProductsNewArrivalsPage from "@/layouts/new-arrivals/product-layout";
import VideoTutorial from "@/layouts/cap-video/capvideo";
import CustomerReviews from "@/layouts/review/rating-review";
import GiftForReceptions from "@/layouts/Gift For Receptions/Gift For Receptions";

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