'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-7xl glass rounded-full px-10 py-5 flex items-center justify-between shadow-sm">
        <Link href="/" className="text-2xl font-heading font-extrabold tracking-tighter text-foreground">
          Mijing Foundation
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={cn(
                  "text-[15px] transition-all duration-300",
                  isActive 
                    ? "font-bold text-primary border-b-2 border-primary pb-1" 
                    : "font-medium text-foreground/70 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-bold h-12 border-none text-[15px]">
          Get Involved
        </Button>
      </div>
    </nav>
  )
}
