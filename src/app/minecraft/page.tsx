import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gamepad2, Server, Users, Shield, Download, Cpu, HardDrive, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Minecraft Server Hosting",
  description: "High-performance Minecraft server hosting with mod support and DDoS protection",
}

const mcPlans = [
  {
    name: "Starter",
    price: "€2.99",
    period: "/mo",
    slots: 10,
    specs: { cpu: "2 vCPU", ram: "4 GB", storage: "10 GB" },
    features: ["DDoS Protection", "Mod Support", "One-Click Install", "Custom JAR"],
  },
  {
    name: "Standard",
    price: "€5.99",
    period: "/mo",
    slots: 30,
    specs: { cpu: "4 vCPU", ram: "8 GB", storage: "20 GB" },
    features: ["DDoS Protection", "Mod Support", "One-Click Install", "Custom JAR", "Backups"],
  },
  {
    name: "Premium",
    price: "€9.99",
    period: "/mo",
    slots: 60,
    specs: { cpu: "6 vCPU", ram: "12 GB", storage: "40 GB" },
    features: ["DDoS Protection", "Mod Support", "One-Click Install", "Custom JAR", "Backups", "Priority Support"],
  },
  {
    name: "Ultimate",
    price: "€19.99",
    period: "/mo",
    slots: 100,
    specs: { cpu: "8 vCPU", ram: "16 GB", storage: "80 GB" },
    features: ["DDoS Protection", "Mod Support", "One-Click Install", "Custom JAR", "Backups", "Priority Support", "Dedicated IP"],
  },
]

const versions = [
  "Paper 1.21.4",
  "Paper 1.20.4",
  "Spigot 1.20.4",
  "Forge 1.20.1",
  "Fabric 1.20.4",
  "Purpur 1.20.4",
]

const features = [
  { icon: Shield, title: "DDoS Protection", desc: "Always-on protection" },
  { icon: Download, title: "Instant Setup", desc: "Ready in seconds" },
  { icon: Server, title: "Mod Support", desc: "Spigot, Paper, Forge" },
  { icon: Cpu, title: "NVMe Storage", desc: "Lightning fast" },
]

export default function MinecraftPage() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Minecraft Server Hosting</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          High-performance Minecraft hosting with mod support, DDoS protection, and instant setup.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {mcPlans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{plan.slots} Players</span>
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

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Select Your Minecraft Version</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {versions.map((version) => (
              <Button key={version} variant="outline" className="justify-start">
                <Gamepad2 className="mr-2 h-4 w-4" />
                {version}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Minecraft Hosting</h2>
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