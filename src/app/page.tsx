"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Sparkles, Laptop, Trophy, Heart, TreePine, Palette, Megaphone, Users, ArrowRight } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "circOut" as const }
}

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" as const }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-[7.5rem] font-heading font-black tracking-[calc(-0.04em)] leading-[0.85] text-foreground">
              Empowering <br />
              <span className="text-primary italic font-serif normal-case">Young Minds.</span> <br />
              Shaping the Future.
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/50 max-w-xl font-medium leading-snug">
              We nurture the next generation through holistic development, environmental stewardship, and community-driven innovation.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="xl" className="btn-primary-gradient px-10 h-20 text-xl font-black uppercase tracking-widest transition-all">
                Explore Our Vision
              </Button>
              <Button size="xl" variant="secondary" className="rounded-full px-10 h-20 text-xl font-black uppercase bg-surface-low text-foreground/70 hover:bg-surface-high transition-all flex items-center gap-3">
                View Programs
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>

          {/* Right Image with Floating Card */}
          <motion.div 
            className="flex-1 relative w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" as const }}
          >
            <div className="relative aspect-[4/5] rounded-[4.5rem] overflow-hidden shadow-premium">
              <Image 
                src="/images/hero-unified.png" 
                alt="Empowering Young Minds" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </div>
            
            {/* Floating Impact Card */}
            <motion.div 
              className="absolute bottom-10 -left-10 lg:-left-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
               <Card className="bg-secondary p-8 rounded-[2.5rem] border-none shadow-2xl space-y-3 max-w-[280px] hover:translate-y-[-10px] transition-transform cursor-default">
                 <div className="p-3 bg-white/20 rounded-2xl w-fit">
                    <Sparkles className="h-6 w-6 text-on-secondary" />
                 </div>
                 <div className="space-y-1 text-on-secondary">
                    <p className="text-4xl font-heading font-black leading-none">12k+</p>
                    <p className="text-sm font-bold opacity-70 leading-tight uppercase tracking-wider">
                        Lives Impacted <br/> since 2020
                    </p>
                 </div>
               </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Core Pillars Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
            {...fadeInUp}
          >
            <div className="space-y-4">
               <h2 className="text-6xl md:text-7xl font-heading font-black tracking-[calc(-0.04em)] uppercase leading-[0.9]">Our Core Pillars</h2>
               <p className="text-xl text-foreground/50 max-w-xl font-medium italic underline decoration-primary/20 underline-offset-8">Investing in diverse pathways for growth, from physical health to technological literacy.</p>
            </div>
            <div className="px-8 py-3 rounded-full border border-secondary/20 bg-secondary/5 text-secondary font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3">
               <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
               Holistic Approach
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
          >
            {/* Skill Development */}
            <motion.div className="md:col-span-2" variants={fadeInUp}>
              <Card className="rounded-[4rem] p-12 bg-white shadow-premium border-none flex flex-col justify-between min-h-[450px] group hover:scale-[1.01] transition-transform">
                 <div className="space-y-6">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Laptop className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-4xl font-heading font-black uppercase">Skill Development</h3>
                    <p className="text-foreground/50 text-lg font-medium max-w-md">Vocational training and digital literacy workshops for modern careers.</p>
                 </div>
                 <div className="relative h-56 w-full mt-12 rounded-[3rem] overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                    <Image src="/images/green.png" alt="Laptop" fill className="object-cover" />
                 </div>
              </Card>
            </motion.div>

            {/* Sports & Athletics */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full rounded-[4rem] p-12 bg-secondary border-none flex flex-col items-center justify-center text-center space-y-8 group hover:scale-[1.02] transition-transform">
                 <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Trophy className="h-10 w-10 text-on-secondary" />
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-4xl font-heading font-black text-on-secondary uppercase leading-none">Sports & Athletics</h3>
                    <p className="text-on-secondary/60 text-lg font-medium">Building teamwork and resilience through local leagues.</p>
                 </div>
              </Card>
            </motion.div>

            {/* Youth Health */}
            <motion.div variants={fadeInUp}>
              <Card className="rounded-[3rem] p-10 bg-tertiary border-none text-white space-y-6 group hover:translate-y-[-8px] transition-transform">
                 <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                 </div>
                 <h3 className="text-3xl font-black uppercase tracking-tight">Youth Health</h3>
                 <p className="text-white/70 font-medium">Access to nutrition, hygiene, and mental health support.</p>
              </Card>
            </motion.div>

            {/* Afforestation */}
            <motion.div className="md:col-span-2" variants={fadeInUp}>
              <Card className="rounded-[4rem] p-12 bg-surface-low border-none flex flex-col md:flex-row items-center gap-12 group hover:scale-[1.01] transition-transform">
                 <div className="space-y-6 flex-1 text-center md:text-left">
                    <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto md:mx-0">
                      <TreePine className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-4xl font-heading font-black uppercase leading-none">Afforestation</h3>
                    <p className="text-foreground/50 text-lg font-medium">Planting native trees and teaching climate stewardship to the youth.</p>
                 </div>
                 <div className="relative h-64 w-64 opacity-80 group-hover:scale-110 transition-transform duration-1000">
                    <Image src="/images/green.png" alt="Tree" fill className="object-contain" />
                 </div>
              </Card>
            </motion.div>

            {/* Micro Pillars */}
            {[
              { title: "Arts & Culture", icon: Palette },
              { title: "Advocacy", icon: Megaphone },
              { title: "Civic Leadership", icon: Users }
            ].map((pillar, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="rounded-[2.5rem] p-8 bg-surface-low border-none flex items-center gap-5 hover:bg-surface-high transition-colors cursor-default">
                   <div className="h-12 w-12 rounded-xl bg-surface-lowest flex items-center justify-center shadow-premium">
                      <pillar.icon className="h-6 w-6 text-primary" />
                   </div>
                   <h4 className="text-xl font-black uppercase tracking-tight">{pillar.title}</h4>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantifying the Change Section */}
      <section className="py-48 px-6 bg-foreground text-surface-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 lg:gap-32">
          <motion.div 
            className="flex-1 space-y-12"
            {...fadeInUp}
          >
             <h2 className="text-6xl md:text-[5.5rem] font-heading font-black tracking-[calc(-0.04em)] leading-[0.85] uppercase">
                Quantifying the <br/>
                <span className="text-primary italic font-serif normal-case">Change</span> We Create.
             </h2>
             <p className="text-xl text-white/50 max-w-md font-medium leading-relaxed italic">
                Our data-driven approach ensures every resource is maximized for long-term community benefit.
             </p>
             <Button size="xl" className="rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-on-primary border-none shadow-3xl shadow-primary/20 transition-all">
                Read Annual Report
             </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-x-12 gap-y-20 flex-1"
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
          >
             {[
               { val: "45k+", label: "Trees Planted" },
               { val: "150+", label: "Scholarships" },
               { val: "12", label: "Active Districts" },
               { val: "92%", label: "Success Rate" }
             ].map((stat, i) => (
               <motion.div key={i} className="pl-8 border-l-2 border-primary/30 space-y-4" variants={fadeInUp}>
                  <p className="text-6xl md:text-7xl font-heading font-black tracking-tighter">{stat.val}</p>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/30">{stat.label}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
         <motion.div 
            className="max-w-7xl mx-auto bg-primary rounded-[4rem] p-16 md:p-32 text-on-primary text-center space-y-12 relative"
            {...fadeInUp}
          >
            <div className="space-y-4">
               <h2 className="text-5xl md:text-[6rem] font-heading font-black tracking-tighter uppercase leading-[0.85]">Be a part of the <br/> movement.</h2>
               <p className="text-xl opacity-70 max-w-xl mx-auto font-medium italic underline underline-offset-4 decoration-white/20">Sign up for our monthly newsletter to get stories of impact and volunteer opportunities.</p>
            </div>
            
            <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 p-2 bg-white/10 backdrop-blur-xl rounded-[3rem] md:rounded-full">
               <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-full bg-white text-foreground focus:outline-none font-bold placeholder:text-foreground/30"
               />
               <Button className="rounded-full px-12 h-16 bg-foreground text-background font-black uppercase tracking-widest hover:bg-foreground/90 transition-all">
                  Join Us
               </Button>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-[12rem] -z-10" />
         </motion.div>
      </section>

      <Footer />
    </main>
  )
}
