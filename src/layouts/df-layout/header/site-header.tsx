
// import { useState } from "react"
// import { Search, User, ShoppingCart, ChevronDown, Menu, X } from "lucide-react"
// import { AuthModal } from "./auth-modal"
// import { Link, useNavigate } from "react-router-dom"
// import { useCart } from "@/layouts/cart-product/contexts/cart-context"

// export function SiteHeader() {
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
//   const navigate = useNavigate()
//   const { state } = useCart()

//   const toggleMobileDropdown = (menu: string) => {
//     setOpenMobileDropdown(openMobileDropdown === menu ? null : menu)
//   }

//   return (
//     <>
//       <div className="w-full bg-white">
//         <header className="container mx-auto px-4 lg:px-8">
//           {/* Top Bar */}
//           <div className="flex items-center justify-between py-4 lg:py-6">
//             {/* Logo */}
//             <div className="flex items-center">
//               <button className="lg:hidden mr-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                 {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//               <Link to="/" className="flex-shrink-0">
//                 <img
//                   src="https://cdn.shopify.com/s/files/1/0402/7852/4065/files/logonentrang2.svg?v=1690601667"
//                   alt="Famvibe"
//                   className="h-8"
//                 />
//               </Link>
//             </div>

//             {/* Search Bar */}
//             <div className="hidden lg:flex flex-1 max-w-3xl mx-8">
//               <div className="relative w-full">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="search"
//                   placeholder="Search"
//                   className="w-full pl-12 pr-4 py-2.5 text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex items-center gap-6">
//               <button onClick={() => setIsAuthModalOpen(true)} className="flex items-center gap-2">
//                 <User className="h-5 w-5" />
//                 <span className="hidden lg:inline text-sm">Login</span>
//               </button>
//               <Link to="/cart" className="flex items-center gap-2">
//                 <div className="relative">
//                   <ShoppingCart className="h-5 w-5" />
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                     {state.items.reduce((total, item) => total + item.quantity, 0)}
//                   </span>
//                 </div>
//                 <span className="hidden lg:inline text-sm">Cart</span>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Search */}
//           <div className="lg:hidden relative mb-4">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//             <input
//               type="search"
//               placeholder="Search"
//               className="w-full pl-12 pr-4 py-2.5 text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           {/* Navigation */}
//           <nav className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block border-t border-gray-200 py-4`}>
//             <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
//                 <li>
//                   <Link to="/new-arrival" className="text-base hover:text-primary">
//                     New Arrival
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/best-seller" className="text-base hover:text-primary">
//                     Best Seller
//                   </Link>
//                 </li>

