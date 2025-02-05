interface GiftModalProps {
    isOpen: boolean
    onClose: () => void
  }
  
  export function GiftModal({ isOpen, onClose }: GiftModalProps) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg max-w-4xl w-full p-6 flex">
          {/* Phần ảnh */}
          <div className="flex-shrink-0 w-1/3">
            <img
              src="https://d3k81ch9hvuctc.cloudfront.net/company/Yzp6ny/images/ad22fb03-3ab2-4d1d-a8d9-21a75d38961d.jpeg"
              alt="catalog gift"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Phần nội dung */}
          <div className="flex-1 ml-6 space-y-4 flex flex-col justify-between">
            <button
              onClick={onClose}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 p-2"
            >
              X
            </button>
  
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-center">Enjoy 10% OFF Your First Order!</h2>
              <p className="text-center text-gray-600">
                Give your inbox some love with new products, fun stories, discounts & more.
              </p>
  
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
  
              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-md">
                Sign Up and Get 10% Off
              </button>
  
              <button onClick={onClose} className="w-full text-gray-500 hover:text-gray-700 text-sm">
                No, Thanks.
              </button>
  
              <p className="text-xs text-center text-gray-500">By signing up, you agree to receive email marketing.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  