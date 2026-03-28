'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { motion } from "framer-motion"
import { fadeInUp, editorialEasing } from "@/lib/animations"

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
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: editorialEasing, delay: 0.2 }}
    >
      <div className="w-full max-w-7xl glass rounded-full px-10 py-5 flex items-center justify-between shadow-sm">
        <Link href="/" className="text-2xl font-heading font-extrabold tracking-tighter text-foreground group">
          Mijing <span className="text-primary transition-colors group-hover:text-primary/70">Foundation</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={cn(
                  "text-[15px] relative py-1 transition-colors duration-300",
                  isActive 
                    ? "font-bold text-primary" 
                    : "font-medium text-foreground/70 hover:text-primary"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-bold h-12 border-none text-[15px] transition-transform active:scale-95">
          Get Involved
        </Button>
      </div>
    </motion.nav>
  )
}
