import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom"; // Import Link properly
import { Facebook, Twitter } from "lucide-react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

 
export default function NewsletterSignup() {


    const [isOpen, setIsOpen] = useState(false);
  
    const [currency, setCurrency] = useState("USD");
    const currencies = [
        { code: "USD", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" },
        { code: "EUR", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" },
        { code: "VND", flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" }
      ];
      


  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Unlock 10% OFF Your First Order!</h2>
          <p className="text-gray-300 mb-8">
            As soon as you join, we'll send you a sweet 10% OFF deal for your first order. So go ahead, find gifts
            wrapped with care and save!
          </p>
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="First Name"
              className="bg-white text-black rounded-lg px-4 py-3 w-full text-lg"
            />
            <Input
              type="email"
              placeholder="Enter your email address..."
              className="bg-white text-black rounded-lg px-4 py-3 w-full text-lg"
            />
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-bold py-3 rounded-lg uppercase">
              Unlock Your 10% OFF NOW
            </Button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800">
          {/* Logo Column */}
          <div className="space-y-4">
            <Link to="/">
              <img
                src="https://famvibe.com/cdn/shop/t/358/assets/LOGO-TAGLINE-white-Rebranding-desktop.svg?v=172560154624512658651738572443"
                alt="Famvibe Logo"
                width={200}
                height={60}
                className="mb-4 cursor-pointer"
              />
            </Link>
            <div className="flex items-center gap-2">
              <img
                src="https://famvibe.com/cdn/shop/t/358/assets/Trustpilot.svg?v=85654299238167834661738572548"
                alt="Trustpilot"
                width={150}
                height={100}
                className="mb-1 cursor-pointer"
              />
            </div>
            <div className="flex gap-2">
              <img
                src="https://famvibe.com/cdn/shop/files/American-Express-Logotype-Stacked_28ef5ad3-517c-4db6-bf2a-9ec8965a3e45_64x32.png?v=1649874372"
                alt="Payment Methods"
                width={200}
                height={30}
                className="h-8 w-auto cursor-pointer"
              />
              <img
                src="https://famvibe.com/cdn/shop/files/2560px-PayPal_logo_c82c5b94-f1b0-4275-8745-f193795610d5_64x32.png?v=1649874401"
                alt="Payment Methods"
                width={200}
                height={30}
                className="h-8 w-auto cursor-pointer"
              />
            </div>
            <div className="flex gap-2">
            <img
                src="https://famvibe.com/cdn/shop/files/Mastercard-Logo_171b8fa3-1f38-4286-8705-6ea674d59721_64x32.png?v=1649874412"
                alt="Payment Methods"
                width={200}
                height={30}
                className="h-8 w-auto cursor-pointer"
              />
              <img
                src="https://famvibe.com/cdn/shop/files/Visa_Inc._logo_9947facb-5bdb-4606-b4f6-0b149dca2f77_64x32.png?v=1649874384"
                alt="Payment Methods"
                width={200}
                height={30}
                className="h-8 w-auto cursor-pointer"
              />
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Happy Customer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Return & Refund
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FAMVIBE</h3>
            <p className="text-gray-300">US Warehouse</p>
            <p className="text-gray-300 mb-2">14801 Able Ln, Ste 102 Huntington Beach, CA 92647</p>
            <p className="text-gray-300 mb-4">(Storage point)</p>

            {/* Currency Selector */}
            <div className="relative flex gap-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-md border border-gray-300 hover:bg-gray-100"
            >
                <img src={currencies.find(c => c.code === currency)?.flag} alt={currency} className="w-6 h-4 rounded-sm" />
                <span className="font-medium text-black">{currency}</span>
                <ChevronDown className="w-4 h-4 text-black" />
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 rounded-lg shadow-md">
                {currencies.map((item) => (
                    <button
                    key={item.code}
                    onClick={() => {
                        setCurrency(item.code);
                        setIsOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-gray-100 text-black"
                    >
                    <img src={item.flag} alt={item.code} className="w-6 h-4 rounded-sm" />
                    <span>{item.code}</span>
                    </button>
                ))}
                </div>
            )}

              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
