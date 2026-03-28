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
      <div className="w-full max-w-7xl bg-parchment/80 backdrop-blur-md border border-forest/10 rounded-sm px-10 py-5 flex items-center justify-between shadow-xl">
        <Link href="/" className="text-2xl font-heading font-extrabold tracking-tighter text-forest group">
          Mijing <span className="text-terracotta transition-colors group-hover:text-forest">Foundation</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={cn(
                  "text-[13px] uppercase font-bold tracking-[0.2em] relative py-1 transition-colors duration-300",
                  isActive 
                    ? "text-terracotta" 
                    : "text-forest/60 hover:text-forest"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-terracotta"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        <Button className="rounded-sm px-8 bg-forest hover:bg-forest/90 text-parchment font-bold h-12 border-none text-[13px] uppercase tracking-widest transition-transform active:scale-95">
          Get Involved
        </Button>
      </div>
    </motion.nav>
  )
}
