"use client"

import Link from "next/link"
import { X, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Footer() {
  return (
    <footer className="bg-[#0b0c0b] text-white py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decorative Text - Positioned to not overlap content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col justify-center items-center pointer-events-none gap-4">
        <span className="text-[10vw] font-black uppercase tracking-tighter leading-none opacity-[0.03] select-none">RESOURCES</span>
        <span className="text-[10vw] font-black uppercase tracking-tighter leading-none opacity-[0.03] select-none">ENGAGEMENT</span>
        <span className="text-[10vw] font-black uppercase tracking-tighter leading-none opacity-[0.03] select-none">CONNECT</span>
      </div>

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
              <div className="h-12 w-12 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-on-primary font-black text-2xl">M</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">
                Mijing Youth <br/> Foundation
              </h3>
            </div>
            <p className="text-white/30 text-xs font-bold leading-relaxed max-w-[240px] uppercase tracking-[0.2em]">
              Empowering the next generation through education, health, and sustainable development.
            </p>
          </motion.div>

          {/* Resources */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Resources</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-bold text-sm uppercase tracking-widest text-white/40 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Engagement */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Engagement</h4>
            <ul className="space-y-4">
              {['Volunteer Portal', 'Annual Reports', 'Support Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-bold text-sm uppercase tracking-widest text-white/40 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Connect</h4>
            <div className="space-y-4">
              <p className="font-bold text-sm uppercase tracking-widest text-white/40">Kokrajhar, BTC, Assam</p>
              <p className="font-bold text-sm uppercase tracking-widest text-white/40 hover:text-primary transition-all cursor-pointer">contact@mijingfoundation.org</p>
            </div>
            <div className="flex gap-4 items-center pt-4">
              <Link href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary transition-all">
                <X className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary transition-all">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary transition-all">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
            © 2024 Mijing Youth Empowerment Foundation.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-white/10 font-black uppercase tracking-[0.3em]">Crafted for impact</span>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
