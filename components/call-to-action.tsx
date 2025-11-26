"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Mail } from "lucide-react"

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="absolute top-10 left-10 w-16 h-16 animate-organic-float opacity-20">
        <img src="fresh-carrot.png" alt="" className="w-full h-full rounded-full" />
      </div>
      <div
        className="absolute bottom-10 right-10 w-20 h-20 animate-organic-float opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <img src="/fresh-mixed-fruits.jpg" alt="" className="w-full h-full rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground text-sm font-semibold rounded-full mb-6">
            Newsletter
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Subscribe For Latest Offers
          </h2>
        </div>

        <p
          className={`text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get exclusive Thanksgiving recipes, seasonal discounts, and farm-fresh updates delivered straight to your
          inbox.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 max-w-lg mx-auto transition-all duration-700 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-primary-foreground text-foreground rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
            Subscribe
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