//                 {/* Occasion Dropdown */}
//                 <li className="relative group">
//                   <button
//                     className="text-base hover:text-primary flex items-center justify-between w-full lg:w-auto"
//                     onClick={() => toggleMobileDropdown("occasion")}
//                   >
//                     Occasion
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${openMobileDropdown === "occasion" ? "rotate-180" : ""}`}
//                     />
//                   </button>
//                   <div className="lg:absolute lg:top-full lg:left-0 mt-2 w-full lg:w-[800px] bg-white shadow-lg rounded-lg p-6 grid-cols-1 lg:grid-cols-3 gap-8 z-50 lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 lg:grid hidden">
//                     <div className="absolute top-0 left-0 w-full h-2 bg-transparent -translate-y-full"></div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-4">Upcoming Occasions</h3>
//                       <div className="flex items-center gap-2 text-red-600">
//                         <div className="bg-red-100 text-red-600 rounded px-2 py-1 text-sm">
//                           <span className="block text-xs">Feb</span>
//                           <span className="font-bold">14</span>
//                         </div>
//                         <span>Valentine</span>
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-4">Everyday Occasions</h3>
//                       <ul className="space-y-2 text-base">
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Anniversary
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Baby Gifts
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Memorial
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Pet Memorial
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-4">Seasonal Occasions</h3>
//                       <ul className="space-y-2 text-base">
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Halloween
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Fall Gifts
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Christmas Gifts
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Mother's Day
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Father's Day
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" className="hover:text-primary">
//                             Graduation
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   {/* Mobile Occasion Menu */}
//                   <div
//                     className={`lg:hidden mt-2 bg-gray-50 rounded-lg p-4 ${openMobileDropdown === "occasion" ? "block" : "hidden"}`}
//                   >
//                     <div className="space-y-4">
//                       <div>
//                         <h3 className="font-bold text-sm mb-2">Upcoming Occasions</h3>
//                         <div className="flex items-center gap-2 text-red-600">
//                           <div className="bg-red-100 text-red-600 rounded px-2 py-1 text-sm">
//                             <span className="block text-xs">Feb</span>
//                             <span className="font-bold">14</span>
//                           </div>
//                           <span>Valentine</span>
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-sm mb-2">Everyday Occasions</h3>
//                         <ul className="space-y-2">
//                           <li>
//                             <a href="#" className="text-sm">
//                               Anniversary
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="text-sm">
//                               Baby Gifts
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="text-sm">
//                               Memorial
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="text-sm">
//                               Pet Memorial
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-sm mb-2">Seasonal Occasions</h3>
//                         <ul className="space-y-2">
//                           <li>
//                             <a href="#" className="text-sm">
//                               Halloween
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="text-sm">
//                               Fall Gifts
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="text-sm">
//                               Christmas Gifts
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="text-sm">
//                               Mother's Day
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="text-sm">
//                               Father's Day
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#" className="text-sm">
//                               Graduation
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </li>

//                 {/* Recipients Dropdown */}
//                 <li className="relative group">
//                   <button
//                     className="text-base hover:text-primary flex items-center justify-between w-full lg:w-auto"
//                     onClick={() => toggleMobileDropdown("recipients")}
//                   >
//                     Recipients
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${openMobileDropdown === "recipients" ? "rotate-180" : ""}`}
//                     />
//                   </button>
//                   <div className="lg:absolute lg:top-full lg:left-0 mt-2 w-full lg:w-48 bg-white shadow-lg rounded-lg p-4 z-50 lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 lg:block hidden">
//                     <div className="absolute top-0 left-0 w-full h-2 bg-transparent -translate-y-full"></div>
//                     <ul className="space-y-2 text-base">
//                       <li>
//                         <a href="#" className="hover:text-primary">
//                           For Her
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="hover:text-primary">
//                           For Him
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="hover:text-primary">
//                           For Kids
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="hover:text-primary">
//                           For Pets
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* Mobile Recipients Menu */}
//                   <div
//                     className={`lg:hidden mt-2 bg-gray-50 rounded-lg p-4 ${openMobileDropdown === "recipients" ? "block" : "hidden"}`}
//                   >
//                     <ul className="space-y-2">
//                       <li>
//                         <a href="#" className="text-sm">
//                           For Her
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="text-sm">
//                           For Him
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="text-sm">
//                           For Kids
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="text-sm">
//                           For Pets
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>

