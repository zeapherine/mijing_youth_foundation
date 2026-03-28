"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeInUp, editorialEasing, staggerContainer } from "@/lib/animations"

export const ImpactCTA = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-32">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[4rem] bg-primary p-16 md:p-32 text-center text-white relative overflow-hidden shadow-premium"
      >
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        
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
            className="text-body-lg text-white/80 font-medium"
          >
            Every contribution, every volunteer hour, and every membership creates a ripple that turns into a wave.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-12 py-6 bg-white text-primary rounded-full text-body-lg font-black uppercase tracking-wider hover:scale-[1.05] transition-transform flex items-center gap-3 active:scale-95 shadow-lg">
              Join the Movement <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-12 py-6 bg-white/20 backdrop-blur-md text-white rounded-full text-body-lg font-black uppercase tracking-wider hover:bg-white/30 transition-colors active:scale-95">
              Donate Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
