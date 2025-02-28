

import { useState } from "react"
import { User, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/layouts/df-layout/header/auth-context"
import { useNavigate } from "react-router-dom"

interface UserMenuProps {
  onOpenAuthModal: () => void
}

export function UserMenu({ onOpenAuthModal }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      setIsOpen(false)
      // Optionally, you can navigate to the home page or any other page after logout
      navigate("/")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  if (!user) {
    return (
      <button onClick={onOpenAuthModal} className="flex items-center gap-2">
        <User className="h-5 w-5" />
        <span className="hidden lg:inline text-sm">Login</span>
      </button>
    )
  }

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 focus:outline-none">
        <User className="h-5 w-5" />
        <span className="hidden lg:inline text-sm">{user.email}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <button
            onClick={() => {
              setIsOpen(false)
              navigate("/profile")
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <User className="inline-block w-4 h-4 mr-2" />
            Profile
          </button>
          <button
            onClick={() => {
              setIsOpen(false)
              navigate("/settings")
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <Settings className="inline-block w-4 h-4 mr-2" />
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <LogOut className="inline-block w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

