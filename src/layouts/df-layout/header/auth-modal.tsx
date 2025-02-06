
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
  const [isForgotPassword, setIsForgotPassword] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[800px] grid grid-cols-2 relative shadow-2xl">
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>

        {/* Left Side - Image */}
        <div
          className="p-8 bg-cover bg-center rounded-l-lg flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage: `url("https://famvibe.com/cdn/shop/t/358/assets/bg.png?v=140765430023735732561738572230")`,
          }}
        >
          <img
            src="https://famvibe.com/cdn/shop/t/358/assets/LOGO-allwhite-Rebranding.svg?v=43006224365933398391738572441"
            alt="Famvibe"
            className="h-24 mb-20"
          />
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          {!isForgotPassword ? (
            <>
              {/* Tabs */}
              <div className="flex mb-8">
                <button
                  className={`pb-2 px-4 text-lg font-medium ${
                    isLogin ? "text-rose-600 border-b-2 border-rose-600" : "text-gray-400"
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button
                  className={`pb-2 px-4 text-lg font-medium ${
                    !isLogin ? "text-rose-600 border-b-2 border-rose-600" : "text-gray-400"
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  Signup
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {!isLogin && (
                  <>
                    <Input placeholder="First Name" className="w-full py-3 px-2 rounded-lg border border-gray-300" />
                    <Input placeholder="Last Name" className="w-full py-3 px-2 rounded-lg border border-gray-300" />
                  </>
                )}
                <Input type="email" placeholder="Email" className="w-full py-3 px-2 rounded-lg border border-gray-300" />
                <Input type="password" placeholder="Password" className="w-full py-3 px-2 rounded-lg border border-gray-300" />

                {/* Forgot Password */}
                {isLogin && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-gray-600 hover:underline"
                      onClick={() => setIsForgotPassword(true)}
                    >
                      Forgot your password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-6 text-base font-medium rounded-lg">
                  Log In Now
                </Button>

              </form>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">Reset Password</h2>
              <p className="text-sm text-gray-600 mb-4">We will send you an email to reset your password.</p>
              <Input type="email" placeholder="Email" className="w-full rounded-lg border-gray-300 mb-4" />
              <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-6 text-base font-medium rounded-lg">
                Submit
              </Button>
              <p
                className="text-center text-sm text-gray-600 mt-2 cursor-pointer hover:underline"
                onClick={() => setIsForgotPassword(false)}
              >
                or Cancel
              </p>
            </>
          )}

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or log in with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Sign in with Google
              </button>
              <button className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#1877F2] text-white text-sm font-medium hover:bg-[#1874EA]">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook"
                  className="h-5 w-5 mr-2"
                />
                Sign in with Facebook
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

