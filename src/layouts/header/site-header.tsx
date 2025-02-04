"use client"

import { Link } from "react-router-dom"
import { Search, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="container px-14 py-5">
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-2 md:gap-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0402/7852/4065/files/logonentrang2.svg?v=1690601667"
            alt="Famvibe Logo"
            className="h-10 w-200px"
          />
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search" className="w-full pl-9 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 " />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Login</span>
            </Link>
            <Link to="/cart" className="flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-rose-600 text-[10px] font-medium text-white flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="hidden sm:inline">Cart</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-6">
              <NavigationMenuItem>
                <Link to="/new-arrival" className="text-lg font-medium">
                  New Arrival
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/best-seller" className="text-lg font-medium">
                  Best Seller
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg  font-medium">Occasion</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <NavigationMenuLink asChild>
                      <Link to="/occasion/birthday" className="block p-2 hover:bg-accent rounded-md">
                        Birthday
                      </Link>
                    </NavigationMenuLink>
                    {/* Add more occasion links as needed */}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-medium">Recipients</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">{/* Add recipient links */}</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-medium">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">{/* Add product category links */}</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button variant="destructive" className="bg-rose-600 hover:bg-rose-700">
              ❄️ Valentine
            </Button>
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Tracking Order
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

