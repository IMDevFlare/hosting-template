import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Cpu, HardDrive, Shield, Zap, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "VPS & Root Server Hosting",
  description: "High-performance VPS and dedicated root servers with full root access",
}

const vpsPlans = [
  {
    name: "VPS Starter",
    price: "€9.99",
    period: "/mo",
    specs: {
      cpu: "2 vCPU",
      ram: "4 GB",
      storage: "50 GB NVMe",
      bandwidth: "1 TB",
    },
    features: ["Full Root Access", "DDoS Protection", "Automated Backups", "99.9% Uptime"],
  },
  {
    name: "VPS Pro",
    price: "€19.99",
    period: "/mo",
    specs: {
      cpu: "4 vCPU",
      ram: "8 GB",
      storage: "100 GB NVMe",
      bandwidth: "2 TB",
    },
    features: ["Full Root Access", "DDoS Protection", "Automated Backups", "99.9% Uptime", "Priority Support"],
  },
  {
    name: "VPS Premium",
    price: "€39.99",
    period: "/mo",
    specs: {
      cpu: "8 vCPU",
      ram: "16 GB",
      storage: "200 GB NVMe",
      bandwidth: "4 TB",
    },
    features: ["Full Root Access", "DDoS Protection", "Automated Backups", "99.9% Uptime", "Priority Support", "Free SSL"],
  },
]

const dedicatedPlans = [
  {
    name: "Root Server Entry",
    price: "€49.99",
    period: "/mo",
    specs: {
      cpu: "Intel Xeon E-2388G (8 cores)",
      ram: "32 GB ECC",
      storage: "2x 500 GB NVMe",
      bandwidth: "Unlimited",
    },
    features: ["Dedicated Hardware", "DDoS Protection", "RAID1 Storage", "24/7 Monitoring"],
  },
  {
    name: "Root Server Pro",
    price: "€89.99",
    period: "/mo",
    specs: {
      cpu: "Intel Xeon Silver 4314 (16 cores)",
      ram: "64 GB ECC",
      storage: "2x 1 TB NVMe",
      bandwidth: "Unlimited",
    },
    features: ["Dedicated Hardware", "DDoS Protection", "RAID1 Storage", "24/7 Monitoring", "Priority Support"],
  },
  {
    name: "Root Server Elite",
    price: "€149.99",
    period: "/mo",
    specs: {
      cpu: "AMD EPYC 7443 (24 cores)",
      ram: "128 GB ECC",
      storage: "2x 2 TB NVMe",
      bandwidth: "Unlimited",
    },
    features: ["Dedicated Hardware", "DDoS Protection", "RAID1 Storage", "24/7 Monitoring", "Priority Support", "Free IP Block"],
  },
]

export default function VPSPage() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">VPS & Root Server Hosting</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          High-performance virtual servers with full root access. Deploy in minutes.
        </p>
      </div>

      <Tabs defaultValue="vps" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="vps">Virtual Private Server</TabsTrigger>
          <TabsTrigger value="dedicated">Dedicated Root Server</TabsTrigger>
        </TabsList>
        
        <TabsContent value="vps" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {vpsPlans.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-primary" />
                      <span>{plan.specs.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-primary" />
                      <span>{plan.specs.ram} RAM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-primary" />
                      <span>{plan.specs.storage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{plan.specs.bandwidth}</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Order Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="dedicated" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {dedicatedPlans.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-primary" />
                      <span>{plan.specs.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-primary" />
                      <span>{plan.specs.ram} RAM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-primary" />
                      <span>{plan.specs.storage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{plan.specs.bandwidth}</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Order Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">All Plans Include</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Shield, title: "DDoS Protection", desc: "Up to 10Gbps mitigation" },
            { icon: Zap, title: "99.9% Uptime", desc: "SLA guarantee" },
            { icon: Server, title: "NVMe Storage", desc: "Lightning fast I/O" },
            { icon: Check, title: "IPv4 & IPv6", desc: "Free IP addresses" },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-6 text-center">
                <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}