//                 {/* Products Dropdown */}
//                 <li className="relative group">
//                   <button
//                     className="text-base hover:text-primary flex items-center justify-between w-full lg:w-auto"
//                     onClick={() => toggleMobileDropdown("products")}
//                   >
//                     Products
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${openMobileDropdown === "products" ? "rotate-180" : ""}`}
//                     />
//                   </button>
//                   <div className="lg:absolute lg:top-full lg:left-0 mt-2 w-full lg:w-48 bg-white shadow-lg rounded-lg p-4 z-50 lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 lg:block hidden">
//                     <div className="absolute top-0 left-0 w-full h-2 bg-transparent -translate-y-full"></div>
//                     <ul className="space-y-2 text-base">
//                       <li>
//                         <a href="#" className="hover:text-primary">
//                           Canvas Prints
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="hover:text-primary">
//                           Photo Frames
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="hover:text-primary">
//                           Mugs
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="hover:text-primary">
//                           Jewelry
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* Mobile Products Menu */}
//                   <div
//                     className={`lg:hidden mt-2 bg-gray-50 rounded-lg p-4 ${openMobileDropdown === "products" ? "block" : "hidden"}`}
//                   >
//                     <ul className="space-y-2">
//                       <li>
//                         <a href="#" className="text-sm">
//                           Canvas Prints
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="text-sm">
//                           Photo Frames
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="text-sm">
//                           Mugs
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#" className="text-sm">
//                           Jewelry
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>

//                 <li>
//                   <Link
//                     to="/valentine"
//                     className="inline-block bg-red-600 text-white px-6 py-2 text-base rounded-lg hover:bg-red-700"
//                   >
//                     ❄️ Valentine
//                   </Link>
//                 </li>
//               </div>
//               <li className="mt-4 lg:mt-0">
//                 <button
//                   onClick={() => navigate("/tracking")}
//                   className="flex items-center gap-2 w-full lg:w-auto border px-6 py-2 text-base rounded-lg hover:bg-gray-50"
//                 >
//                   <Search className="h-5 w-5" />
//                   Tracking Order
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </header>
//       </div>

//       <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
//     </>
//   )
// }

"use client"

import { useState } from "react"
import { User, ShoppingCart, ChevronDown, Menu, X, Search } from "lucide-react"
import { AuthModal } from "./auth-modal"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "@/layouts/cart-product/contexts/cart-context"
import { ProductSearch } from "./product-search"

export function SiteHeader() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const navigate = useNavigate()
  const { state } = useCart()

  const toggleMobileDropdown = (menu: string) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu)
  }

  return (
    <>
      <div className="w-full bg-white">
        <header className="container mx-auto px-4 lg:px-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4 lg:py-6">
            {/* Logo */}
            <div className="flex items-center">
              <button className="lg:hidden mr-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <Link to="/" className="flex-shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0402/7852/4065/files/logonentrang2.svg?v=1690601667"
                  alt="Famvibe"
                  className="h-8"
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-3xl mx-8">
              <ProductSearch />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button onClick={() => setIsAuthModalOpen(true)} className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="hidden lg:inline text-sm">Login</span>
              </button>
              <Link to="/cart" className="flex items-center gap-2">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {state.items.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                </div>
                <span className="hidden lg:inline text-sm">Cart</span>
              </Link>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden relative mb-4">
            <ProductSearch />
          </div>

          {/* Navigation */}
          <nav className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block border-t border-gray-200 py-4`}>
            <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
                <li>
                  <Link to="/new-arrival" className="text-base hover:text-primary">
                    New Arrival
                  </Link>
                </li>
                <li>
                  <Link to="/best-seller" className="text-base hover:text-primary">
                    Best Seller
                  </Link>
                </li>

                {/* Occasion Dropdown */}
                <li className="relative group">
                  <button
                    className="text-base hover:text-primary flex items-center justify-between w-full lg:w-auto"
                    onClick={() => toggleMobileDropdown("occasion")}
                  >
                    Occasion
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${openMobileDropdown === "occasion" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className="lg:absolute lg:top-full lg:left-0 mt-2 w-full lg:w-[800px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 z-50 lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 lg:grid hidden">
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
                  <div
                    className={`lg:hidden mt-2 bg-gray-50 rounded-lg p-4 ${openMobileDropdown === "occasion" ? "block" : "hidden"}`}
                  >
                    <div>
                      <h3 className="font-bold text-sm mb-2">Upcoming Occasions</h3>
                      <div className="flex items-center gap-2 text-red-600">
                        <div className="bg-red-100 text-red-600 rounded px-2 py-1 text-sm">
                          <span className="block text-xs">Feb</span>
                          <span className="font-bold">14</span>
                        </div>
                        <span>Valentine</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">Everyday Occasions</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-sm">
                            Anniversary
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm">
                            Baby Gifts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm">
                            Memorial
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm">
                            Pet Memorial
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">Seasonal Occasions</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-sm">
                            Halloween
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm">
                            Fall Gifts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm">
                            Christmas Gifts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm">
                            Mother's Day
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm">
                            Father's Day
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm">
                            Graduation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Recipients Dropdown */}
                <li className="relative group">
                  <button
                    className="text-base hover:text-primary flex items-center justify-between w-full lg:w-auto"
                    onClick={() => toggleMobileDropdown("recipients")}
                  >
                    Recipients
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${openMobileDropdown === "recipients" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className="lg:absolute lg:top-full lg:left-0 mt-2 w-full lg:w-48 bg-white shadow-lg rounded-lg p-4 z-50 lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 lg:block hidden">
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
                  <div
                    className={`lg:hidden mt-2 bg-gray-50 rounded-lg p-4 ${openMobileDropdown === "recipients" ? "block" : "hidden"}`}
                  >
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-sm">
                          For Her
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm">
                          For Him
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm">
                          For Kids
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm">
                          For Pets
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Products Dropdown */}
                <li className="relative group">
                  <button
                    className="text-base hover:text-primary flex items-center justify-between w-full lg:w-auto"
                    onClick={() => toggleMobileDropdown("products")}
                  >
                    Products
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${openMobileDropdown === "products" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className="lg:absolute lg:top-full lg:left-0 mt-2 w-full lg:w-48 bg-white shadow-lg rounded-lg p-4 z-50 lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 lg:block hidden">
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
                  <div
                    className={`lg:hidden mt-2 bg-gray-50 rounded-lg p-4 ${openMobileDropdown === "products" ? "block" : "hidden"}`}
                  >
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-sm">
                          Canvas Prints
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm">
                          Photo Frames
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm">
                          Mugs
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-sm">
                          Jewelry
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    to="/valentine"
                    className="inline-block bg-red-600 text-white px-6 py-2 text-base rounded-lg hover:bg-red-700"
                  >
                    ❄️ Valentine
                  </Link>
                </li>
              </div>
              <li className="mt-4 lg:mt-0">
                <button
                  onClick={() => navigate("/tracking")}
                  className="flex items-center gap-2 w-full lg:w-auto border px-6 py-2 text-base rounded-lg hover:bg-gray-50"
                >
                  <Search className="h-5 w-5" />
                  Tracking Order
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  )
}

