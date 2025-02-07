
import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export interface FilterState {
  giftFor: string[]
  productType: string[]
  occasions: string[]
  colors: string[]
  priceRanges: string[]
}

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void
  productCounts: {
    giftFor: Record<string, number>
    productType: Record<string, number>
    occasions: Record<string, number>
    colors: Record<string, number>
    price: Record<string, number>
  }
}

interface FilterSectionProps {
  title: string
  children: React.ReactNode
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div>
      <button
        className="flex items-center justify-between w-full mb-2 hover:bg-muted p-2 rounded-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>
      <div className={`transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-0"} overflow-hidden`}>
        {children}
      </div>
    </div>
  )
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange, productCounts }) => {
  const [filters, setFilters] = useState<FilterState>({
    giftFor: [],
    productType: [],
    occasions: [],
    colors: [],
    priceRanges: [],
  })
  const [isOpen, setIsOpen] = useState(false)

  const occasions = ["Valentine's day", "Wedding", "Mother's day", "Christmas", "Father's day", "Birthday"]
  const giftFor = ["Granddaughter", "Grandson", "Friend", "Grandma", "Grandpa", "Dad", "Son", "Mom", "Dog", "Family"]
  const productTypes = ["T Shirt", "Mug", "Pillow", "Poster", "Fridge Magnet", "3D T Shirts"]
  const colors = ["black", "white", "navy", "pink", "purple", "lightblue"]

  const handleFilterChange = (category: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev }
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter((item) => item !== value)
      } else {
        newFilters[category] = [...newFilters[category], value]
      }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  return (
    <>
      <button
        className="lg:hidden fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filters
      </button>
      <div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:w-72 lg:bg-transparent`}
      >
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <h2 className="text-xl font-bold">Filters</h2>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
          <div className="space-y-6">
            <FilterSection title="Gift for">
              <div className="flex flex-col gap-2">
                {giftFor.map((item) => (
                  <label key={item} className="flex items-center space-x-2">
                    <Checkbox
                      checked={filters.giftFor.includes(item)}
                      onCheckedChange={() => handleFilterChange("giftFor", item)}
                    />
                    <span>
                      {item} ({productCounts.giftFor[item] || 0})
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Product Type">
              <div className="flex flex-col gap-2">
                {productTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <Checkbox
                      checked={filters.productType.includes(type)}
                      onCheckedChange={() => handleFilterChange("productType", type)}
                    />
                    <span>
                      {type} ({productCounts.productType[type] || 0})
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Occasion">
              <div className="flex flex-col gap-2">
                {occasions.map((occasion) => (
                  <label key={occasion} className="flex items-center space-x-2">
                    <Checkbox
                      checked={filters.occasions.includes(occasion)}
                      onCheckedChange={() => handleFilterChange("occasions", occasion)}
                    />
                    <span>
                      {occasion} ({productCounts.occasions[occasion] || 0})
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Color">
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full border cursor-pointer transition-all ${
                      filters.colors.includes(color) ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleFilterChange("colors", color)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Price">
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <Checkbox
                    checked={filters.priceRanges.includes("under25")}
                    onCheckedChange={() => handleFilterChange("priceRanges", "under25")}
                  />
                  <span>Under $25 ({productCounts.price.under25 || 0})</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox
                    checked={filters.priceRanges.includes("above25")}
                    onCheckedChange={() => handleFilterChange("priceRanges", "above25")}
                  />
                  <span>Above $25 ({productCounts.price.above25 || 0})</span>
                </label>
              </div>
            </FilterSection>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterSidebar

