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

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tight leading-[0.85] text-foreground" 
              style={{ fontSize: 'var(--display-lg)' }}
            >
              Empowering <br />
              <span className="text-primary italic font-serif normal-case">Young Minds.</span> <br />
              Shaping the Future.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-body-md md:text-body-lg text-foreground/50 max-w-xl font-medium leading-snug"
            >
              We nurture the next generation through holistic development, environmental stewardship, and community-driven innovation.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
              <Button size="xl" className="btn-primary-gradient px-10 h-20 text-xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                Explore Our Vision
              </Button>
              <Button size="xl" variant="secondary" className="rounded-full px-10 h-20 text-xl font-black uppercase bg-surface-low text-foreground/70 hover:bg-surface-high transition-all flex items-center gap-3 active:scale-95">
                View Programs
                <ArrowRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image with Floating Card */}
          <motion.div 
            className="flex-1 relative w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: editorialEasing }}
          >
            <div className="relative aspect-[4/5] rounded-[4.5rem] overflow-hidden shadow-premium">
              <Image 
                src="/images/hero-unified.png" 
                alt="Empowering Young Minds" 
                fill 
                priority
                className="object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </div>
            
            {/* Floating Impact Card */}
            <motion.div 
              className="absolute -bottom-12 -left-6 md:-left-20 bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] shadow-premium max-w-[280px] md:max-w-sm border border-white/20"
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: editorialEasing }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl md:text-[2.5rem] font-black leading-none tracking-tighter text-foreground">1,200+</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Lives Impacted</p>
                  </div>
                </div>
                <p className="text-sm md:text-body-md text-foreground/60 font-medium leading-relaxed italic">
                  &quot;Our goal is to build a future where every youth has the <span className="text-primary font-bold font-sans">tools to thrive</span>.&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Core Pillars Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4">
               <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>Our Core Pillars</h2>
               <p className="text-body-lg text-foreground/50 max-w-xl font-medium italic underline decoration-primary/20 underline-offset-8">Investing in diverse pathways for growth, from physical health to technological literacy.</p>
            </div>
            <div className="px-8 py-3 rounded-full border border-secondary/20 bg-secondary/5 text-secondary font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3">
               <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
               Holistic Approach
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Skill Development */}
            <Card level={1} variants={fadeInUp} className="md:col-span-2 p-10 flex flex-col justify-between min-h-[400px] h-full group">
               <div className="space-y-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Laptop className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-black uppercase text-foreground" style={{ fontSize: 'var(--display-sm)' }}>Skill Development</h3>
                  <p className="text-foreground/60 text-body-md font-medium max-w-md">Vocational training and digital literacy workshops for modern careers.</p>
               </div>
                <div className="relative h-48 w-full mt-10 rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image src="/images/skills-lab.png" alt="Skill Development" fill className="object-cover" />
                </div>
            </Card>

            {/* Sports & Athletics */}
            <Card level={0} variants={fadeInUp} className="h-full p-10 bg-secondary border-none flex flex-col items-center justify-center text-center space-y-8 group">
               <div className="h-16 w-16 rounded-full bg-foreground/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Trophy className="h-10 w-10 text-foreground" />
               </div>
               <div className="space-y-4">
                  <h3 className="font-heading font-black text-foreground uppercase leading-none" style={{ fontSize: 'var(--display-sm)' }}>Sports & <br/> Athletics</h3>
                  <p className="text-foreground/70 text-body-md font-medium">Building teamwork and resilience through local leagues.</p>
               </div>
            </Card>

            {/* Youth Health */}
            <Card level={0} variants={fadeInUp} className="rounded-[3rem] p-10 bg-tertiary border-none text-foreground space-y-6 group">
               <div className="h-12 w-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-foreground" />
               </div>
               <h3 className="text-3xl font-black uppercase tracking-tight text-foreground">Youth Health</h3>
               <p className="text-foreground/70 font-medium">Access to nutrition, hygiene, and mental health support.</p>
            </Card>

            {/* Afforestation */}
            <Card variants={fadeInUp} className="md:col-span-2 rounded-[4rem] p-12 bg-surface-low border-none flex flex-col md:flex-row items-center gap-12 group">
               <div className="space-y-6 flex-1 text-center md:text-left">
                  <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto md:mx-0">
                    <TreePine className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-4xl font-heading font-black uppercase leading-none">Afforestation</h3>
                  <p className="text-foreground/50 text-lg font-medium">Planting native trees and teaching climate stewardship to the youth.</p>
               </div>
                <div className="relative h-64 w-[50%] opacity-90 group-hover:scale-105 transition-transform duration-1000">
                  <Image src="/images/impact-green.png" alt="Afforestation" fill className="object-cover rounded-[3rem]" />
                </div>
            </Card>

            {/* Micro Pillars */}
            {[
              { title: "Arts & Culture", icon: Palette },
              { title: "Advocacy", icon: Megaphone },
              { title: "Civic Leadership", icon: Users }
            ].map((pillar, i) => (
              <Card key={i} level={0} variants={fadeInUp} className="rounded-[3rem] p-10 bg-white shadow-premium border-none flex flex-col items-start gap-8 cursor-default group">
                 <pillar.icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                 <h4 className="text-3xl font-black tracking-tight text-foreground leading-tight">{pillar.title}</h4>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantifying the Change Section */}
      <section className="pt-48 pb-64 px-6 bg-foreground text-surface-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 lg:gap-32">
          <motion.div 
            className="flex-1 space-y-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight leading-[0.85] uppercase" style={{ fontSize: 'var(--display-md)' }}>
                Quantifying the <br/>
                <span className="text-primary italic font-serif normal-case">Change</span> We Create.
             </h2>
             <p className="text-body-lg text-white/50 max-w-md font-medium leading-relaxed italic">
                Our data-driven approach ensures every resource is maximized for long-term community benefit.
             </p>
             <Button size="xl" className="rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-on-primary border-none shadow-3xl shadow-primary/20 transition-all active:scale-95">
                Read Annual Report
             </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-x-12 gap-y-20 flex-1"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             {[
               { val: "45k+", label: "Trees Planted" },
               { val: "150+", label: "Scholarships" },
               { val: "12", label: "Active Districts" },
               { val: "92%", label: "Success Rate" }
             ].map((stat, i) => (
               <motion.div key={i} className="pl-8 border-l-2 border-primary/30 space-y-4" variants={fadeInUp}>
                  <p className="text-6xl md:text-7xl font-heading font-black tracking-tighter text-primary">{stat.val}</p>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="pb-24 px-6 md:px-12 lg:px-16 -mt-48 relative z-10">
         <motion.div 
            className="max-w-7xl mx-auto bg-primary rounded-[4rem] p-16 md:p-32 text-on-primary text-center space-y-12 relative shadow-3xl"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
               <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.85]" style={{ fontSize: 'var(--display-md)' }}>Be a part of the <br/> movement.</h2>
               <p className="text-body-lg opacity-70 max-w-xl mx-auto font-medium italic underline underline-offset-4 decoration-white/20">Sign up for our monthly newsletter to get stories of impact and volunteer opportunities.</p>
            </div>
            
            <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 p-2 bg-white/10 backdrop-blur-xl rounded-[3rem] md:rounded-full">
               <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-full bg-background text-foreground focus:outline-none font-bold placeholder:text-foreground/30"
               />
               <Button className="rounded-full px-12 h-16 bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-lg active:scale-95">
                  Join Us
               </Button>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-[12rem] -z-10" />
         </motion.div>
      </section>

    </main>
  )
}
