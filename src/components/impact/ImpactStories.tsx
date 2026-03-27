"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

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
    <section className={`py-32 px-6 md:px-12 lg:px-16 ${reverse ? 'bg-surface-low' : 'bg-background'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative ${reverse ? 'lg:order-2' : ''}`}
        >
          <div className="relative aspect-square rounded-xl overflow-hidden tonal-layer-2">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          {/* Decorative organic shape accent */}
          <div className={`absolute -bottom-8 -right-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-body-xs">{label}</span>
            <h2 className="font-heading font-black tracking-tight leading-[0.9] uppercase" style={{ fontSize: 'var(--display-md)' }}>{title}</h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-body-lg text-foreground/50 leading-relaxed max-w-lg font-medium">
              {description}
            </p>
            
            <div className="p-8 border-l-[4px] border-primary/20 bg-primary/5 rounded-r-lg">
              <p className="font-heading italic text-foreground/80 leading-snug" style={{ fontSize: 'var(--headline-md)' }}>
                &ldquo;{quote}&rdquo;
              </p>
            </div>
            
            <button className="flex items-center gap-4 group text-body-lg font-black uppercase tracking-wider">
              <span className="border-b-2 border-primary pb-1 group-hover:text-primary transition-colors">Read Journey</span>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-45">
                 <ArrowUpRight className="w-5 h-5" />
              </div>
            </button>
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
        image="/images/impact-green.png"
      />
      
      <StorySection 
        label="Sustainability"
        title="The Green Guardian"
        description="How a tech-driven reforestation initiative turned a wasteland into a lung for the city, led by visionary youth."
        quote="Trees don&apos;t just absorb CO2; they absorb our stress and give back hope. We are using data to heal the earth."
        image="/images/green.png"
        reverse
      />

      <StorySection 
        label="Excellence"
        title="A Champion&apos;s Spirit"
        description="Leo didn&apos;t have shoes when he started running. He had a heart that beat faster than his legs could carry him."
        quote="Today, he leads the National Youth Relay Team, proving that speed is nothing without the endurance of the soul."
        image="/images/sports.png"
      />
    </>
  )
}
