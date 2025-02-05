import { Button } from "@/components/ui/button"

export default function GiftForReceptions() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gift For Receptions</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Grandkids Section */}
        <div className="bg-[#FFE4E1] rounded-xl p-6 relative overflow-hidden">
          <div className="max-w-[60%]">
            <h2 className="text-2xl font-bold mb-3">Grandkids</h2>
            <p className="text-gray-600 mb-4">
              Embracing the boundless joy of grandparent-grandchild relationships, our gift collection is designed to
              celebrate the special bond you share with your beloved grandkids
            </p>
            <Button variant="secondary" className="bg-white hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7idhFXUPclg1CANYmnsES2STe5Au2R55eEw&s"
            alt="Grandkids Gift"
            width={200}
            height={200}
            className="absolute right-4 bottom-4"
          />
        </div>

        {/* Grandparents Section */}
        <div className="bg-[#FFF8DC] rounded-xl p-6 relative overflow-hidden">
          <div className="max-w-[60%]">
            <h2 className="text-2xl font-bold mb-3">Grandparents</h2>
            <p className="text-gray-600 mb-4">
              Grandparents are the pillars of our family, and in celebration of their love and wisdom, we present our
              special gift collection
            </p>
            <Button variant="secondary" className="bg-white hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_En9UHRIVdfNDO-95UbIpt1yjH7_wPmStA&s"
            alt="Grandparents Gift"
            width={200}
            height={200}
            className="absolute right-4 bottom-4"
          />
        </div>

        {/* Friends Section */}
        <div className="bg-[#E0FFE0] rounded-xl p-6 relative overflow-hidden">
          <div className="max-w-[60%]">
            <h2 className="text-2xl font-bold mb-3">Friends</h2>
            <p className="text-gray-600 mb-4">
              Friends are the family we choose. Explore our curated gift collection to show your appreciation for those
              who bring joy and laughter to your life
            </p>
            <Button variant="secondary" className="bg-white hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVdt_n1c4i5uEbAdF-lrMub71itIpLW-mnA&s"
            alt="Friends Gift"
            width={200}
            height={200}
            className="absolute right-4 bottom-4"
          />
        </div>

        {/* Family Section */}
        <div className="bg-[#E0F0FF] rounded-xl p-6 relative overflow-hidden">
          <div className="max-w-[60%]">
            <h2 className="text-2xl font-bold mb-3">Family</h2>
            <p className="text-gray-600 mb-4">
              Celebrate family love and togetherness with our curated collection of thoughtful gifts, fostering joy and
              creating lasting memories. Perfect for any occasion!
            </p>
            <Button variant="secondary" className="bg-white hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
          <img
            src="https://gddt.edu.vn/media/6/2023/09/thuyet-trinh-tieng-anh-voi-chu-de-my-family.jpg"
            alt="Family Gift"
            width={200}
            height={200}
            className="absolute right-4 bottom-4"
          />
        </div>
      </div>
    </main>
  )
}
