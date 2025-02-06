
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"

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
          <Link to="/new-arrival" className="hover:text-primary">
            New Arrival
          </Link>
          
          <a href="/best-seller" className="hover:text-primary">
            Best Seller
          </a>

          <div className="relative group">
            <button className="hover:text-primary flex items-center gap-1">
              Occasion
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
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
              Recipients
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
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
              Products
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
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