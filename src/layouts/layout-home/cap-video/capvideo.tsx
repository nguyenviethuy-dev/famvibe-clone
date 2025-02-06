import { useState } from "react"
import { X } from "lucide-react"

export default function VideoTutorial() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#B21E4B] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">How To Make Personalized Gift</h1>

      {/* Video Tutorial Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-white text-[#B21E4B] rounded-full px-6 py-3 flex items-center gap-2 hover:bg-opacity-90 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-[#B21E4B] flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
        </div>
        Watch video tutorial
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-200"
            >
              <X size={24} />
            </button>

            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bPVPyNRcYqc"
                title="Personalized Gift Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        <div className="bg-white bg-opacity-95 rounded-lg p-6">
          <img src="https://famvibe.com/cdn/shop/t/358/assets/step_guide-01.png?v=123855289959281191601738572532" alt="b1" />
          <h2 className="text-xl font-semibold text-[#B21E4B] mb-4">1. Pick your gift</h2>
          <p className="text-gray-600">Choose your gift you want then pick your gift size.</p>
        </div>
        <div className="bg-white bg-opacity-95 rounded-lg p-6">
          <img src="https://famvibe.com/cdn/shop/t/358/assets/step_guide-02.png?v=27460856485986172691738572533" alt="b2" />
          <h2 className="text-xl font-semibold text-[#B21E4B] mb-4">2. Personalize your design</h2>
          <p className="text-gray-600">Customize your design with various options to best your message.</p>
        </div>
        <div className="bg-white bg-opacity-95 rounded-lg p-6">
          <img src="https://famvibe.com/cdn/shop/t/358/assets/step_guide-03.png?v=173020055011260738211738572533" alt="b3" />
          <h2 className="text-xl font-semibold text-[#B21E4B] mb-4">3. Buy It Now</h2>
          <p className="text-gray-600">
            Fill your contact information and wait to enjoy meaningful gift with beloved ones.
          </p>
        </div>
      </div>
    </div>
  )
}