import ProductCarousel from "@/layouts/new-arrivals/components/product-carousel"

export default function ProductsNewArrivalsPage() {
  return (
    <div className="py-8 space-y-12">
      {/* Carousel Section */}
      <section>
        <ProductCarousel />
      </section>
    </div>
  )
}
