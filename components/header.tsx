"use client"

import { useState, useEffect } from "react"
import { Menu, X, ShoppingCart, Search, User } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-foreground">
              Harvest<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Home", "Products", "Recipes", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground/70" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <User className="w-5 h-5 text-foreground/70" />
            </button>
            <button className="relative p-2 hover:bg-secondary rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-foreground/70" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </button>
            <button className="ml-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col gap-2">
              {["Home", "Products", "Recipes", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 mx-4 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full">
                Shop Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
