"use client"

import { motion } from "framer-motion"

export const ImpactHero = () => {
  return (
    <section className="pt-48 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6 block"
          >
            Archive 2024
          </motion.span>
          
          <h1 className="font-heading font-black leading-[0.8] tracking-tight mb-12 flex flex-col" style={{ fontSize: 'var(--display-lg)' }}>
            <span>Voices of</span>
            <span className="text-primary italic pr-4">Change.</span>
            <span className="text-foreground/20">Stories of</span>
            <span className="pl-12 md:pl-24">Progress.</span>
          </h1>
          
          <div className="md:absolute top-8 right-0 max-w-sm mt-12 md:mt-24">
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 1.5 }}
               className="text-lg md:text-xl text-foreground/50 leading-relaxed font-medium"
             >
               &ldquo;Real change isn&apos;t measured in statistics, but in the morning light stories of the lives we touch.&rdquo;
             </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
