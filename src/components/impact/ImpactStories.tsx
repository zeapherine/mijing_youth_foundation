"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { fadeInUp, staggerContainer, editorialEasing } from "@/lib/animations"

interface StoryProps {
  label: string;
  title: string;
  description: string;
  quote: string;
  image: string;
  reverse?: boolean;
}

const StorySection = ({ label, title, description, quote, image, reverse }: StoryProps) => {
  return (
    <section className={`py-32 px-6 md:px-12 lg:px-16 ${reverse ? 'bg-parchment-deep' : 'bg-parchment'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: editorialEasing }}
          viewport={{ once: true, margin: "-100px" }}
          className={`relative ${reverse ? 'lg:order-2' : ''}`}
        >
          <div className="relative aspect-square rounded-sm overflow-hidden border border-forest/10 bg-forest/5 shadow-xl">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105" 
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.span variants={fadeInUp} className="text-terracotta font-bold tracking-[0.3em] uppercase text-xs">{label}</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading font-black tracking-tight leading-[0.9] uppercase text-forest" style={{ fontSize: 'var(--display-md)' }}>{title}</motion.h2>
          </div>
          
          <div className="space-y-8">
            <motion.p variants={fadeInUp} className="text-body-lg text-forest/60 leading-relaxed max-w-lg font-medium">
              {description}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="p-8 border-l border-terracotta/30 bg-terracotta/5 rounded-sm">
              <p className="font-heading italic text-forest/80 leading-snug" style={{ fontSize: 'var(--headline-md)' }}>
                &ldquo;{quote}&rdquo;
              </p>
            </motion.div>
            
            <motion.button variants={fadeInUp} className="flex items-center gap-4 group text-body-lg font-black uppercase tracking-wider active:scale-95 transition-transform text-forest">
              <span className="border-b border-terracotta pb-1 group-hover:text-terracotta transition-colors">Read Journey</span>
              <div className="w-10 h-10 rounded-sm bg-forest/5 border border-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:text-parchment transition-all transform group-hover:rotate-45">
                 <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export const ImpactStories = () => {
  return (
    <>
      <StorySection 
        label="Environment"
        title="From the Fields to the Air"
        description="Born in a remote agricultural village, Amara never dreamed of the sky. Through the MYF Flight Scholars program, she transitioned from tilling earth to navigating clouds."
        quote="The horizon is no longer a limit; it&apos;s a beginning. My community sees me and knows that gravity is just a suggestion."
        image="/images/hero-unified-v2.png"
      />
      
      <StorySection 
        label="Sustainability"
        title="The Green Guardian"
        description="How a tech-driven reforestation initiative turned a wasteland into a lung for the city, led by visionary youth."
        quote="Trees don&apos;t just absorb CO2; they absorb our stress and give back hope. We are using data to heal the earth."
        image="/images/impact-green-v2.png"
        reverse
      />

      <StorySection 
        label="Excellence"
        title="A Champion&apos;s Spirit"
        description="Leo didn&apos;t have shoes when he started running. He had a heart that beat faster than his legs could carry him."
        quote="Today, he leads the National Youth Relay Team, proving that speed is nothing without the endurance of the soul."
        image="/images/actual-sp-4.jpg"
      />
    </>
  )
}
