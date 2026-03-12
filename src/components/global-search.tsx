"use client"

import * as React from "react"
import { Calculator, Calendar, CreditCard, Settings, Smile, User, Server, Globe, Gamepad2, Crown, Search } from "lucide-react"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

const pages = [
  {
    name: "Home",
    url: "/",
    icon: Search,
  },
  {
    name: "VPS & Root Server",
    url: "/vps",
    icon: Server,
  },
  {
    name: "Domains",
    url: "/domains",
    icon: Globe,
  },
  {
    name: "Minecraft Server",
    url: "/minecraft",
    icon: Gamepad2,
  },
  {
    name: "Hytale Server",
    url: "/hytale",
    icon: Gamepad2,
  },
  {
    name: "Reseller & Partner",
    url: "/reseller",
    icon: Crown,
  },
]

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search services...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search services, pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem key={page.url} onSelect={() => {
                window.location.href = page.url
                setOpen(false)
              }}>
                <page.icon className="mr-2 h-4 w-4" />
                <span>{page.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => {
              window.location.href = "/#services"
              setOpen(false)
            }}>
              <Server className="mr-2 h-4 w-4" />
              <span>View all services</span>
            </CommandItem>
            <CommandItem onSelect={() => {
              window.location.href = "/reseller"
              setOpen(false)
            }}>
              <Crown className="mr-2 h-4 w-4" />
              <span>Apply as partner</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}