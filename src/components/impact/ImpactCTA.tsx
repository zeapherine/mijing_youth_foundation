"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const ImpactCTA = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[4rem] bg-primary p-16 md:p-32 text-center text-white relative overflow-hidden"
      >
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter leading-none">
            Create Your Own <br /> Impact Story
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            Every contribution, every volunteer hour, and every membership creates a ripple that turns into a wave.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-12 py-6 bg-white text-primary rounded-full text-lg font-bold hover:scale-[1.05] transition-transform flex items-center gap-3">
              Join the Movement <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-12 py-6 bg-white/20 backdrop-blur-md text-white rounded-full text-lg font-bold hover:bg-white/30 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
