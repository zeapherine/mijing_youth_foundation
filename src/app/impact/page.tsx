"use client"

import { ImpactHero } from "@/components/impact/ImpactHero"
import { ImpactFeature } from "@/components/impact/ImpactFeature"
import { ImpactStories } from "@/components/impact/ImpactStories"
import { ImpactCTA } from "@/components/impact/ImpactCTA"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function Impact() {
  return (
    <main className="min-h-screen bg-parchment">
      
      {/* Editorial Hero Section */}
      <ImpactHero />

      {/* Primary Feature Story */}
      <ImpactFeature />

      {/* Metrics / Tonal Bridge */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-parchment-deep border-y border-forest/5 overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-12"
        >
           <div className="space-y-4 max-w-xl">
              <motion.h2 variants={fadeInUp} className="font-heading font-black tracking-tight uppercase leading-[0.9] text-forest" style={{ fontSize: 'var(--display-md)' }}>Our Cumulative Impact</motion.h2>
              <motion.p variants={fadeInUp} className="text-body-lg text-forest/50 font-medium italic">&ldquo;The light we give to others eventually shines back on us.&rdquo;</motion.p>
           </div>
           
           <div className="flex gap-16 md:gap-24">
              <motion.div variants={fadeInUp} className="space-y-2">
                 <p className="font-heading font-black text-terracotta leading-none" style={{ fontSize: 'var(--display-xl)' }}>12k+</p>
                 <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/40">Lives Impacted</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-2">
                 <p className="font-heading font-black text-forest leading-none" style={{ fontSize: 'var(--display-xl)' }}>45k+</p>
                 <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/40">Trees Planted</p>
              </motion.div>
           </div>
        </motion.div>
      </section>

      {/* Individual Story Sections */}
      <ImpactStories />

      {/* Final CTA Section */}
      <ImpactCTA />

    </main>
  )
}
