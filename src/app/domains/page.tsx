import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Globe, Search, Shield, Check, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Domain Registration",
  description: "Register your perfect domain name with free DNS management",
}

const domainExtensions = [
  { ext: ".com", price: "€12.99", popular: true },
  { ext: ".de", price: "€9.99", popular: true },
  { ext: ".net", price: "€12.99", popular: false },
  { ext: ".org", price: "€12.99", popular: false },
  { ext: ".io", price: "€39.99", popular: true },
  { ext: ".dev", price: "€14.99", popular: false },
  { ext: ".app", price: "€14.99", popular: false },
  { ext: ".xyz", price: "€4.99", popular: false },
  { ext: ".eu", price: "€9.99", popular: false },
  { ext: ".co", price: "€19.99", popular: false },
]

const features = [
  { icon: Shield, title: "Domain Privacy", desc: "Free WHOIS privacy protection" },
  { icon: Globe, title: "DNS Management", desc: "Free DNS hosting and management" },
  { icon: Check, title: "DNSSEC", desc: "Enhanced security for your domain" },
  { icon: Star, title: "Auto-Renewal", desc: "Never lose your domain" },
]

export default function DomainsPage() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Domain Registration</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find and register your perfect domain name. Instant activation.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto mb-12">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Enter your domain name" 
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button size="lg" className="h-12 px-8">Search</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Enter without www or https:// (e.g., mydomain.com)
          </p>
        </CardContent>
      </Card>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Popular Extensions</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {domainExtensions.map((domain) => (
            <Card key={domain.ext} className={domain.popular ? "border-primary" : ""}>
              <CardContent className="pt-4 text-center">
                <span className="text-lg font-semibold">{domain.ext}</span>
                <p className="text-primary font-bold">{domain.price}/yr</p>
                {domain.popular && (
                  <span className="text-xs text-primary font-medium">Popular</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Transfer Your Domain</h2>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">
              Transfer your existing domain to us and get 1 year free extension
            </p>
            <Button variant="outline">Start Transfer</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Why Register With Us</h2>
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