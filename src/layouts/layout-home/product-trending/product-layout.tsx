import ProductCarousel from "@/layouts/layout-home/product-trending/components/product-carousel"

export default function ProductsPage() {
  return (
    <div className="py-8 space-y-12">
      {/* Carousel Section */}
      <section>
        <ProductCarousel />
      </section>
    </div>
  )
}
