const BannerSection = () => {
    return (
       <div className="p-16">
            
          <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
            {/* Banner Valentine - chiếm 1 cột và 2 hàng */}
            <div className="col-span-2 row-span-2 bg-pink-100 rounded-2xl p-8 relative overflow-hidden flex items-center h-[450px]">
              <img
                src="https://famvibe.com/cdn/shop/files/banner_1_310d8bb5-a84a-4173-8a4f-83cabdef6501_2000x1757.jpg?v=1738571935"
                alt="Valentine Gift"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
      
            {/* Easter Collection */}
            <div className="col-span-1 bg-pink-200 rounded-2xl p-6 relative text-center overflow-hidden flex items-center">
              <img
                src="https://famvibe.com/cdn/shop/files/banner_2_07613c96-1b4c-48ad-ad88-44fa3539e1ef_2000x1807.jpg?v=1738571996"
                alt="Easter Collection"
                className="absolute inset-0 w-full h-auto object-cover"
              />
            </div>
      
            {/* Gift For Kid */}
            <div className="col-span-1 bg-yellow-200 rounded-2xl p-6 relative text-center overflow-hidden flex items-center">
              <img
                src="https://famvibe.com/cdn/shop/files/banner_3_e088746d-8630-4dc1-8a4f-0265a0533cf5_2000x1807.jpg?v=1738572052"
                alt="Gift For Kid Collection"
                className="absolute inset-0 w-full h-auto object-cover"
              />
            </div>
          </div>
       </div>
    );
  }
  
  export default BannerSection;
  