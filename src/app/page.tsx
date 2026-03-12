import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Globe, Gamepad2, Shield, Zap, Headphones, Crown } from "lucide-react"

const services = [
  {
    icon: Server,
    title: "VPS & Root Server",
    description: "High-performance dedicated servers with full root access. Perfect for developers and businesses.",
    href: "/vps",
    price: "From €9.99/mo",
  },
  {
    icon: Globe,
    title: "Domains",
    description: "Register your perfect domain name. Free DNS management and domain transfer available.",
    href: "/domains",
    price: "From €4.99/yr",
  },
  {
    icon: Gamepad2,
    title: "Minecraft Server",
    description: "Optimized Minecraft hosting with mod support, DDoS protection, and instant setup.",
    href: "/minecraft",
    price: "From €2.99/mo",
  },
  {
    icon: Gamepad2,
    title: "Hytale Server",
    description: "Dedicated Hytale server hosting with high CPU allocation and low latency worldwide.",
    href: "/hytale",
    price: "From €14.99/mo",
  },
]

const features = [
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade DDoS protection included with all services",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Guaranteed uptime with redundant infrastructure",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support via ticket and live chat",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Professional Hosting for{" "}
              <span className="text-primary">Every Need</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              High-performance VPS, domains, Minecraft & Hytale servers. 
              Reliable, fast, and backed by 24/7 support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#services">View Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/reseller">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
            <p className="mt-4 text-muted-foreground">
              Choose the perfect hosting solution for your needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.href} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <service.icon className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-4">{service.price}</p>
                  <Button asChild className="w-full">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
            <p className="mt-4 text-muted-foreground">
              Enterprise-grade infrastructure at competitive prices
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center">
              <Crown className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-bold mb-4">Become a Reseller or Partner</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Start your own hosting business with our reseller plans or become 
                a partner to earn commissions on referrals.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/reseller">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}