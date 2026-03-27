"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const ImpactFeature = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
        >
          {/* Main Large Card */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden tonal-layer-2 group">
            <Image 
              src="/images/impact-sports.png" 
              alt="The Collective Future" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Dark Overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <div className="bg-primary/20 backdrop-blur-md px-6 py-2 rounded-full">
                    <span className="text-white text-sm font-bold tracking-widest uppercase">Featured Story</span>
                 </div>
                 <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <ArrowRight className="w-6 h-6" />
                 </div>
              </div>

              <div className="max-w-2xl">
                 <h2 className="font-heading font-black text-white tracking-tight mb-4" style={{ fontSize: 'var(--display-md)' }}>
                    The Collective <br /> Future
                 </h2>
                 <p className="text-white/60 text-body-lg font-medium">
                    How decentralized community action is rewriting the narrative of urban resilience.
                 </p>
              </div>
            </div>
          </div>

          {/* Overlapping Text Element (Betraying the habit) */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block absolute -top-12 -right-12 w-80 p-8 glass rounded-lg"
          >
             <h3 className="font-heading font-black text-primary mb-4" style={{ fontSize: 'var(--display-md)' }}>84%</h3>
             <p className="text-foreground/60 text-body-sm leading-relaxed">
                Increase in youth-led local initiatives across the valley since winter 2024.
             </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
