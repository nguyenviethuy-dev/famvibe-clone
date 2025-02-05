"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[800px] grid grid-cols-2 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>

       {/* Left side */}
        <div
        className="p-8 bg-cover bg-center rounded-lg"
        style={{
            backgroundImage: `url("https://famvibe.com/cdn/shop/t/358/assets/bg.png?v=140765430023735732561738572230")`,
        }}
        >
        <img
            src="https://cdn.shopify.com/s/files/1/0402/7852/4065/files/logonentrang2.svg?v=1690601667"
            alt="Famvibe"
            className="h-8 mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">Personalized Creations for Grandparents</h2>
        </div>


        {/* Right side */}
        <div className="p-8">
          <div className="flex gap-8 mb-8">
            <button
              className={`text-xl font-semibold ${isLogin ? "text-rose-600 border-b-2 border-rose-600" : "text-gray-500"}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`text-xl font-semibold ${!isLogin ? "text-rose-600 border-b-2 border-rose-600" : "text-gray-500"}`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <Input placeholder="First Name" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Last Name" className="w-full" />
                </div>
              </>
            )}
            <div>
              <Input type="email" placeholder="Email" className="w-full" />
            </div>
            <div>
              <Input type="password" placeholder="Password" className="w-full" />
            </div>
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Forgot your password?
                </a>
              </div>
            )}
            <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
              {isLogin ? "Log In Now" : "Sign Up"}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or log in with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook"
                  className="h-5 w-5 mr-2"
                />
                Facebook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

