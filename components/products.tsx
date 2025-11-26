"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ShoppingCart, Heart } from "lucide-react"

const products = [
  {
    name: "Organic Pumpkin",
    price: "$12.99",
    originalPrice: "$15.99",
    rating: 4.8,
    reviews: 124,
    image: "/fresh-organic-pumpkin.jpg",
    badge: "Sale",
  },
  {
    name: "Fresh Cranberries",
    price: "$8.49",
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: "/fresh-red-cranberries-bowl.jpg",
    badge: "New",
  },
  {
    name: "Sweet Potatoes",
    price: "$6.99",
    originalPrice: "$8.99",
    rating: 4.7,
    reviews: 156,
    image: "/fresh-sweet-potatoes.png",
    badge: "Popular",
  },
  {
    name: "Green Beans",
    price: "$4.99",
    originalPrice: null,
    rating: 4.6,
    reviews: 98,
    image: "/fresh-green-beans.jpg",
    badge: null,
  },
  {
    name: "Brussels Sprouts",
    price: "$7.49",
    originalPrice: null,
    rating: 4.5,
    reviews: 67,
    image: "/fresh-brussels-sprouts.jpg",
    badge: null,
  },
  {
    name: "Herb Bundle",
    price: "$5.99",
    originalPrice: "$7.99",
    rating: 4.9,
    reviews: 203,
    image: "/fresh-herbs-rosemary-thyme-sage-bundle.jpg",
    badge: "Best Seller",
  },
]

export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">Our Products</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Thanksgiving Essentials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hand-picked fresh produce for your perfect holiday feast
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-red-400">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative p-6 bg-secondary/50 w-full h-48 overflow-hidden ">
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${
                      product.badge === "Sale"
                        ? "bg-accent text-accent-foreground"
                        : product.badge === "New"
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/10 text-foreground"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-4 right-4 w-9 h-9 bg-background rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4" />
                </button>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="fill mx-auto object-fill group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors hover:scale-110 active:scale-95">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
