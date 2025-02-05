"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface FilterSectionProps {
  title: string
  children: React.ReactNode
}

const FilterSection = ({ title, children }: FilterSectionProps) => {
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

export default function FilterSidebar() {
  const occasions = ["Valentine's day", "Wedding", "Mother's day", "Christmas", "Father's day"]
  const giftFor = ["Granddaughter", "Grandson", "Friend", "Grandma", "Grandpa", "Dad", "Son", "Mom"]
  const productTypes = ["T Shirt", "Mug", "Pillow", "Poster", "Fridge Magnet", "3D T Shirts"]
  const colors = ["black", "white", "navy", "pink", "purple", "lightblue"]

  return (
    <div className="w-72 bg-background p-4 border-r">
      <div className="space-y-6">
        <FilterSection title="Gift for">
          <div className="flex flex-wrap gap-2">
            {giftFor.map((item) => (
              <Button key={item} variant="outline" className="text-sm">
                {item}
              </Button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Product Type">
          <div className="flex flex-wrap gap-2">
            {productTypes.map((type) => (
              <Button key={type} variant="outline" className="text-sm">
                {type}
              </Button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Occasion">
          <div className="flex flex-wrap gap-2">
            {occasions.map((occasion) => (
              <Button key={occasion} variant="outline" className="text-sm">
                {occasion}
              </Button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Color">
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <div
                key={color}
                className="w-6 h-6 rounded-full border cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Price">
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <Checkbox id="under25" />
              <span>Under $25 (242)</span>
            </label>
            <label className="flex items-center space-x-2">
              <Checkbox id="above25" />
              <span>Above $25 (55)</span>
            </label>
          </div>
        </FilterSection>
      </div>
    </div>
  )
}

