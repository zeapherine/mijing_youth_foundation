"use client"

import Link from "next/link"
import { X, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Footer() {
  return (
    <footer className="bg-forest text-parchment py-24 px-6 lg:px-12 relative overflow-hidden border-t border-forest/10">
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 pb-16">
          {/* Logo & Info */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-terracotta rounded-sm flex items-center justify-center">
                <span className="text-parchment font-black text-2xl">M</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter leading-none text-parchment">
                Mijing Youth <br/> Foundation
              </h3>
            </div>
            <p className="text-parchment/40 text-[11px] font-bold leading-relaxed max-w-[240px] uppercase tracking-[0.3em]">
              Empowering the next generation through education, health, and sustainable development.
            </p>
          </motion.div>

          {/* Resources */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-terracotta">Resources</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-bold text-[11px] uppercase tracking-[0.2em] text-parchment/60 hover:text-terracotta transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Engagement */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-terracotta">Engagement</h4>
            <ul className="space-y-4">
              {['Volunteer Portal', 'Annual Reports', 'Support Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-bold text-[11px] uppercase tracking-[0.2em] text-parchment/60 hover:text-terracotta transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-terracotta">Connect</h4>
            <div className="space-y-4">
              <p className="font-bold text-[11px] uppercase tracking-[0.2em] text-parchment/60">Kokrajhar, BTC, Assam</p>
              <p className="font-bold text-[11px] uppercase tracking-[0.2em] text-parchment/60 hover:text-terracotta transition-all cursor-pointer">hello@mijingfoundation.org</p>
            </div>
            <div className="flex gap-4 items-center pt-4">
              {[X, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 rounded-sm border border-parchment/10 flex items-center justify-center text-parchment/40 hover:text-terracotta hover:border-terracotta transition-all bg-parchment/5">
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-parchment/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-parchment/20 font-bold uppercase tracking-widest leading-relaxed">
            © 2024 Mijing Youth Foundation. <br className="md:hidden" />
            Empowering the Future, Sustainably.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-parchment/10 font-black uppercase tracking-[0.3em]">Institutional Archive</span>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
