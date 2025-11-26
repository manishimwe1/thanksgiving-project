"use client"

import { useEffect, useRef, useState } from "react"
import { Truck, Shield, Headphones, Award } from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  )
}

const features = [
  { icon: Truck, title: "Free Delivery", desc: "On orders over $50" },
  { icon: Shield, title: "Quality Guarantee", desc: "100% organic certified" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support team" },
  { icon: Award, title: "Best Quality", desc: "Premium selection" },
]

export default function ProductStory() {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/fresh-mixed-fruits.jpg"
                  alt="Our organic farm"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-5 rounded-2xl shadow-xl border border-border animate-bounce-gentle">
                <p className="text-sm text-muted-foreground mb-1">Providing Best</p>
                <p className="text-sm text-muted-foreground">Service For</p>
                <p className="text-3xl font-bold text-primary">40 Years</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              We Provide Best <span className="text-primary">Organic Products</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For over four decades, American Harvest Foods has been committed to bringing farm-fresh, organic produce
              directly to your table. We partner with local farmers who share our passion for sustainable agriculture
              and quality.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every product in our collection is carefully selected to ensure the highest standards of freshness, taste,
              and nutritional value for your family.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <AnimatedCounter target={200} suffix="+" />
                <p className="text-sm text-muted-foreground mt-1">Products</p>
              </div>
              <div className="text-center">
                <AnimatedCounter target={150} suffix="+" />
                <p className="text-sm text-muted-foreground mt-1">Farm Partners</p>
              </div>
              <div className="text-center">
                <AnimatedCounter target={630} suffix="+" />
                <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1">
              Discover More
            </button>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
