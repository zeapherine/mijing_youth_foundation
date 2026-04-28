"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Leaf, 
  Trees, 
  ArrowRight, 
  Map, 
  ThermometerSun, 
  Sprout,
  Droplets,
  Calendar,
  Globe
} from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"

export default function EcologyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-secondary/20 selection:text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 md:px-12 lg:px-16 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-end relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="lg:col-span-9 space-y-12">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 text-secondary font-black text-xs uppercase tracking-[0.4em]"
            >
              <span className="w-12 h-0.5 bg-secondary" />
              Custodians of Earth
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.85] text-primary break-words" 
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              ECOLOGICAL <br/> 
              <span className="text-secondary block mt-4 font-serif italic font-light tracking-normal lowercase opacity-80">stewardship</span>
            </motion.h1>
          </div>
          
          <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-8">
            <p className="text-xl text-primary/60 max-w-xl font-medium leading-relaxed italic border-l-4 border-secondary/40 pl-8">
              Restoring our natural ecosystems through systematic afforestation, conservation efforts, and climate action.
            </p>
            <div className="flex gap-4">
               <div className="h-3 w-3 bg-secondary" />
               <div className="h-3 w-3 bg-primary/20" />
               <div className="h-3 w-3 bg-primary/10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Abstract Background Text */}
        <div className="absolute top-24 right-[-5%] text-[15vw] font-black text-primary opacity-[0.02] select-none uppercase leading-none pointer-events-none">
          NATURE
        </div>
      </section>

      {/* 2. AFFORESTATION SECTION */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-surface-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-7 relative aspect-video grayscale hover:grayscale-0 transition-all duration-1000 group shadow-premium"
            >
              <Image 
                src="/images/impact-green-v2.png" 
                alt="Green Belt Mandate" 
                fill 
                className="object-cover rounded-sm" 
              />
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-surface-lowest pointer-events-none" />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-secondary text-primary p-6 lg:p-10 font-heading font-black text-2xl md:text-3xl uppercase leading-none group-hover:scale-105 transition-transform shadow-premium rounded-sm">
                GREEN <br/> BELT.
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-6">
                <span className="text-sm font-black text-secondary uppercase tracking-widest px-4 py-1 bg-secondary/10 border border-secondary/20 inline-block rounded-sm">Initiative 01</span>
                <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl text-primary">
                  The Green <br/> <span className="text-primary/40 font-serif italic lowercase font-light tracking-tight">Mandate</span>
                </h2>
                <p className="text-lg text-primary/60 leading-relaxed font-medium">
                  A systemic drive to reverse deforestation and combat biodiversity loss. Over the past
                  five years, our youth volunteers have led mass plantation drives anchoring the soil and restoring the canopy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-surface-low border-l-4 border-secondary rounded-r-md">
                  <Trees className="h-8 w-8 text-secondary" />
                  <h4 className="font-black uppercase text-xl text-primary">Plantation</h4>
                  <p className="text-sm text-primary/60 font-medium">Large-scale afforestation targeting barren and degraded zones.</p>
                </div>
                <div className="space-y-4 p-8 bg-surface-low border-l-4 border-primary/20 rounded-r-md">
                  <Sprout className="h-8 w-8 text-primary" />
                  <h4 className="font-black uppercase text-xl text-primary">Nurseries</h4>
                  <p className="text-sm text-primary/60 font-medium">Community-managed sapling nurseries for indigenous flora.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CLIMATE RESILIENCE SECTION */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <span className="text-sm font-black text-secondary uppercase tracking-widest px-4 py-1 bg-secondary/10 border border-secondary/20 inline-block rounded-sm">Initiative 02</span>
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl text-primary">
                Climate <br/> <span className="text-secondary font-serif italic lowercase font-light tracking-tight">& Action</span>
              </h2>
              <p className="text-lg text-primary/60 leading-relaxed font-medium">
                Going beyond planting trees to actively monitoring environmental indices, managing
                water resources, and raising climate awareness among indigenous communities.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <ThermometerSun />, title: "Data Collection", desc: "Tracking temperature and ecological shifts." },
                { icon: <Droplets />, title: "Water Sanctuaries", desc: "Protecting natural aquifers and wetlands in the region." },
                { icon: <Map />, title: "Zone Mapping", desc: "Scientific auditing of forest cover and vulnerable areas." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="h-16 w-16 bg-surface-low border border-primary/10 text-primary flex items-center justify-center shrink-0 rounded-sm group-hover:bg-secondary group-hover:text-primary transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-2 pt-2">
                    <h5 className="text-2xl font-black uppercase text-primary">{item.title}</h5>
                    <p className="text-primary/60 text-sm font-medium">{item.desc}</p>
                    <div className="h-[2px] w-0 group-hover:w-full bg-secondary/50 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:w-1/2 relative aspect-[4/5] order-1 lg:order-2 grayscale hover:grayscale-0 transition-all duration-1000 shadow-premium"
          >
            <Image 
              src="/images/actual-sp-8.jpg" 
              alt="Community Environmental Action" 
              fill 
              className="object-cover rounded-sm" 
            />
            <div className="absolute inset-0 bg-primary/5 rounded-sm" />
            <div className="absolute top-0 left-0 p-8 lg:p-12 space-y-4">
              <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none text-secondary">100K+</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary font-bold bg-white/80 px-2 py-1 inline-block">Saplings Planted Since 2021</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. JOIN THE MOVEMENT */}
      <section className="px-6 md:px-12 lg:px-16 py-24 lg:py-48 bg-primary text-on-primary overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12 relative z-10">
               <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.8] text-5xl md:text-7xl lg:text-9xl text-on-primary">
                 NATURE <br/> CALLS.
               </h2>
               <p className="text-2xl font-medium leading-tight max-w-lg border-l-4 border-on-primary/20 pl-8 text-on-primary/80">
                 Join our upcoming monsoon plantation drive. Earth doesn't wait; it requires immediate, collective action.
               </p>
               <Button size="xl" className="h-20 px-12 text-xl font-black uppercase tracking-widest bg-secondary text-primary hover:bg-background hover:text-primary transition-all">
                  Volunteer Now <ArrowRight className="ml-4 h-6 w-6" />
               </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 relative z-10">
               {[
                 { icon: <Calendar />, title: "Next Drive", val: "July 12, 2025" },
                 { icon: <Globe />, title: "Location", val: "Bhairabkunda" },
                 { icon: <Leaf />, title: "Target", val: "10,000 Saplings" }
               ].map((item, i) => (
                 <div key={i} className="bg-on-primary/5 backdrop-blur-md p-10 flex justify-between items-center border border-on-primary/10 group hover:bg-background hover:text-primary transition-all duration-300 rounded-sm">
                    <div className="flex items-center gap-6">
                       <span className="text-secondary group-hover:text-secondary">{item.icon}</span>
                       <span className="font-black uppercase text-sm tracking-widest">{item.title}</span>
                    </div>
                    <span className="text-2xl font-heading font-black italic">{item.val}</span>
                 </div>
               ))}
            </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-on-primary/10 bg-on-primary opacity-[0.02] -skew-x-12" />
      </section>

    </main>
  )
}
