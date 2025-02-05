import ProductCard from "./product-card"

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "Personalized Family Crossword Art - Perfect Gift",
      price: "$24.99 USD",
      originalPrice: "$39.99 USD",
      rating: 4.5,
      reviews: 184,
      imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/36046-278882-primary-mockup.jpg?v=1728092598&width=240",
    },
    {
      id: 2,
      title: "Personalized Gift For Grandson On Their Birthday",
      price: "$19.99 USD",
      originalPrice: "$29.99 USD",
      rating: 4.5,
      reviews: 131,
      imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/m6_fed0cc41-9f8d-4f0d-93c2-d79db518bfb9.jpg?v=1728023755&width=240",
    },
    {
      id: 3,
      title: "Personalized Family Crossword Art Print",
      price: "$24.99 USD",
      originalPrice: "$39.99 USD",
      rating: 4.5,
      reviews: 165,
      imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/36314-280398-primary-mockup.jpg?v=1729267484&width=240",
    },
    {
      id: 4,
      title: "Personalized Baby 1st Christmas Custom",
      price: "$12.99 USD",
      originalPrice: "$25.99 USD",
      rating: 4.5,
      reviews: 80,
      imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/36103-279064-primary-mockup.jpg?v=1728275036&width=240",
    },
    {
      id: 5,
      title: "Custom Family Name Wall Art",
      price: "$29.99 USD",
      originalPrice: "$45.99 USD",
      rating: 4.5,
      reviews: 92,
      imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37792-291470-primary-mockup.jpg?v=1738549969&width=240",
    },
    {
      id: 6,
      title: "Personalized Christmas Ornament",
      price: "$15.99 USD",
      originalPrice: "$27.99 USD",
      rating: 4.5,
      reviews: 73,
      imageUrl: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37810-291452-primary-mockup.jpg?v=1737706053&width=240",
    },
    // thêm các sản phẩm khác ở đây
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Best Selling</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

