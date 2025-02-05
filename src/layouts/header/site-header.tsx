// "use client"

// import { Link } from "react-router-dom"
// import { Search, User, ShoppingCart } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"

// export function SiteHeader() {
//   return (
//     <header className="w-full border-b">
//       <div className="container px-20 py-5">
//         {/* Top Bar */}
//         <div className="flex items-center justify-between gap-4 md:gap-8">
//           {/* Logo */}
//           <Link to="/" className="flex-shrink-0">
//             <img
//               src="https://cdn.shopify.com/s/files/1/0402/7852/4065/files/logonentrang2.svg?v=1690601667"
//               alt="Famvibe Logo"
//               className="h-12 w-auto"
//             />
//           </Link>

//           {/* Search */}
//           <div className="flex-1 max-w-2xl">
//             <div className="relative">
//               <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
//               <Input
//                 type="search"
//                 placeholder="Search"
//                 className="w-full pl-10 py-3 bg-white border rounded-xl shadow-sm focus:outline-none focus:ring-2 "
//               />
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex items-center gap-6">
//             <Link to="/login" className="flex items-center gap-2 text-lg font-medium">
//               <User className="h-6 w-6" />
//               <span className="hidden sm:inline">Login</span>
//             </Link>
//             <Link to="/cart" className="flex items-center gap-2 text-lg font-medium">
//               <div className="relative">
//                 <ShoppingCart className="h-6 w-6" />
//                 <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-rose-600 text-xs font-semibold text-white flex items-center justify-center">
//                   0
//                 </span>
//               </div>
//               <span className="hidden sm:inline">Cart</span>
//             </Link>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center justify-between mt-6">
//           <NavigationMenu>
//             <NavigationMenuList className="hidden md:flex gap-8 text-lg font-semibold tracking-wide">
//               <NavigationMenuItem>
//                 <Link to="/new-arrival" className="hover:text-rose-600">New Arrival</Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link to="/best-seller" className="hover:text-rose-600">Best Seller</Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="hover:text-rose-600">Occasion</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="w-56 p-3 space-y-2">
//                     <NavigationMenuLink asChild>
//                       <Link to="/occasion/birthday" className="block p-3 hover:bg-accent rounded-lg">Birthday</Link>
//                     </NavigationMenuLink>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="hover:text-rose-600">Recipients</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="w-56 p-3">{/* Add recipient links */}</div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="hover:text-rose-600">Products</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="w-56 p-3">{/* Add product category links */}</div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>

//           <div className="flex items-center gap-6">
//             <Button variant="destructive" className="bg-rose-600 hover:bg-rose-700 px-6 py-2 text-lg font-semibold">
//               ❄️ Valentine
//             </Button>
//             <Button variant="outline" className="gap-3 px-6 py-2 text-lg font-semibold">
//               <Search className="h-5 w-5" />
//               Tracking Order
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

import { Search, User, ShoppingCart, ChevronDown } from "lucide-react"

export function SiteHeader() {
  // const [showOccasions, setShowOccasions] = useState(false)
  // const [showRecipients, setShowRecipients] = useState(false)
  // const [showProducts, setShowProducts] = useState(false)


  return (
    <div className="w-full">
      <header className="container mx-auto px-20 py-5">
        <div className="flex items-center justify-between gap-8">
          <a href="/" className="text-3xl font-bold">
            <img
              src="https://cdn.shopify.com/s/files/1/0402/7852/4065/files/logonentrang2.svg?v=1690601667"
              alt="Famvibe"
              className="h-8"
            />
          </a>

          <div className="flex-1 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="/login" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="text-sm">Login</span>
            </a>
            <a href="/cart" className="flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="text-sm">Cart</span>
            </a>
          </div>
        </div>

        <nav className="mt-4 flex items-center gap-8 text-base">
          <a href="/new-arrival" className="hover:text-primary">
            New Arrival
          </a>
          <a href="/best-seller" className="hover:text-primary">
            Best Seller
          </a>

          <div className="relative group">
            <button className="hover:text-primary flex items-center gap-1">
              <ChevronDown className="h-5 w-5" />
              Occasion
            </button>
            <div className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 gap-8 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-transparent -translate-y-full"></div>
              <div>
                <h3 className="font-bold text-lg mb-4">Upcoming Occasions</h3>
                <div className="flex items-center gap-2 text-red-600">
                  <div className="bg-red-100 text-red-600 rounded px-2 py-1 text-sm">
                    <span className="block text-xs">Feb</span>
                    <span className="font-bold">14</span>
                  </div>
                  <span>Valentine</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Everyday Occasions</h3>
                <ul className="space-y-2 text-base">
                  <li>
                    <a href="#" className="hover:text-primary">
                      Anniversary
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Baby Gifts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Memorial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Pet Memorial
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Seasonal Occasions</h3>
                <ul className="space-y-2 text-base">
                  <li>
                    <a href="#" className="hover:text-primary">
                      Halloween
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Fall Gifts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Christmas Gifts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Mother's Day
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Father's Day
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Graduation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-primary flex items-center gap-1">
            <ChevronDown className="h-5 w-5" />
              Recipients</button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-transparent -translate-y-full"></div>
              <ul className="space-y-2 text-base">
                <li>
                  <a href="#" className="hover:text-primary">
                    For Her
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    For Him
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    For Kids
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    For Pets
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-primary flex items-center gap-1">
            <ChevronDown className="h-5 w-5" />
              Products</button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-transparent -translate-y-full"></div>
              <ul className="space-y-2 text-base">
                <li>
                  <a href="#" className="hover:text-primary">
                    Canvas Prints
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Photo Frames
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Mugs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Jewelry
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a href="/valentine" className="bg-red-600 text-white px-6 py-2.5 text-base rounded-lg hover:bg-red-700">
            ❄️ Valentine
          </a>

          <div className="ml-auto">
            <button className="flex items-center gap-2 border px-6 py-2.5 text-base rounded-lg hover:bg-gray-50">
              <Search className="h-5 w-5" />
              Tracking Order
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}



