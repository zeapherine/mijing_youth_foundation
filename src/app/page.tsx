"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Laptop, Trophy, Heart, TreePine, Palette, Megaphone, Users, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer, editorialEasing } from "@/lib/animations"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">

      {/* Hero Section: The Human Connection */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Narrative Column */}
          <motion.div 
            className="lg:col-span-12 xl:col-span-12 space-y-12 z-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-4 px-4 py-2 border border-primary/10 rounded-sm bg-surface-low/50">
               <span className="h-2 w-2 rounded-full bg-tertiary animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Founded on Purpose. Driven by Youth.</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tight leading-[0.9] text-primary" 
              style={{ fontSize: 'var(--display-lg)' }}
            >
              Investing in <br />
              <span className="italic serif opacity-80">Human Potential</span> <br />
              Since 2012.
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-body-lg text-primary/60 max-w-xl font-medium leading-relaxed border-l-2 border-tertiary/20 pl-8">
                Mijing Youth Foundation is a catalyst for change. We empower the next generation through holistic development, environmental stewardship, and community-driven innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="xl" className="px-12 h-20 text-xl font-black uppercase tracking-widest transition-all">
                  Get Involved
                </Button>
                <Button size="xl" variant="outline" className="px-12 h-20 text-xl font-black uppercase tracking-widest transition-all">
                  Our Impact
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Immersive Imagery Column - Now full width for maximalist impact */}
          <motion.div 
            className="lg:col-span-12 mt-12 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: editorialEasing }}
          >
            <div className="relative aspect-[21/9] rounded-sm overflow-hidden group">
              <Image 
                src="/images/hero-unified-v2.png" 
                alt="Empowering Young Minds" 
                fill 
                priority
                className="object-cover transition-transform duration-[3s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="bg-surface-lowest/90 backdrop-blur-md p-10 rounded-sm max-w-sm shadow-premium border-l-4 border-tertiary">
                  <p className="text-display-sm font-black text-primary leading-none mb-2">1.2k</p>
                  <p className="text-xs font-black uppercase tracking-widest text-primary/40 mb-4">Lives Impacted To Date</p>
                  <p className="text-body-sm text-primary/70 italic">&quot;We don't just build programs; we build futures.&quot;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars: The Vertical Narrative */}
      <section className="py-32 px-6 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-32 space-y-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9] text-primary" style={{ fontSize: 'var(--display-md)' }}>Our Strategic <br/><span className="italic serif opacity-60 normal-case">Pillars</span></h2>
             <div className="h-1 w-32 bg-tertiary" />
          </motion.div>

          <div className="space-y-48">
            {/* Pillar 01: Skill Lab */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                className="lg:col-span-5 space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-display-sm font-serif italic text-tertiary opacity-40 leading-none">01.</p>
                <h3 className="font-heading font-black uppercase text-primary" style={{ fontSize: 'var(--headline-lg)' }}>Digital Skill <br/> Development</h3>
                <p className="text-primary/60 text-body-lg leading-relaxed">
                  Bridge the gap between potential and opportunity. Our digital literacy workshops and vocational training centers are designed for the 21st-century economy.
                </p>
                <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group">
                  Learn About Our Labs
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </motion.div>
              <motion.div 
                className="lg:col-span-7 relative aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image src="/images/skills-lab-v2.png" alt="Skill Development" fill className="object-cover rounded-sm shadow-premium grayscale hover:grayscale-0 transition-all duration-1000" />
              </motion.div>
            </div>

            {/* Pillar 02: Athletics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center flex-row-reverse">
              <motion.div 
                className="lg:col-span-7 lg:order-1 relative aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-primary/10 rounded-sm -rotate-2" />
                <Image src="/images/impact-athletics-v2.png" alt="Sports & Athletics" fill className="object-cover rounded-sm shadow-premium z-10" />
              </motion.div>
              <motion.div 
                className="lg:col-span-5 lg:order-2 space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-display-sm font-serif italic text-tertiary opacity-40 leading-none">02.</p>
                <h3 className="font-heading font-black uppercase text-primary" style={{ fontSize: 'var(--headline-lg)' }}>Athletics & <br/> Resilience</h3>
                <p className="text-primary/60 text-body-lg leading-relaxed">
                  Building teamwork, discipline, and community resilience through local sports leagues and outdoor leadership programs.
                </p>
                <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group">
                  Explore Youth Leagues
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </motion.div>
            </div>

            {/* Pillar 03: Environment */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                className="lg:col-span-5 space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-display-sm font-serif italic text-tertiary opacity-40 leading-none">03.</p>
                <h3 className="font-heading font-black uppercase text-primary" style={{ fontSize: 'var(--headline-lg)' }}>Ecological <br/> Stewardship</h3>
                <p className="text-primary/60 text-body-lg leading-relaxed">
                  Planting the seeds for a sustainable future. Our afforestation projects combine climate science with youth-led community action.
                </p>
                <Button variant="link" className="px-0 flex items-center gap-4 text-primary font-black uppercase tracking-widest group">
                  Our Green Mission
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </motion.div>
              <motion.div 
                className="lg:col-span-7 relative aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image src="/images/impact-green-v2.png" alt="Afforestation" fill className="object-cover rounded-sm shadow-premium" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats: Quantifying the Future */}
      <section className="py-48 px-6 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-end">
          <motion.div 
            className="lg:col-span-6 space-y-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight leading-[0.9] uppercase" style={{ fontSize: 'var(--display-md)' }}>
                Quantifying <br/>
                <span className="text-tertiary italic serif normal-case">Momentum.</span>
             </h2>
             <p className="text-body-lg text-on-primary/60 max-w-md font-medium leading-relaxed">
                Strategic focus leads to measurable results. Our annual transparency report provides a deep dive into our operational efficiency and community impact.
             </p>
             <Button size="xl" variant="inverted" className="px-12 h-20 text-xl font-black uppercase tracking-widest transition-all">
                Download Report
             </Button>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 grid grid-cols-2 gap-x-12 gap-y-24"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             {[
               { val: "45k+", label: "Native Trees" },
               { val: "150+", label: "Active Leaders" },
               { val: "12", label: "Active Regions" },
               { val: "92%", label: "Placement Rate" }
             ].map((stat, i) => (
               <motion.div key={i} className="pl-8 border-l border-tertiary/40 space-y-2" variants={fadeInUp}>
                  <p className="text-6xl md:text-7xl font-heading font-black tracking-tighter text-on-primary">{stat.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-primary/40">{stat.label}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Final Movement: Call to Action */}
      <section className="relative py-48 px-6 bg-surface-lowest overflow-hidden">
         <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
            <motion.div 
              className="space-y-6"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
               <h2 className="font-heading font-black tracking-tight uppercase leading-[0.85] text-primary" style={{ fontSize: 'var(--display-md)' }}>Join the <br/><span className="italic serif opacity-60">Collective.</span></h2>
               <p className="text-body-lg text-primary/60 max-w-xl mx-auto font-medium border-t-2 border-tertiary/20 pt-8 mt-8">Receive monthly insights from the field, volunteer opportunities, and stories of transformation.</p>
            </motion.div>
            
            <motion.div 
              className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
               <input 
                  type="email" 
                  placeholder="name@foundation.org" 
                  className="flex-1 px-8 py-5 rounded-sm bg-surface-low border border-primary/10 text-primary focus:outline-none font-bold placeholder:text-primary/20"
               />
               <Button className="px-12 h-16 text-primary font-black uppercase tracking-widest transition-all">
                  Subscribe
               </Button>
            </motion.div>
         </div>

         {/* Abstract Decorative Elements */}
         <div className="absolute top-1/2 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </section>

    </main>
  )
}
