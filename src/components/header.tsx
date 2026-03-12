"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Server, Globe, Gamepad2, Crown } from "lucide-react"
import { GlobalSearch } from "./global-search"

const services = [
  { name: "VPS & Root Server", url: "/vps", icon: Server },
  { name: "Domains", url: "/domains", icon: Globe },
  { name: "Minecraft Server", url: "/minecraft", icon: Gamepad2 },
  { name: "Hytale Server", url: "/hytale", icon: Gamepad2 },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Server className="h-6 w-6" />
            <span className="font-bold text-xl">HostPro</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Services
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {services.map((service) => (
                  <DropdownMenuItem key={service.url} asChild>
                    <Link href={service.url} className="flex items-center gap-2">
                      <service.icon className="h-4 w-4" />
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/reseller" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Reseller & Partner
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <GlobalSearch />
          </div>
          <Button variant="default" className="hidden sm:flex">
            Client Area
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <div className="md:hidden mb-4">
                  <GlobalSearch />
                </div>
                {services.map((service) => (
                  <Link
                    key={service.url}
                    href={service.url}
                    className="flex items-center gap-2 text-lg font-medium"
                  >
                    <service.icon className="h-5 w-5" />
                    {service.name}
                  </Link>
                ))}
                <Link
                  href="/reseller"
                  className="flex items-center gap-2 text-lg font-medium"
                >
                  <Crown className="h-5 w-5" />
                  Reseller & Partner
                </Link>
                <Button className="mt-4">Client Area</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}