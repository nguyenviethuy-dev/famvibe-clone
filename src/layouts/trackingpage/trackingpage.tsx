
// import { useState } from "react";

// export default function TrackingOrder() {
//   const [showTrackingInput, setShowTrackingInput] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16">
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-[600px] w-full">
//         <div className="text-center text-gray-600 mt-4 text-sm">
//           Your order is still in production process, it takes 3-5 business days for production.  
//           Once your order has shipped, you will receive an email from us with a tracking number and link to track  
//           your order. If it has been more than 5 business days since you ordered, please contact us.
//         </div>

//         <div className="mt-8">
//           <div className="flex flex-col gap-6">
//             <div className="grid grid-cols-2 gap-4 text-xl font-semibold border-b pb-2">
//               <button onClick={() => setShowTrackingInput(false)} className="focus:outline-none">
//                 Order Number
//               </button>
//               <button onClick={() => setShowTrackingInput(true)} className="focus:outline-none">
//                 Tracking Number
//               </button>
//             </div>

//             {!showTrackingInput ? (
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <input type="text" placeholder="Order Number" className="w-full px-4 py-2 border rounded-lg" />
//                 <input type="text" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
//               </div>
//             ) : (
//               <div className="mt-4">
//                 <input type="text" placeholder="Tracking Number" className="w-full px-4 py-2 border rounded-lg" />
//               </div>
//             )}

//             <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mt-4">
//               Track
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TrackingOrder() {
  const [showTrackingInput, setShowTrackingInput] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Tiêu đề */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
        Tracking Order
      </h1>

      {/* Mô tả */}
      <div className="text-center text-gray-600 mt-2 text-sm sm:text-base lg:text-lg max-w-3xl">
        Your order is still in production process, it takes 3-5 business days for production.  
        Once your order has shipped, you will receive an email from us with a tracking number and link to track  
        your order. If it has been more than 5 business days since you ordered, please contact us.
      </div>

      {/* Nút chuyển đổi */}
      <div className="flex justify-center gap-4 mb-6">
        <Button 
          variant={!showTrackingInput ? "default" : "outline"}
          onClick={() => setShowTrackingInput(false)}
        >
          Order Number
        </Button>
        <Button 
          variant={showTrackingInput ? "default" : "outline"}
          onClick={() => setShowTrackingInput(true)}
        >
          Tracking Number
        </Button>
      </div>

      {/* Nội dung hiển thị trên một dòng */}
      {!showTrackingInput ? (
        <div className="flex gap-4 mb-6">
          <Input type="text" placeholder="Order Number" className="w-full max-w-xs px-1 py-3 border-current border-gray-300" />
          <Input type="text" placeholder="Email" className="w-full max-w-xs px-1 py-3 border-current border-gray-300" />
        </div>
      ) : (
        <div className="flex gap-4 mb-6">
          <Input type="text" placeholder="Tracking Number" className="w-full max-w-xs px-1 py-3 border-current border-gray-300" />
        </div>
      )}

      {/* Nút submit */}
      <Button className="w-full max-w-xs mt-6">Track</Button>
    </div>
  );
}

