import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Monitor,
  Printer,
  Network,
  Camera,
  GraduationCap,
  Wrench,
  CheckCircle,
  Laptop,
  HardDrive,
  Wifi,
  Shield,
  Settings,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services - AUGU Smart Electronic Service Ltd | Computer Repair, CCTV, Networking in Kigali",
  description:
    "Explore the comprehensive tech solutions offered by AUGU Smart Electronic Service Ltd, including computer repair, laptop repair, printer repair, CCTV installation, networking, and professional IT training in Kigali, Rwanda.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Computer Repair & Maintenance",
      description:
        "Professional diagnosis and repair of desktop computers, hardware upgrades, virus removal, and system optimization.",
      features: [
        "Hardware diagnostics and repair",
        "Software troubleshooting",
        "Virus and malware removal",
        "Operating system installation",
        "Data recovery services",
        "Performance optimization",
      ],
    },
    {
      icon: Laptop,
      title: "Laptop Repair Services",
      description:
        "Specialized laptop repair including screen replacement, keyboard repair, battery replacement, and motherboard repair.",
      features: [
        "Screen and LCD replacement",
        "Keyboard and touchpad repair",
        "Battery replacement",
        "Motherboard diagnostics",
        "Charging port repair",
        "Overheating solutions",
      ],
    },
    {
      icon: Printer,
      title: "Printer & Photocopier Repair",
      description:
        "Expert repair and maintenance for all brands of printers, scanners, and photocopiers with genuine parts.",
      features: [
        "All brands supported",
        "Ink and toner services",
        "Paper jam solutions",
        "Print quality optimization",
        "Network printer setup",
        "Regular maintenance plans",
      ],
    },
    {
      icon: Network,
      title: "Networking & Internet Services",
      description: "Complete network infrastructure setup, configuration, and management for homes and businesses.",
      features: [
        "Network design and setup",
        "Router configuration",
        "WiFi optimization",
        "Network security",
        "VPN setup",
        "Network troubleshooting",
      ],
    },
    {
      icon: Camera,
      title: "CCTV Installation & Security",
      description:
        "Professional CCTV camera installation and security system design for comprehensive property protection.",
      features: [
        "HD camera installation",
        "Remote monitoring setup",
        "DVR/NVR configuration",
        "Motion detection systems",
        "Night vision cameras",
        "24/7 recording solutions",
      ],
    },
    {
      icon: GraduationCap,
      title: "Professional Training & Internship",
      description: "Hands-on training programs in computer repair, networking, and IT skills development.",
      features: [
        "Computer repair training",
        "Networking fundamentals",
        "CCTV installation training",
        "Internship opportunities",
        "Certification programs",
        "Practical experience",
      ],
    },
  ]

  const additionalServices = [
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "Recover lost data from hard drives, SSDs, and USB drives",
    },
    { icon: Wifi, title: "WiFi Solutions", description: "WiFi network setup and signal optimization" },
    { icon: Shield, title: "Security Systems", description: "Comprehensive security system installation" },
    { icon: Settings, title: "System Upgrades", description: "Hardware and software upgrade services" },
    { icon: Users, title: "IT Consulting", description: "Professional IT consulting for businesses" },
    { icon: Wrench, title: "Emergency Support", description: "24/7 emergency tech support available" },
  ]

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Comprehensive technology solutions for all your electronic and IT needs. Professional, reliable, and
                affordable.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className="grid gap-8 lg:grid-cols-2 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Card className="shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative h-[300px] md:h-[400px]">
                        <img
                          src={`/.jpg?height=400&width=600&query=${service.title.toLowerCase().replace(/&/g, "and")}`}
                          alt={service.title}
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                More ways we can help with your technology needs
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent-foreground flex-shrink-0">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Tech Support?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get in touch with us today for professional service and support. We're ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request Service</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
