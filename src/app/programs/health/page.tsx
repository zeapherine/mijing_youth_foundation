"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Stethoscope, 
  Ambulance, 
  ArrowRight, 
  Heart, 
  ActivitySquare, 
  Syringe,
  Microscope,
  Baby,
  Truck
} from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-tertiary/20 selection:text-foreground">
      
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
              className="flex items-center gap-4 text-tertiary font-black text-xs uppercase tracking-[0.4em]"
            >
              <span className="w-12 h-0.5 bg-tertiary" />
              Humanitarian Framework
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.85] text-primary break-words" 
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              HEALTH <br/> 
              <span className="text-tertiary block mt-4 font-serif italic font-light tracking-normal lowercase opacity-80">& Social service</span>
            </motion.h1>
          </div>
          
          <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-8">
            <p className="text-xl text-primary/60 max-w-xl font-medium leading-relaxed italic border-l-4 border-tertiary/40 pl-8">
              Ensuring medical accessibility and crisis readiness. Health is a fundamental right, not an urban privilege.
            </p>
            <div className="flex gap-4">
               <div className="h-3 w-3 bg-tertiary" />
               <div className="h-3 w-3 bg-primary/20" />
               <div className="h-3 w-3 bg-primary/10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Abstract Background Text */}
        <div className="absolute top-24 right-[-5%] text-[15vw] font-black text-primary opacity-[0.02] select-none uppercase leading-none pointer-events-none">
          CLINICAL
        </div>
      </section>

      {/* 2. MOBILE CLINICS SECTION */}
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
                src="/images/programs-health-v2.png" 
                alt="Mobile Health Clinic" 
                fill 
                className="object-cover rounded-sm" 
              />
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-surface-lowest pointer-events-none" />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-tertiary text-on-tertiary p-6 lg:p-10 font-heading font-black text-2xl md:text-3xl uppercase leading-none group-hover:scale-105 transition-transform shadow-premium rounded-sm">
                RURAL <br/> CARE.
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
                <span className="text-sm font-black text-tertiary uppercase tracking-widest px-4 py-1 bg-tertiary/10 border border-tertiary/20 inline-block rounded-sm">Initiative 01</span>
                <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl text-primary">
                  Mobile <br/> <span className="text-primary/40 font-serif italic lowercase font-light tracking-tight">Clinics</span>
                </h2>
                <p className="text-lg text-primary/60 leading-relaxed font-medium">
                  We bridge the medical gap by deploying fully-equipped mobile triage units directly into
                  rural and underserved areas across the state.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-surface-low border-l-4 border-tertiary rounded-r-md">
                  <Stethoscope className="h-8 w-8 text-tertiary" />
                  <h4 className="font-black uppercase text-xl text-primary">Diagnostics</h4>
                  <p className="text-sm text-primary/60 font-medium">Providing primary checkups, essential tests, and medication.</p>
                </div>
                <div className="space-y-4 p-8 bg-surface-low border-l-4 border-primary/20 rounded-r-md">
                  <Baby className="h-8 w-8 text-primary" />
                  <h4 className="font-black uppercase text-xl text-primary">Pediatrics</h4>
                  <p className="text-sm text-primary/60 font-medium">Focused maternal and child health interventions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CRISIS RESPONSE SECTION */}
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
              <span className="text-sm font-black text-tertiary uppercase tracking-widest px-4 py-1 bg-tertiary/10 border border-tertiary/20 inline-block rounded-sm">Initiative 02</span>
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl text-primary">
                Crisis <br/> <span className="text-tertiary font-serif italic lowercase font-light tracking-tight">& aid</span>
              </h2>
              <p className="text-lg text-primary/60 leading-relaxed font-medium">
                Our emergency teams are trained for rapid deployment during floods and other natural disasters,
                managing everything from rescue logistics to epidemic prevention in relief camps.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Ambulance />, title: "Emergency Triage", desc: "Immediate trauma care in disaster zones." },
                { icon: <Truck />, title: "Relief Logistics", desc: "Distribution of clean water, food, and medicine." },
                { icon: <Syringe />, title: "Epidemic Control", desc: "Vaccination drives and sanitation management." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="h-16 w-16 bg-surface-low border border-primary/10 text-primary flex items-center justify-center shrink-0 rounded-sm group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-2 pt-2">
                    <h5 className="text-2xl font-black uppercase text-primary">{item.title}</h5>
                    <p className="text-primary/60 text-sm font-medium">{item.desc}</p>
                    <div className="h-[2px] w-0 group-hover:w-full bg-tertiary/50 transition-all duration-500" />
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
              src="/images/actual-sp-2.jpg" 
              alt="Medical Team Assistance" 
              fill 
              className="object-cover rounded-sm" 
            />
            <div className="absolute inset-0 bg-primary/5 rounded-sm" />
            <div className="absolute top-0 left-0 p-8 lg:p-12 space-y-4">
              <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none text-tertiary">12,000+</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary font-bold bg-white/80 px-2 py-1 inline-block">Lives Touched</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION / DONATE */}
      <section className="px-6 md:px-12 lg:px-16 py-24 lg:py-48 bg-primary text-on-primary overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12 relative z-10">
               <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.8] text-5xl md:text-7xl lg:text-9xl text-on-primary">
                 AID THE <br/> MISSION.
               </h2>
               <p className="text-2xl font-medium leading-tight max-w-lg border-l-4 border-on-primary/20 pl-8 text-on-primary/80">
                 Operating mobile clinics and disaster response teams is capital intensive. Your donation saves lives directly.
               </p>
               <Button size="xl" className="h-20 px-12 text-xl font-black uppercase tracking-widest bg-tertiary text-on-tertiary hover:bg-background hover:text-primary transition-all">
                  Donate to Health <ArrowRight className="ml-4 h-6 w-6" />
               </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 relative z-10">
               {[
                 { icon: <Heart />, title: "Partner", val: "Become a Sponsor" },
                 { icon: <ActivitySquare />, title: "Medical Pros", val: "Volunteer With Us" },
                 { icon: <Microscope />, title: "Medical Camps", val: "Request a Camp" }
               ].map((item, i) => (
                 <div key={i} className="bg-on-primary/5 backdrop-blur-md p-10 flex justify-between items-center border border-on-primary/10 group hover:bg-background hover:text-primary transition-all duration-300 rounded-sm">
                    <div className="flex items-center gap-6">
                       <span className="text-tertiary group-hover:text-tertiary">{item.icon}</span>
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
