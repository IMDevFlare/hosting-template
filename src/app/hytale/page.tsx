import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Server, Shield, Cpu, HardDrive, Users, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Hytale Server Hosting",
  description: "High-performance Hytale server hosting with low latency worldwide",
}

const hytalePlans = [
  {
    name: "Hytale Mini",
    price: "€14.99",
    period: "/mo",
    players: 20,
    specs: { cpu: "4 vCPU", ram: "8 GB", storage: "30 GB NVMe" },
    features: ["DDoS Protection", "Low Latency", "Automatic Backups", "Mod Support"],
  },
  {
    name: "Hytale Standard",
    price: "€24.99",
    period: "/mo",
    players: 50,
    specs: { cpu: "8 vCPU", ram: "16 GB", storage: "60 GB NVMe" },
    features: ["DDoS Protection", "Low Latency", "Automatic Backups", "Mod Support", "Priority Support"],
  },
  {
    name: "Hytale Pro",
    price: "€44.99",
    period: "/mo",
    players: 100,
    specs: { cpu: "12 vCPU", ram: "32 GB", storage: "120 GB NVMe" },
    features: ["DDoS Protection", "Low Latency", "Automatic Backups", "Mod Support", "Priority Support", "Custom JAR"],
  },
  {
    name: "Hytale Enterprise",
    price: "€89.99",
    period: "/mo",
    players: "Unlimited",
    specs: { cpu: "16 vCPU", ram: "64 GB", storage: "240 GB NVMe" },
    features: ["DDoS Protection", "Low Latency", "Automatic Backups", "Mod Support", "Priority Support", "Custom JAR", "Dedicated IP"],
  },
]

const features = [
  { icon: Shield, title: "DDoS Protection", desc: "Enterprise-grade protection" },
  { icon: Cpu, title: "High CPU", desc: "Optimized for Hytale" },
  { icon: Server, title: "NVMe Storage", desc: "Lightning fast load times" },
  { icon: Users, title: "Global Network", desc: "Servers worldwide" },
]

export default function HytalePage() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Hytale Server Hosting</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          High-performance Hytale server hosting optimized for the best gaming experience. 
          Low latency worldwide with enterprise-grade DDoS protection.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {hytalePlans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{plan.players} Players</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-primary" /> {plan.specs.cpu}
                </li>
                <li className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" /> {plan.specs.ram} RAM
                </li>
                <li className="flex items-center gap-2">
                  <HardDrive className="h-4 w-4 text-primary" /> {plan.specs.storage}
                </li>
              </ul>
              <ul className="space-y-1 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Order Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Hytale Server Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Minimum</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>4 vCPU Cores</li>
                  <li>8 GB RAM</li>
                  <li>30 GB Storage</li>
                  <li>Java 17+</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Recommended</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>8+ vCPU Cores</li>
                  <li>16+ GB RAM</li>
                  <li>60+ GB NVMe Storage</li>
                  <li>Java 17+</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Hytale Hosting</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="pt-6 text-center">
                <feature.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}