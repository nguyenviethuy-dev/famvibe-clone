import { SiteHeader } from "@/layouts/header/site-header";
import BannerSection from "@/layouts/baner/banner";
import ProductsPage from "@/layouts/product/product-layout";
import ProductsTrendingPage from "@/layouts/product-trending/product-layout";
import ProductsNewArrivalsPage from "@/layouts/new-arrivals/product-layout";
import VideoTutorial from "@/layouts/cap-video/capvideo";
import CustomerReviews from "@/layouts/review/rating-review";
import GiftForReceptions from "@/layouts/Gift For Receptions/Gift For Receptions";
import type React from "react";

export default function Homepage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en">
      <SiteHeader />
      <BannerSection />
      <ProductsPage />
      <ProductsTrendingPage />
      <ProductsNewArrivalsPage /> 
      <GiftForReceptions />
      <VideoTutorial />
      <CustomerReviews />
      {children}
    </div>
  );
}