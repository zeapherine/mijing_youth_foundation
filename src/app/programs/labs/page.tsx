"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Plane, 
  ChefHat, 
  ArrowRight, 
  Ship, 
  MapPin, 
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles
} from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-tertiary/20 selection:text-foreground">
      
      {/* 1. HERO SECTION - Radical Masthead */}
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 md:px-12 lg:px-16 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-end relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 text-tertiary font-black text-xs uppercase tracking-[0.4em]"
            >
              <span className="w-12 h-0.5 bg-tertiary" />
              Technical Maturity
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.85] text-primary break-words" 
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              LABS <span className="text-tertiary block mt-4 font-serif italic font-light tracking-normal lowercase opacity-80">of</span> <br/>
              EXCELLENCE.
            </motion.h1>
          </div>
          
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-8">
            <p className="text-xl text-primary/60 max-w-xl font-medium leading-relaxed italic border-l-4 border-tertiary/40 pl-8">
              Developing industry-ready proficiency through immersive simulators and expert mentorship 
              in high-growth sectors.
            </p>
            <div className="flex gap-4">
               <div className="h-3 w-3 bg-tertiary" />
               <div className="h-3 w-3 bg-primary/20" />
               <div className="h-3 w-3 bg-primary/10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Abstract Background Text */}
        <div className="absolute top-24 right-[-5%] text-[20vw] font-black text-primary opacity-[0.02] select-none uppercase leading-none pointer-events-none">
          VTC-2025
        </div>
      </section>

      {/* 2. AVIATION LAB SECTION - The High Altitude Mandate */}
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
                src="/images/aviation_lab.png" 
                alt="Aviation Training Lab" 
                fill 
                className="object-cover rounded-sm" 
              />
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-surface-lowest pointer-events-none" />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-tertiary text-on-tertiary p-6 lg:p-10 font-heading font-black text-2xl md:text-3xl uppercase leading-none group-hover:scale-105 transition-transform shadow-premium rounded-sm">
                SKY <br/> BOUND.
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
                <span className="text-sm font-black text-tertiary uppercase tracking-widest px-4 py-1 bg-tertiary/10 border border-tertiary/20 inline-block rounded-sm">Module 01</span>
                <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl text-primary">
                  Aviation <br/> <span className="text-primary/40 font-serif italic lowercase font-light tracking-tight">And</span> Cabin Crew
                </h2>
                <p className="text-lg text-primary/60 leading-relaxed font-medium">
                  Our Aviation Lab provides certified training for cabin crew and ground staff 
                  operations. In partnership with leading regional airline carriers, we facilitate 
                  direct placement pathways for our graduates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-surface-low border-l-4 border-tertiary rounded-r-md">
                  <Plane className="h-8 w-8 text-tertiary" />
                  <h4 className="font-black uppercase text-xl text-primary">Ground Staff</h4>
                  <p className="text-sm text-primary/60 font-medium">Mastering ticketing, ramp operations, and logistics.</p>
                </div>
                <div className="space-y-4 p-8 bg-surface-low border-l-4 border-primary/20 rounded-r-md">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <h4 className="font-black uppercase text-xl text-primary">In-Flight Service</h4>
                  <p className="text-sm text-primary/60 font-medium">Focusing on safety protocols and elite hospitality.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. HOSPITALITY SECTION - Tactical Service */}
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
              <span className="text-sm font-black text-tertiary uppercase tracking-widest px-4 py-1 bg-tertiary/10 border border-tertiary/20 inline-block rounded-sm">Module 02</span>
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl text-primary">
                Hospitality <br/> <span className="text-tertiary font-serif italic lowercase font-light tracking-tight">&</span> Tourism
              </h2>
              <p className="text-lg text-primary/60 leading-relaxed font-medium">
                The service economy is a pillar of regional growth. We train our youth in 
                hotel management, culinary excellence, and sustainable tourism management—ensuring 
                global standards are met in local contexts.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <ChefHat />, title: "Culinary Arts", desc: "Professional kitchen management and global cuisines." },
                { icon: <Ship />, title: "Eco-Tourism", desc: "Leading sustainable exploration in the Bodoland corridor." },
                { icon: <MapPin />, title: "Front Office", desc: "Management of luxury guest relations and digital systems." }
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
              src="/images/hospitality_lab.png" 
              alt="Hospitality Training Lab" 
              fill 
              className="object-cover rounded-sm" 
            />
            <div className="absolute inset-0 bg-primary/5 rounded-sm" />
            <div className="absolute top-0 left-0 p-8 lg:p-12 space-y-4">
              <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none text-tertiary">100%</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary font-bold bg-white/80 px-2 py-1 inline-block">Placement Rate in 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. ENROLLMENT & LOGISTICS - The Spring 2025 Mandate */}
      <section className="px-6 md:px-12 lg:px-16 py-24 lg:py-48 bg-primary text-on-primary overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12 relative z-10">
               <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.8] text-5xl md:text-7xl lg:text-9xl text-on-primary">
                 JOIN THE <br/> COHORT.
               </h2>
               <p className="text-2xl font-medium leading-tight max-w-lg border-l-4 border-on-primary/20 pl-8 text-on-primary/80">
                 Enrollment for our Spring 2025 mandate is now active. Secure your position in the next generation of industry leaders.
               </p>
               <Button size="xl" className="h-20 px-12 text-xl font-black uppercase tracking-widest bg-tertiary text-on-tertiary hover:bg-background hover:text-primary transition-all">
                  Apply Now <ArrowRight className="ml-4 h-6 w-6" />
               </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 relative z-10">
               {[
                 { icon: <Calendar />, title: "Batch Start", val: "May 15, 2025" },
                 { icon: <Clock />, title: "Duration", val: "6 Months Intensive" },
                 { icon: <CheckCircle2 />, title: "Certification", val: "Industry Accredited" }
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

        {/* Decorative Grid */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-on-primary/10 bg-on-primary opacity-[0.02] -skew-x-12" />
      </section>

      {/* 5. IMPACT FOOTER - The Call to Support */}
      <section className="py-32 px-6 text-center bg-surface-lowest border-t border-primary/5">
        <motion.div 
          className="max-w-4xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
           <h2 className="text-4xl lg:text-6xl font-heading font-black tracking-tighter uppercase leading-tight italic text-primary/50">
             Help us <span className="text-primary not-italic">Institutionalize</span> <br/> Potential.
           </h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button variant="outline" className="px-12 h-16 border-primary/20 text-primary font-black uppercase tracking-widest hover:bg-primary hover:text-on-primary">
                  Volunteer Host
                </Button>
              </Link>
              <Button className="px-12 h-16 bg-primary text-on-primary font-black uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary">
                Donate to Lab
              </Button>
           </div>
        </motion.div>
      </section>

    </main>
  )
}
