"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Leaf, Check } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = ["100% Organic Products", "Farm Fresh Quality", "Free Delivery"]

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-linear-to-br from-background via-background to-secondary/30">
      {/* Decorative floating vegetables */}
      <div className="absolute top-32 right-10 w-20 h-20 animate-organic-float -z-10" style={{ animationDelay: "0s" }}>
        <img src="/fresh-green-lettuce-leaf.jpg" alt="fresh green" className="w-20 h-20 object-contain rounded-full" />
      </div>
      <div className="absolute top-48 right-32 w-16 h-16 animate-organic-float overflow-hidden" style={{ animationDelay: "1s" }}>
        <img src="/red-tomato.png" alt="" className=" object-contain w-16 h-16 rounded-full" />
      </div>
      <div className="absolute bottom-32 right-20 w-14 h-14 animate-organic-float" style={{ animationDelay: "2s" }}>
        <img src="/fresh-carrot.png" alt="" className="w-full h-full object-contain rounded-full" />
      </div>
      <div
        className="absolute top-40 left-10 w-12 h-12 animate-organic-float hidden lg:block rounded-full "
        style={{ animationDelay: "0.5s" }}
      >
        <img src="/green-leaf-herb-basil.jpg" alt="" className="w-full h-full rounded-full object-contain -z-10" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6 -z-10">
                <Leaf className="w-4 h-4" />
                Organic & Healthy Food
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-100 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Providing Tasty &{" "}
              <span className="text-primary relative">
                Healthy Food
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-draw text-primary/30"
                  />
                </svg>
              </span>
            </h1>

            <p
              className={`text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg transition-all duration-700 delay-200 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Celebrate this Thanksgiving with farm-fresh organic produce and premium ingredients. We source directly
              from local farms to bring you the best quality for your holiday table.
            </p>

            {/* Feature List */}
            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 flex items-center justify-center gap-2">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              {/* Main circular image container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse-slow" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-background shadow-2xl">
                  <img
                    src="/thanksgiving-harvest-basket-with-pumpkins-vegetabl.jpg"
                    alt="Fresh organic harvest vegetables"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-5 py-3 rounded-2xl shadow-lg animate-bounce-gentle">
                  <p className="text-2xl font-bold">40+</p>
                  <p className="text-xs">Years of Trust</p>
                </div>

                {/* Small floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-background rounded-full shadow-lg flex items-center justify-center animate-organic-float overflow-hidden">
                  <img src="/organic-pumpkin.jpg" alt="" className="w-12 h-12 object-contain rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
