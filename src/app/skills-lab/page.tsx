"use client"

import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Palette, Users, Zap, ArrowRight, Binary, GraduationCap, Microscope } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const tracks = [
  {
    title: "Creative Mastery",
    icon: Palette,
    description: "Design thinking, editorial photography, and brand storytelling for the next generation of creators. We focus on the intersection of indigenous aesthetics and modern digital media.",
    directive: "Aesthetic Sovereignty",
    color: "text-tertiary",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Technical Excellence",
    icon: Binary,
    description: "Full-stack development, AI integration, and systems architecture focused on social impact. Our curriculum is tailored for low-resource environments with high-impact potential.",
    directive: "Systemic Innovation",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Leadership Lab",
    icon: GraduationCap,
    description: "Community organizing, strategic empathy, and project management for sustainable change. Developing the administrative backbone of regional development.",
    directive: "Institutional Stewardship",
    color: "text-secondary",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function SkillsLab() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      
      {/* 1. HERO SECTION - Immersive Editorial */}
      <section className="relative pt-48 pb-32 px-6 lg:px-16 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 text-tertiary font-bold text-sm uppercase tracking-widest"
            >
              <span className="w-12 h-px bg-tertiary" />
              Pedagogical Mandate
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-heading font-black tracking-tighter leading-[0.85] text-foreground"
              style={{ fontSize: 'var(--display-lg)' }}
            >
              Mastery <br />
              <span className="text-tertiary italic font-serif">through</span> <br />
              Momentum.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-body-lg text-foreground/50 max-w-xl font-medium leading-relaxed border-l-4 border-primary/20 pl-8"
            >
              The Skills Lab is our primary engine for human capital development. 
              We bridge the gap between untapped curiosity and industry-standard 
              proficiency through rigorous, cohort-based mentorship.
            </motion.p>
          </div>

          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-4 relative aspect-[4/5] rounded-sm overflow-hidden shadow-premium"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Skills training"
              fill
              className="object-cover grayscale"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE CURRICULUM - Vertical Narrative with Alternating Layouts */}
      <section className="py-32 px-6 lg:px-16 bg-surface-low relative">
        <div className="max-w-7xl mx-auto space-y-48">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-8 mb-24"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
             <h2 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--display-md)' }}>The Innovation <span className="text-tertiary">Tracks</span></h2>
             <p className="text-body-xl text-foreground/50 font-medium italic">
               A structured framework for high-altitude growth.
             </p>
          </motion.div>

          {tracks.map((track, i) => (
            <motion.div 
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className={`lg:col-span-6 space-y-10 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                 <div className="space-y-6">
                    <span className="text-sm font-black text-tertiary uppercase tracking-widest">Track 0{i + 1} // {track.directive}</span>
                    <h3 className="font-heading font-black tracking-tight uppercase leading-[0.9]" style={{ fontSize: 'var(--headline-lg)' }}>{track.title}</h3>
                    <p className="text-body-lg text-foreground/60 leading-relaxed font-medium">
                      {track.description}
                    </p>
                 </div>
                 
                 <div className="flex flex-wrap gap-4 pt-4">
                    <Button variant="outline" className="rounded-sm px-8 font-black uppercase tracking-widest bg-background border-foreground/5 hover:bg-primary hover:text-on-primary transition-all">
                      View Curriculum
                    </Button>
                    <Button variant="link" className="px-0 flex items-center gap-4 text-tertiary font-black uppercase tracking-widest group">
                      Learn More
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                 </div>
              </div>

              <div className={`lg:col-span-6 relative aspect-video rounded-sm overflow-hidden shadow-premium ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                 <Image 
                    src={track.image} 
                    alt={track.title} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                 />
                 <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. COHORT STATS - Institutional Data */}
      <section className="py-32 px-6 lg:px-16 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-12">
              <h2 className="font-heading font-black tracking-tighter uppercase leading-[0.85]" style={{ fontSize: 'var(--display-md)' }}>
                Measured <br/>
                <span className="text-tertiary italic font-serif">Outcomes.</span>
              </h2>
              <p className="text-body-lg text-on-primary/60 leading-relaxed font-medium italic border-l-4 border-tertiary/20 pl-8">
                We track every metric of success, from attendance to long-term career placement, 
                ensuring our pedagogical methods evolve with the global economy.
              </p>
           </div>

           <div className="grid grid-cols-2 gap-px bg-on-primary/10">
              {[
                { label: "Graduated", value: "480+", unit: "Trainees" },
                { label: "Placement", value: "85%", unit: "Employment Rate" },
                { label: "Mentors", value: "24", unit: "Industry Experts" },
                { label: "Success", value: "100%", unit: "Project Completion" }
              ].map((stat, i) => (
                <div key={i} className="bg-primary p-12 space-y-4">
                   <p className="text-6xl font-heading font-black tracking-tighter text-on-primary">{stat.value}</p>
                   <div className="space-y-1">
                      <p className="text-xs font-black uppercase tracking-widest text-tertiary">{stat.label}</p>
                      <p className="text-[10px] uppercase font-medium text-on-primary/40">{stat.unit}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. APPLICATION CTA - Minimalist Institutional */}
      <section className="py-48 px-6 lg:px-16 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-16">
           <motion.div 
             className="space-y-6"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
              <h2 className="font-heading font-black tracking-tight uppercase leading-[0.8]" style={{ fontSize: 'var(--display-lg)' }}>
                Apply <br />
                <span className="text-tertiary italic font-serif">to</span> Cohort.
              </h2>
              <p className="text-2xl text-foreground/40 font-medium max-w-2xl mx-auto italic leading-relaxed pt-8 border-t-2 border-foreground/5 mt-8">
                Join our next intensive lab session. Limited spots available for the Spring 2025 cohort.
              </p>
           </motion.div>
           
           <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Button size="xl" className="px-16 group h-20 text-xl">
                Begin Application
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="px-16 h-20 text-xl border-none bg-surface-low">
                Download Brochure
              </Button>
           </div>
        </div>

        {/* Decorative subtle texture */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </section>

    </main>
  )
}
