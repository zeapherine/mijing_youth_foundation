"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export const ImpactCTA = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-32 bg-parchment">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-sm bg-forest p-16 md:p-32 text-center text-parchment relative overflow-hidden"
      >
        <div className="relative z-10 max-w-3xl mx-auto space-y-12">
          <motion.h2 
            variants={fadeInUp}
            className="font-heading font-black tracking-tight leading-[0.9] uppercase" 
            style={{ fontSize: 'var(--display-lg)' }}
          >
            Create Your Own <br /> Impact Story
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-body-lg text-parchment/70 font-medium"
          >
            Every contribution, every volunteer hour, and every membership creates a ripple that turns into a wave.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/get-involved">
              <button className="px-12 py-6 bg-parchment text-forest rounded-sm text-body-lg font-black uppercase tracking-wider hover:bg-parchment/90 transition-all flex items-center gap-3 active:scale-95 shadow-xl">
                Partner With Us <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/impact">
              <button className="px-12 py-6 border border-parchment/30 text-parchment rounded-sm text-body-lg font-black uppercase tracking-wider hover:bg-parchment/10 transition-colors active:scale-95">
                Impact Archives
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
