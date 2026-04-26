'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { editorialEasing } from '@/lib/animations'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { href: string; label: string }[]
  pathname: string
}

export function MobileMenu({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.6, ease: editorialEasing }}
          className="fixed inset-0 z-[100] bg-forest flex flex-col p-8 md:hidden overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <Link href="/" onClick={onClose} className="text-xl font-heading font-extrabold tracking-tighter text-parchment">
              Mijing <span className="text-terracotta">Foundation</span>
            </Link>
            <button 
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center bg-parchment/10 text-parchment rounded-sm active:scale-90 transition-transform"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center space-y-6">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "group flex items-center justify-between py-2 text-4xl font-heading font-black tracking-tighter uppercase transition-colors",
                      isActive ? "text-terracotta" : "text-parchment/70 hover:text-parchment"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowRight 
                      className={cn(
                        "transition-transform",
                        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                      )} 
                    />
                  </Link>
                  <div className={cn("h-px w-full mt-4", isActive ? "bg-terracotta/40" : "bg-parchment/10")} />
                </motion.div>
              )
            })}
          </nav>

          {/* Footer inside menu */}
          <div className="mt-auto space-y-10 pt-12">
            <div className="flex gap-6">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="h-12 w-12 flex items-center justify-center bg-parchment/5 rounded-sm border border-parchment/10 text-parchment/40 hover:text-terracotta hover:border-terracotta transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-4"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-parchment/20">Institutional Mandate 2024</p>
              <button className="w-full py-5 bg-terracotta text-parchment font-black uppercase tracking-widest rounded-sm active:scale-[0.98] transition-transform">
                Get Involved
              </button>
            </motion.div>
          </div>

          {/* Large Background Text Decoration */}
          <div className="absolute -bottom-10 -right-20 text-[25vw] font-black text-parchment/[0.02] select-none pointer-events-none uppercase leading-none italic font-serif">
            Empower
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
