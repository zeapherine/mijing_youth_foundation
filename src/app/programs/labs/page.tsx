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
    <main className="min-h-screen bg-[#131313] text-white selection:bg-[#b9f600]/30 selection:text-white">
      
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
              className="flex items-center gap-4 text-[#b9f600] font-black text-xs uppercase tracking-[0.4em]"
            >
              <span className="w-12 h-0.5 bg-[#b9f600]" />
              Technical Maturity
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.8] text-white break-words" 
              style={{ fontSize: 'clamp(4rem, 15vw, 12rem)' }}
            >
              LABS <span className="text-[#b9f600] block mt-4 font-serif italic font-light tracking-normal lowercase opacity-80">of</span> <br/>
              EXCELLENCE.
            </motion.h1>
          </div>
          
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-8">
            <p className="text-xl text-white/50 max-w-xl font-medium leading-relaxed italic border-l-4 border-[#b9f600]/40 pl-8">
              Developing industry-ready proficiency through immersive simulators and expert mentorship 
              in high-growth sectors.
            </p>
            <div className="flex gap-4">
               <div className="h-3 w-3 bg-[#b9f600]" />
               <div className="h-3 w-3 bg-white/20" />
               <div className="h-3 w-3 bg-white/10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Abstract Background Text */}
        <div className="absolute top-24 right-[-5%] text-[20vw] font-black opacity-[0.02] select-none uppercase leading-none pointer-events-none">
          VTC-2025
        </div>
      </section>

      {/* 2. AVIATION LAB SECTION - The High Altitude Mandate */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-[#1c1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-7 relative aspect-video grayscale hover:grayscale-0 transition-all duration-1000 group shadow-2xl"
            >
              <Image 
                src="/images/aviation-lab.png" 
                alt="Aviation Training Lab" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-[#1c1b1b] pointer-events-none" />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-[#b9f600] text-[#131313] p-6 lg:p-10 font-heading font-black text-2xl md:text-3xl uppercase leading-none group-hover:scale-105 transition-transform">
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
                <span className="text-sm font-black text-[#b9f600] uppercase tracking-widest px-4 py-1 bg-[#b9f600]/10 border border-[#b9f600]/20 inline-block">Module 01</span>
                <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl">
                  Aviation <br/> <span className="text-white/40 font-serif italic lowercase font-light tracking-tight">And</span> Cabin Crew
                </h2>
                <p className="text-lg text-white/60 leading-relaxed font-medium">
                  Our Aviation Lab provides certified training for cabin crew and ground staff 
                  operations. In partnership with leading regional airline carriers, we facilitate 
                  direct placement pathways for our graduates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-[#2a2a2a] border-l-4 border-[#b9f600]">
                  <Plane className="h-8 w-8 text-[#b9f600]" />
                  <h4 className="font-black uppercase text-xl">Ground Staff</h4>
                  <p className="text-sm text-white/50">Mastering ticketing, ramp operations, and logistics.</p>
                </div>
                <div className="space-y-4 p-8 bg-[#2a2a2a] border-l-4 border-white">
                  <Sparkles className="h-8 w-8 text-white" />
                  <h4 className="font-black uppercase text-xl">In-Flight Service</h4>
                  <p className="text-sm text-white/50">Focusing on safety protocols and elite hospitality.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. HOSPITALITY SECTION - Tactical Service */}
      <section className="px-6 md:px-12 lg:px-16 py-20 lg:py-32 bg-[#131313]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <span className="text-sm font-black text-[#b9f600] uppercase tracking-widest px-4 py-1 bg-[#b9f600]/10 border border-[#b9f600]/20 inline-block">Module 02</span>
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-5xl lg:text-7xl">
                Hospitality <br/> <span className="text-[#b9f600] font-serif italic lowercase font-light tracking-tight">&</span> Tourism
              </h2>
              <p className="text-lg text-white/60 leading-relaxed font-medium">
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
                  <div className="h-16 w-16 bg-[#b9f600] text-[#131313] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-2 pt-2">
                    <h5 className="text-2xl font-black uppercase">{item.title}</h5>
                    <p className="text-white/40 text-sm font-medium">{item.desc}</p>
                    <div className="h-[2px] w-0 group-hover:w-full bg-[#b9f600]/20 transition-all duration-500" />
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
            className="lg:w-1/2 relative aspect-[4/5] order-1 lg:order-2 grayscale shadow-2xl"
          >
            <Image 
              src="/images/hospitality-lab.png" 
              alt="Hospitality Training Lab" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#131313] via-transparent to-transparent opacity-60" />
            <div className="absolute top-0 left-0 p-8 lg:p-12 space-y-4">
              <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none text-[#b9f600]">100%</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Placement Rate in 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. ENROLLMENT & LOGISTICS - The Spring 2025 Mandate */}
      <section className="px-6 md:px-12 lg:px-16 py-24 lg:py-48 bg-[#b9f600] text-[#131313] overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12">
               <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.8] text-5xl md:text-7xl lg:text-9xl">
                 JOIN THE <br/> COHORT.
               </h2>
               <p className="text-2xl font-medium leading-tight max-w-lg border-l-4 border-[#131313]/20 pl-8">
                 Enrollment for our Spring 2025 mandate is now active. Secure your position in the next generation of industry leaders.
               </p>
               <Button size="xl" className="h-20 px-12 text-xl font-black uppercase tracking-widest bg-[#131313] text-[#b9f600] hover:bg-white hover:text-[#131313] transition-all">
                  Apply Now <ArrowRight className="ml-4 h-6 w-6" />
               </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
               {[
                 { icon: <Calendar />, title: "Batch Start", val: "May 15, 2025" },
                 { icon: <Clock />, title: "Duration", val: "6 Months Intensive" },
                 { icon: <CheckCircle2 />, title: "Certification", val: "Industry Accredited" }
               ].map((item, i) => (
                 <div key={i} className="bg-white/10 backdrop-blur-md p-10 flex justify-between items-center border border-[#131313]/05 group hover:bg-[#131313] hover:text-white transition-all duration-300">
                    <div className="flex items-center gap-6">
                       <span className="text-[#131313] group-hover:text-[#b9f600]">{item.icon}</span>
                       <span className="font-black uppercase text-sm tracking-widest">{item.title}</span>
                    </div>
                    <span className="text-2xl font-heading font-black italic">{item.val}</span>
                 </div>
               ))}
            </div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#131313]/05 bg-[#131313] opacity-[0.02] -skew-x-12" />
      </section>

      {/* 5. IMPACT FOOTER - The Call to Support */}
      <section className="py-32 px-6 text-center bg-[#131313] border-t border-white/5">
        <motion.div 
          className="max-w-4xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
           <h2 className="text-4xl lg:text-6xl font-heading font-black tracking-tighter uppercase leading-tight italic text-white/50">
             Help us <span className="text-white not-italic">Institutionalize</span> <br/> Potential.
           </h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button variant="outline" className="px-12 h-16 border-white/20 text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#131313]">
                  Volunteer Host
                </Button>
              </Link>
              <Button className="px-12 h-16 bg-[#b9f600] text-[#131313] font-black uppercase tracking-widest hover:bg-white hover:text-[#131313]">
                Donate to Lab
              </Button>
           </div>
        </motion.div>
      </section>

    </main>
  )
}
