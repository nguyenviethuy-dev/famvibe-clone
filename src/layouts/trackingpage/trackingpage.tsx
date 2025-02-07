
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

