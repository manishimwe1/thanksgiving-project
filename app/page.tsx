import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import Products from "@/components/products"
import ProductStory from "@/components/product-story"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <Products />
      <ProductStory />
      <CallToAction />
      <Footer />
    </main>
  )
}
