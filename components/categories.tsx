"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const categories = [
  { name: "Vegetables", image: "/fresh-mixed-vegetables.jpg", count: "45+ Items" },
  { name: "Fruits", image: "/fresh-mixed-fruits.jpg", count: "38+ Items" },
  { name: "Organic", image: "/organic-produce-basket.jpg", count: "52+ Items" },
  { name: "Spices", image: "/colorful-spices-herbs.jpg", count: "28+ Items" },
  { name: "Dairy", image: "/fresh-dairy-products-milk-cheese.jpg", count: "22+ Items" },
  { name: "Grains", image: "/whole-grains-bread-wheat.jpg", count: "18+ Items" },
]

export default function Categories() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">Categories</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Popular Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of fresh, organic products perfect for your Thanksgiving celebration
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`group cursor-pointer transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-secondary/50 hover:bg-primary/10 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-primary/20">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-background p-2 shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 rounded-full"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-700 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
            View All Categories
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
