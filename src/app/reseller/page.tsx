import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Crown, Users, Percent, Shield, Check, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Reseller & Partner Program",
  description: "Apply to become a reseller or partner and start your own hosting business",
}

const resellerPlans = [
  {
    name: "Starter",
    price: "€29.99",
    period: "/mo",
    servers: 10,
    discount: "20%",
    features: ["10 VPS/Game Servers", "20% Discount", "White Label", "API Access"],
  },
  {
    name: "Business",
    price: "€79.99",
    period: "/mo",
    servers: 50,
    discount: "30%",
    features: ["50 VPS/Game Servers", "30% Discount", "White Label", "API Access", "Priority Support"],
  },
  {
    name: "Enterprise",
    price: "€199.99",
    period: "/mo",
    servers: "Unlimited",
    discount: "40%",
    features: ["Unlimited Servers", "40% Discount", "White Label", "API Access", "Priority Support", "Custom Branding"],
  },
]

const partnerBenefits = [
  { icon: Percent, title: "Up to 40% Commission", desc: "Earn recurring commission on all referrals" },
  { icon: Crown, title: "Priority Access", desc: "Get early access to new products and features" },
  { icon: Users, title: "Dedicated Manager", desc: "Personal account manager for enterprise partners" },
  { icon: Shield, title: "Marketing Assets", desc: "Co-branded marketing materials and banners" },
]

export default function ResellerPage() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Reseller & Partner Program</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start your own hosting business with our reseller plans or earn commissions as a partner.
        </p>
      </div>

      <Tabs defaultValue="reseller" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="reseller">Reseller Program</TabsTrigger>
          <TabsTrigger value="partner">Partner Program</TabsTrigger>
        </TabsList>
        
        <TabsContent value="reseller" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {resellerPlans.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-primary">{plan.discount} Discount</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> {plan.servers} Servers
                    </li>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="partner" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="pt-6">
                  <benefit.icon className="h-8 w-8 mb-3 text-primary" />
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Apply Now</CardTitle>
            <CardDescription>Fill out the form below to apply for our reseller or partner program</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 890" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name (Optional)</Label>
                <Input id="company" placeholder="Your Company" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="program">Program</Label>
                  <Select required>
                    <SelectTrigger id="program">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reseller-starter">Reseller - Starter</SelectItem>
                      <SelectItem value="reseller-business">Reseller - Business</SelectItem>
                      <SelectItem value="reseller-enterprise">Reseller - Enterprise</SelectItem>
                      <SelectItem value="partner">Partner Program</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your experience and why you want to join our program..."
                  rows={4}
                />
              </div>
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}