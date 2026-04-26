"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function FeaturedEvent() {
  return (
    <section className="w-full bg-surface-lowest py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <motion.div 
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl relative group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Image Column */}
        <div className="lg:col-span-4 relative h-[400px] lg:h-auto overflow-hidden">
          <Image 
            src="/images/actual-sp-4.jpg" 
            alt="Basketball Event" 
            fill 
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s] ease-out"
          />
          <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
        </div>

        {/* Content Column */}
        <div className="lg:col-span-8 bg-forest p-12 lg:p-24 flex flex-col justify-center relative">
          
          {/* Top Right Decoration */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <span className="font-serif italic text-tertiary text-lg md:text-2xl opacity-60 tracking-widest">
              ₹1,00,000
            </span>
          </div>

          <div className="space-y-4 md:space-y-8">
            <motion.p 
              className="text-parchment/60 font-bold uppercase tracking-[0.4em] text-xs md:text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              May 16, 2026
            </motion.p>
            
            <motion.h2 
              className="text-parchment font-heading font-black text-4xl md:text-6xl lg:text-8xl tracking-tighter uppercase leading-[0.9] max-w-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              All Northeast <br /> Open 3x3
            </motion.h2>
            
            <motion.p 
              className="text-parchment/70 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              MYF 4th Men & Women Basketball Tournament
            </motion.p>

            <motion.div 
              className="pt-8 md:pt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                href="/events/northeast-open-3x3-2026"
                className="inline-flex items-center gap-6 group/btn"
              >
                <div className="bg-parchment h-12 w-12 flex items-center justify-center rounded-sm transition-transform group-hover/btn:scale-110">
                   <ArrowRight className="h-5 w-5 text-forest" />
                </div>
                <span className="text-parchment font-black uppercase tracking-[0.3em] text-sm md:text-sm border-b border-transparent group-hover/btn:border-parchment pb-1 transition-all">
                  View Details
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Background Text Decoration */}
          <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none translate-y-1/2 select-none">
            <span className="font-heading font-black text-[120px] lg:text-[240px] text-parchment whitespace-nowrap leading-none tracking-tighter">
              BASKETBALL
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
