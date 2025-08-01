"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

interface Product {
  id: string
  name: string
  nameHindi: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  inStock: boolean
  description: string
}

interface ProductCatalogProps {
  addToCart: (item: Product) => void
}

export default function ProductCatalog({ addToCart }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products: Product[] = [
    {
      id: "1",
      name: "Kafan & Shawl",
      nameHindi: "कफन और शाल",
      price: 150,
      originalPrice: 200,
      image: "/placeholder.svg?height=200&width=200",
      category: "essential",
      rating: 4.8,
      inStock: true,
      description: "Premium quality white cotton kafan with traditional shawl",
    },
    {
      id: "2",
      name: "Puja Samagri Set",
      nameHindi: "पूजा सामग्री सेट",
      price: 80,
      image: "/placeholder.svg?height=200&width=200",
      category: "puja",
      rating: 4.7,
      inStock: true,
      description: "Complete set of fragrant puja materials for rituals",
    },
    {
      id: "3",
      name: "Sacred Thread Bundle",
      nameHindi: "सुतली और नाड़ा",
      price: 40,
      image: "/placeholder.svg?height=200&width=200",
      category: "essential",
      rating: 4.6,
      inStock: true,
      description: "Traditional sacred threads and ropes for ceremonies",
    },
    {
      id: "4",
      name: "Abir Gulal Set",
      nameHindi: "अबीर गुलाल सेट",
      price: 60,
      originalPrice: 80,
      image: "/placeholder.svg?height=200&width=200",
      category: "puja",
      rating: 4.9,
      inStock: true,
      description: "Pure and natural colored powders for rituals",
    },
    {
      id: "5",
      name: "Ghee & Resin",
      nameHindi: "घी और राल",
      price: 100,
      image: "/placeholder.svg?height=200&width=200",
      category: "essential",
      rating: 4.8,
      inStock: true,
      description: "Pure cow ghee and natural resin for sacred fire",
    },
    {
      id: "6",
      name: "Traditional Cap",
      nameHindi: "पारंपरिक टोपी",
      price: 90,
      image: "/placeholder.svg?height=200&width=200",
      category: "clothing",
      rating: 4.5,
      inStock: true,
      description: "Traditional ceremonial headwear",
    },
  ]

  const categories = [
    { id: "all", name: "All Products", nameHindi: "सभी उत्पाद" },
    { id: "essential", name: "Essential Items", nameHindi: "आवश्यक सामग्री" },
    { id: "puja", name: "Puja Materials", nameHindi: "पूजा सामग्री" },
    { id: "clothing", name: "Clothing", nameHindi: "वस्त्र" },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products / हमारे उत्पाद</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            धार्मिक विधि-विधान के अनुसार सभी आवश्यक सामग्री उच्च गुणवत्ता के साथ
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`${
                selectedCategory === category.id
                  ? "bg-amber-900 hover:bg-amber-800"
                  : "border-amber-900 text-amber-900 hover:bg-amber-50"
              }`}
            >
              {category.name} / {category.nameHindi}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-4">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                  {!product.inStock && <Badge className="absolute top-2 right-2 bg-gray-500">Out of Stock</Badge>}
                </div>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                <CardTitle className="text-lg mb-2">
                  {product.name}
                  <div className="text-sm font-normal text-gray-600 mt-1">{product.nameHindi}</div>
                </CardTitle>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-amber-900">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="w-full bg-amber-900 hover:bg-amber-800 disabled:bg-gray-300"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "Add to Cart / कार्ट में डालें" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
