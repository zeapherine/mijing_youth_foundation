"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export const ImpactFeature = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 bg-parchment">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="relative group cursor-pointer"
        >
          {/* Main Large Card */}
          <motion.div 
            variants={fadeInUp}
            className="relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden bg-parchment-deep border border-forest/5 group"
          >
            <Image 
              src="/images/impact-sports-v2.png" 
              alt="The Collective Future" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            {/* Dark Overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <div className="bg-parchment/10 backdrop-blur-md px-6 py-2 rounded-sm border border-parchment/20">
                    <span className="text-parchment text-sm font-bold tracking-widest uppercase">Featured Story</span>
                 </div>
                 <div className="w-16 h-16 rounded-sm bg-parchment/10 backdrop-blur-md border border-parchment/20 flex items-center justify-center text-parchment group-hover:bg-terracotta transition-colors duration-500">
                    <ArrowRight className="w-6 h-6" />
                 </div>
              </div>

              <div className="max-w-2xl">
                 <h2 className="font-heading font-black text-parchment tracking-tight mb-4 uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>
                    The Collective <br /> Future
                 </h2>
                 <p className="text-parchment/60 text-body-lg font-medium">
                    How decentralized community action is rewriting the narrative of urban resilience.
                 </p>
              </div>
            </div>
          </motion.div>

          {/* Overlapping Text Element */}
          <motion.div
            variants={fadeInUp}
            className="hidden lg:block absolute -top-12 -right-12 w-80 p-8 bg-parchment border border-forest/10 rounded-sm shadow-2xl z-20"
          >
             <h3 className="font-heading font-black text-terracotta mb-4" style={{ fontSize: 'var(--display-md)' }}>84%</h3>
             <p className="text-forest/60 text-body-sm leading-relaxed font-medium">
                Increase in youth-led local initiatives across the valley since winter 2024.
             </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
